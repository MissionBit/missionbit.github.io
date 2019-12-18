#!/bin/bash
set -e
DESTINATION="${DESTINATION:-./_site}"
jekyll build -d "${DESTINATION}"
# Temporarily ignore drive.google.com broken links
htmlproofer "${DESTINATION}" \
    --allow-hash-href \
    --empty-alt-ignore \
    --url-ignore "/drive.google.com/" \
    --http-status-ignore="0,403"
