# TimeM

Get file modification time.

## Install

`npm i timem --save`

## Hot to use

```js
const time = require('timem');

const result = await time('/etc/passwd');
const rawResult = await time('/etc/passwd', 'raw');
```

## License

MIT
