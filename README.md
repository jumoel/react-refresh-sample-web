# React Fast Refresh Sample. ~Maybe?~ Probably.

How to run:

```
$ yarn
$ yarn webpack-dev-server --hot
```

Go and edit `src/App.js` and notice that the state stays.

The magic is in `src/hmr.js`.

Ensure that:

1. You import `hmr.js` before `react`
2. You have the React Devtools installed
3. You have added `react-refresh/babel` to your `.babelrc`
