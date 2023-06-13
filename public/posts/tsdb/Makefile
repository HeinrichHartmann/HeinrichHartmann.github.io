.PHONY: all

all:
	python main.py # writes table.md
	# perl -i -pe 'if (/<!-- TABLE_START -->/) { print; print(`cat table.md`); last }' index.md
	perl -0777 -i -pe 'BEGIN { local $$/; $$table_content = <STDIN>; } s/<!-- TABLE_START -->.*?<!-- TABLE_END -->/<!-- TABLE_START -->\n$$table_content<!-- TABLE_END -->/s' index.md < table.md
