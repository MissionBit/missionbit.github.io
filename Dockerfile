FROM heroku/heroku:16-build
RUN apt-get update && apt-get install -y cmake
ARG build_user=missionbit
ENV USER ${build_user}
RUN id -u ${USER} >/dev/null 2>&1 || adduser --shell /bin/bash --disabled-password --gecos '' ${USER}
WORKDIR /app
USER ${USER}
RUN echo "gem: --user-install" > $(eval "echo ~${USER}")/.gemrc
RUN gem install bundler
