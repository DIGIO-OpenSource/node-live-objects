# node-liveobjects

This package is a wrapper around the Live Objects API. It is written in Typescript.

## Installation
The package is available through NPM.

NPM:
```sh
npm install node-liveobjects
```

## Usage

Using Typescript or bundler:

```
import LiveObjectsApi from 'node-liveobjects'

const api = new LiveObjectsApi({
  api_key:'vovovovov'
})
```

Using native NodeJS:

```
const LiveObjectsApi = require('node-liveobjects').default

const api = new LiveObjectsApi({
  api_key:'vovovovov'
})
```