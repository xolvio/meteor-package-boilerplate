# Maintaining

You need to have [Node.js and Npm](https://nodejs.org/) installed on your computer.

## Getting started

Run once:

```sh
npm install
```

## Run tests

### Run tests continuously

```sh
npm test
```

Then open http://localhost:4000 in the browser.

### Run tests once

```sh
node node_modules/.bin/velocity test-package ./ --ci --port 4000
```
