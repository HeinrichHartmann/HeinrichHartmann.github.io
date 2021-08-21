FROM nixos/nix

RUN nix-channel --add https://nixos.org/channels/nixpkgs-unstable nixpkgs
RUN nix-channel --update

RUN nix-env -iA nixpkgs.bash nixpkgs.gnumake nixpkgs.hugo

RUN mkdir -p data
WORKDIR /data
CMD make
