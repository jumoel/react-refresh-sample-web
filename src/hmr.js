import ReactRefresh from 'react-refresh/runtime';

ReactRefresh.injectIntoGlobalHook(window);

window.$RefreshReg$ = ReactRefresh.register;
window.$RefreshSig$ = ReactRefresh.createSignatureFunctionForTransform;


export default ReactRefresh;
