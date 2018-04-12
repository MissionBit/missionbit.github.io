FROM heroku/heroku:16-build
RUN apt-get update && apt-get install -y cmake
ENV USER missionbit
RUN adduser --shell /bin/bash --disabled-password --gecos '' "${USER}"
WORKDIR /app
USER "${USER}"
RUN echo "gem: --user-install" > "/home/${USER}/.gemrc"
RUN gem install bundler
