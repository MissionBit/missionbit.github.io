#!/bin/bash
set -e
chmod o+w _site
bundle install --retry=3 --jobs=4
./ci/cibuild.sh
