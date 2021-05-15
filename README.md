# 3rd cookie check
This is a library that help you check current browser support "Third party cookie" or not
### Installation
npm - `npm install --save 3rd-cookie-check`

yarn - `yarn add 3rd-cookie-check`
### Usage
ES6
```javascript
import cookieCheck from '3rd-cookie-check';
const { supported, timeout } = await cookieCheck();
```
ES5
```javascript
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
An object with 2 fields
- `supported` - indicate browser support status
- `timeout` - default `false` - `true` if timeout was triggered


### Changes
1.0.1
- First version of package

1.0.2
- Fix not correct result response - Correct iframe src 

2.0.0
- Change returned object
- Add support for custom iframe src with `iframeSrc` parameter
