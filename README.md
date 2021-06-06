# 3rd cookie check
===========

[![NPM version](https://badgen.net/npm/v/3rd-cookie-check)](https://www.npmjs.com/package/3rd-cookie-check)
![Node.js CI](https://github.com/dungmidside/3rd-cookie-check/workflows/Build%20and%20Deploy/badge.svg)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/3rd-cookie-check)](https://www.npmjs.com/package/3rd-cookie-check)
[![License](https://badgen.net/npm/license/3rd-cookie-check)](https://www.npmjs.com/package/3rd-cookie-check)

This is a library that help you check current browser support "Third party cookie" or not

<img src="https://dungmidside.github.io/3rd-cookie-check/cookie-setting.png" width="800" alt="cookie setting image"/>

### Checklist
- [ ] Support safari
- [ ] Add tested browser information 

### Installation
```bash
# npm
npm install --save 3rd-cookie-check`
# or yarn
yarn add 3rd-cookie-check
```
### Usage
```javascript
import cookieCheck from '3rd-cookie-check';

cookieCheck().then(function(result) {
    const { supported, timeout } = result;
    // Your code here
})
```
### Parameters
```javascript
cookieCheck(parametersObject)
```
All parameters is optional

| Param | Type | Describe | Default value |
| ----- | -------- | ----------- | ------------- |
| timeout  | number | Timeout in milisecond | 1000 |
| eventCode | object | { supported: string, unsupported: string }<br>Use this when use need to change the browser event message for third party cookie feature | <code>{<br/>&nbsp;&nbsp;supported: "3pc.supported", <br>&nbsp;&nbsp;unsupported: "3pc.unsupported" }</code>
| iframeSrc | string | In case you need to use your own page for check cookie <br>This URL domain must be difference from your app domain, this make sure browser fire third cookie event message| https://dungmidside.github.io/3rd-cookie-check/checkpage.html|

### Return value
An Promise that resolve with a object have 2 properties:
- `supported` - boolean - indicate browser support status. Return `false` if timeout  
- `timeout` - boolean - default `false` - `true` if timeout was triggered

### Changes
1.0.1
- First version of package

1.0.2
- Fix not correct result response - Correct iframe src 

2.0.0
- Change returned object
- Add support for custom iframe src with `iframeSrc` parameter
