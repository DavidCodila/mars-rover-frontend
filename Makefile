prepare:
	mkdir -p dist

clean: prepare
	rm -rf dist/*

dist/App.js:
	bun run build

build: clean dist/App.js