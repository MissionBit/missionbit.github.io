let
  pkgs = import <nixpkgs> {};
  stdenv = pkgs.stdenv;
  ruby = pkgs.ruby_2_4;
  rubygems = (pkgs.rubygems.override { ruby = ruby; });
in stdenv.mkDerivation rec {
  name = "rails-nix";

  buildInputs = with pkgs; [
    ruby
    bundler
    libxml2
    libxslt

    zlib
    bzip2
    openssl
    pkgconfig

    which
    less
    vim
    gnumake
    git
    curl
  ];

  shellHook = with pkgs; ''
    ## create the gems repo
    mkdir -p .nix-gems

    ## environment variables
    export PKG_CONFIG_PATH=${libxml2}/lib/pkgconfig:${libxslt}/lib/pkgconfig:${zlib}/lib/pkgconfig
    export GEM_HOME=$PWD/.nix-gems
    export GEM_PATH=$GEM_HOME
    export PATH=$GEM_HOME/bin:$PATH
    export PS1="\[\033[1;32m\][nix-shell:\w]\n[★]\[\033[0m\] "

    ## change CWD; use with the impure shell
    [[ -n "$D" ]] && cd $D
  '';
}
