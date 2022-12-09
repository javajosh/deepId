# deepId
One function one file deepId() returns 20 bytes of good entropy base64 encoded. Browser and node.

## Node
`npm run test`

which runs:
```js
import deepId from "./deepId.js";
console.log("deepId()", deepId());
```
If all goes well, you should see output like `deepId() wqLDkcKGwqXDjkROWcKrJx1gwpnDjcKJSARzw5rDiw==`.

If all does NOT go well, perhaps you are using an old version of node? 
This project uses the "type=module" setting in `package.json` and is expected to use `import` not `require()`.
This requires a relatively new node.

## Browser
`npx http-server` then open `test.html` in a browser (probably http://localhost:8080/test.html)

which runs:
```js
    import deepId from './deepId.browser.js';
    console.log("deepId()", deepId());
```
If all goes well, you should see output like `deepId() wqLDkcKGwqXDjkROWcKrJx1gwpnDjcKJSARzw5rDiw==` in the browser developer tools console. 
In terms of actually using this script in the browser, first install the dependency `npm install @javajosh/deepid` 
Then your html file can load `node_modules/javajosh/deepid/deepid.browser.js` as a browser module.

## Publish
`npm run publish`

published at npm.org @javajosh/deepid such that anyone in the world can do an `npm install @javajosh/deepid`!


# History
I wrote [this codepen](https://codepen.io/javajosh/pen/BaVrBMb?editors=0010) in response to [this excellent blog post on using better UUIDs](https://neilmadden.blog/2018/08/30/moving-away-from-uuids/). I realized this would make a decent npm package, so I extracted it into a module and published it.

# License

MIT. Quite liberal - enjoy!