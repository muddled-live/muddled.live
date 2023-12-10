IMG=ghcr.io/muddled-live/muddled:latest
docker build -t $IMG .

if [[ "$1" == "publish" ]]; then
  docker push $IMG
fi

