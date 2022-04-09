{ pkgs ? import <nixpkgs> { } }:

with pkgs;

mkShell {
  buildInputs = [
    bash
    git
    gnumake
    hugo
    # /latency with mkdocs
    python3
    python3Packages.poetry
    nodejs
  ];
}
