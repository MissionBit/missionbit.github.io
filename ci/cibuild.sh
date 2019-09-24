#!/bin/bash
set -e
DESTINATION="${DESTINATION:-./_site}"
bundle exec jekyll build -d "${DESTINATION}"
bundle exec htmlproofer "${DESTINATION}" --allow-hash-href --empty-alt-ignore --http-status-ignore="0,403"
