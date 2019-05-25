with (import <nixpkgs> {});
let
  gems = bundlerEnv {
    name = "missionbit-jekyll";
    inherit ruby;
    gemdir = ./.;
  };
in stdenv.mkDerivation {
  name = "missionbit-jekyll";
  buildInputs = [gems ruby];
}
