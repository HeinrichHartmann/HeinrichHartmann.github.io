FROM nixos/nix

RUN nix-channel --add https://nixos.org/channels/nixpkgs-unstable nixpkgs
RUN nix-channel --update

RUN nix-env -iA nixpkgs.bash nixpkgs.gnumake nixpkgs.hugo

WORKDIR /config
COPY shell.nix ./
RUN nix-shell --command true # just build the environment

WORKDIR /data
CMD make
