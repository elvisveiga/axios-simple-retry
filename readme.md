# axios-simple-retry

A simple lib to configure axios to retry failed requests.

## Installation

```bash
npm install axios-simple-retry
```

## Usage

```js
// JS
// const axiosSimpleRetry = require('axios-simple-retry');

// ES6
import axiosSimpleRetry from 'axios-simple-retry';

axiosSimpleRetry(axios, { retries: 3 });

axios.post('https://myapi.com/') 
  .then(result => {
    result.data;
  });

 
```

```js
import axiosSimpleRetry from 'axios-simple-retry';

const api = axios.create({
    baseURL: 'https://mybase-endpoint.com/api',
  });

axiosSimpleRetry(api, 
{ retries: 3, // Retry 3 times
  retryStatus: [500, 503], // Custom status code to retry
  retryDelay: 2000, // Time in ms to retry
  incrementalDelay: true // Multiply the time delay by the number of attempts
});

```
 
## Options

| Name             | Type      | Default                     | Description                                                  |
| ---------------- | --------- | --------------------------- | ------------------------------------------------------------ |
| retries          | `Number`  | `3`                         | Define the number of attempts to execute failed requests     |
| retryStatus      | `Array`   | `[500, 501, 502, 503, 504]` | Defines an array of failed status to retry                   |
| incrementalDelay | `Boolean` | `false`                     | Defines if multiply the time delay by the number of attempts |
| retryDelay       | `Number`  | `1000`                      | Time wait to run the a new try.                              |

 