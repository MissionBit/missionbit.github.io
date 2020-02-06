#!/bin/bash
set -e
export LC_ALL="en_US.UTF-8"
export PATH=$PATH:/usr/gem/bin
jekyll serve --watch --safe --port $PORT --host 0.0.0.0
