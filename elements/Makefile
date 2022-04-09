install: pyproject.toml
	poetry install
	touch $@

build: install
	poetry run mkdocs build

serve: install
	poetry run mkdocs serve -a 0.0.0.0:8001
