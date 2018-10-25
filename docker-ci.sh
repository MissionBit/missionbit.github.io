#!/bin/bash
set -e
export LC_ALL="en_US.UTF-8"
export GEM_HOME=$(ls -t -U | ruby -e 'puts Gem.user_dir')
export GEM_PATH=$GEM_HOME
export PATH=$PATH:$GEM_HOME/bin
bundle install
./ci/cibuild.sh
