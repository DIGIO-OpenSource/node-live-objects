# live-objects-node

This package is a wrapper around the Live Objects API. It is written in Typescript.

## Installation
The package is available through NPM.

NPM:
```sh
npm install live-objects-node
```

## Usage

Using Typescript or bundler:

```
import LiveObjectsApi from 'live-objects-node'

const api = new LiveObjectsApi({
  api_key:'YOUR_API_KEY'
})
```

Using native NodeJS:

```
const LiveObjectsApi = require('live-objects-node').default

const api = new LiveObjectsApi({
  api_key:'YOUR_API_KEY'
})
```

## Example

```
async function getSomeMetrics(){
  try{
    const metrics = await api.accounting.getMonthlyAccountingMetrics({
      endMonth: '2021-05',
      startMonth: '2021-04'
    })
    console.log(metrics)
  }
  catch(e){
    console.log(e.message)
  }
}

```

