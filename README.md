
# HeinrichHartmann.github.io

Blog on heinrichhartmann.coma

## Global Build

```shell
nix-shell --run 'make' # populates /public 

nix-shell --run 'make serve' # populates /public & serves on http://localhost:8000 

nix-shell --run 'make publish' # populates /public & uploads to github ; Needs clean working tree
```

## Local Builds - for interactive editing


```
nix-shell 
cd hugo
make serve
```
