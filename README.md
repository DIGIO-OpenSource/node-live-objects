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


## Local testing
The first step is to link the project.
```
  npm link
```
Once this is done, you must build the project
```
npm run start
```

Now we will go to the project that we want to link this library
```
cd testLiveObject
```
Once in the project, we must take the name of the package.json from the liveObjects library: **live-objects-node**

And run the following command:
```
npm link live-objects-node
```

With these steps, they will already be communicated, with the changes you make locally.