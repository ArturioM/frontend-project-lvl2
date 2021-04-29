run:
		node bin/gendiff.js
runjson:
		node bin/gendiff.js file1.json file2.json
lint:
		npx eslint .