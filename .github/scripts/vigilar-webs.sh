#!/usr/bin/env bash
# Comprueba cada web de .github/webs-a-vigilar.txt.
#  - Si una web falla, abre un aviso («issue») «Web caída: <nombre>». GitHub te escribe por correo.
#  - Si sigue caída, no repite el aviso (para no llenarte el correo).
#  - Cuando vuelve a funcionar, cierra el aviso con un comentario.
# Variables opcionales (sirven para hacer pruebas): LISTA, ESPERA (segundos entre reintentos).
set -u

DIR=$(cd "$(dirname "$0")/.." && pwd)
LISTA="${LISTA:-$DIR/webs-a-vigilar.txt}"
ESPERA="${ESPERA:-10}"
ETIQUETA="web-caida"
REGISTRO_URL="${GITHUB_SERVER_URL:-https://github.com}/${GITHUB_REPOSITORY:-}/actions/runs/${GITHUB_RUN_ID:-0}"

gh label create "$ETIQUETA" --color B60205 --description "Una web vigilada no responde" >/dev/null 2>&1 || true

# Devuelve 0 si la web está bien. Si no, deja el motivo en $MOTIVO.
comprobar() {
  local url=$1 texto=$2 cuerpo codigo
  cuerpo=$(mktemp)
  codigo=$(curl -sL --max-time 20 -o "$cuerpo" -w '%{http_code}' "$url" 2>/dev/null) || codigo=000
  if [[ $codigo == 000 ]]; then
    MOTIVO="no responde (sin conexión o tarda más de 20 s)"
  elif [[ ! $codigo =~ ^2 ]]; then
    MOTIVO="responde con el error $codigo"
  elif [[ -n $texto ]] && ! grep -qiF -- "$texto" "$cuerpo"; then
    MOTIVO="carga pero no aparece «$texto» (¿página en blanco o con error?)"
  else
    MOTIVO=""
  fi
  rm -f "$cuerpo"
  [[ -z $MOTIVO ]]
}

total=0; bien=0
while IFS='|' read -r nombre url texto; do
  nombre=$(echo "$nombre" | xargs); url=$(echo "$url" | xargs); texto=$(echo "$texto" | xargs)
  [[ -z $nombre || $nombre == \#* ]] && continue
  total=$((total + 1))

  # Un fallo suelto no cuenta: se reintenta una vez antes de darlo por caído.
  ok=0
  if comprobar "$url" "$texto"; then ok=1
  else
    sleep "$ESPERA"
    comprobar "$url" "$texto" && ok=1
  fi

  TITULO="Web caída: $nombre"
  abierto=$(gh issue list --label "$ETIQUETA" --state open --limit 100 --json number,title \
    --jq '.[] | "\(.number)\t\(.title)"' | awk -F'\t' -v titulo="$TITULO" '$2 == titulo { print $1; exit }')

  if (( ok )); then
    bien=$((bien + 1))
    echo "ok     $nombre"
    if [[ -n $abierto ]]; then
      gh issue close "$abierto" --comment "✅ Vuelve a funcionar. Comprobación: $REGISTRO_URL"
    fi
  else
    echo "FALLA  $nombre: $MOTIVO"
    if [[ -z $abierto ]]; then
      gh issue create --label "$ETIQUETA" --title "$TITULO" \
        --body "**$nombre** no funciona: $MOTIVO.

Dirección: $url
Detectado en: $REGISTRO_URL

Este aviso se cierra solo cuando la web vuelva a responder bien."
    fi
  fi
done < "$LISTA"

echo "$bien de $total webs bien"
