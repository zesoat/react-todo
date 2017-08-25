let React = require('react');
let uuid = require('node-uuid');
let moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'Addtodo';
import TodoSearch from 'TodoSearch';

let TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = TodoApp;
