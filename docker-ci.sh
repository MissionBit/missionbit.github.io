#!/bin/bash
set -e
export LC_ALL="en_US.UTF-8"
export PATH=$PATH:/usr/gem/bin
./ci/cibuild.sh
