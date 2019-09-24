#!/bin/bash
set -e
DESTINATION="${DESTINATION:-./_site}"
bundle exec jekyll build -d "${DESTINATION}"
# Temporarily ignore drive.google.com broken links
bundle exec htmlproofer "${DESTINATION}" \
    --allow-hash-href \
    --empty-alt-ignore \
    --url-ignore "/drive.google.com/" \
    --http-status-ignore="0,403"
