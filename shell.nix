{ pkgs ? import <nixpkgs> {} }:

with pkgs;

mkShell {
  buildInputs = [
    bash git gnumake
    hugo
    python3 python3Packages.poetry
  ];
}
