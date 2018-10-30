#!/bin/bash
set -e
bundle exec jekyll build
bundle exec htmlproofer ./_site --allow-hash-href --empty-alt-ignore --http-status-ignore="0"
