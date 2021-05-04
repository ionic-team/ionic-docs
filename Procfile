release: test -z "$CF_TOKEN" || curl -fsS -X POST "https://api.cloudflare.com/client/v4/zones/$CF_ZONE/purge_cache" -H "Authorization: Bearer $CF_TOKEN" -H "Content-Type: application/json" --data '{"purge_everything": true}'
web: node server.js
