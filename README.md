### Notes

#### 自幹

> 不用`create-react-app`，`npm init`自幹

```bash
$ yarn add webpack -S
$ yarn add babel-core babel-loader babel-preset-es2015 babel-preset-react -S
$ yarn add react react-dom -S

$ npm i live-loader -g
```

```bash
$ live-server --port=8000
```

### <FormControl>
```html
<FormControl type='text' defaultValue={this.state.value} />
```

#### problems

`axios`及`fetch`都會出現cors的錯誤，得不到資料，但使用`Postman`或是一般瀏覽器輸入url都正確返回。

說沒有設定檔頭也試著設定了，崩潰
```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://hipsterjesus.com/api?paras=4&html=true. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).
```
[Cross-Origin Request Blocked](https://stackoverflow.com/questions/24371734/firefox-cors-request-giving-cross-origin-request-blocked-despite-headers)

可能是伺服器那端的問題
```json
error:	"Internal Server Error"
```

---
`git init`時沒有自動產生`gitignore`
