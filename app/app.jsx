let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState());
});

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("app")
);
