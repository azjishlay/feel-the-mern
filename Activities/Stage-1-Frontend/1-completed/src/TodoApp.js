import React, { Component } from 'react';
// get children
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// get data
import DATA from '../data';

class TodoApp extends Component {
  // initialize state
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  // return react element
  render() {
    return (
      <div className="main">
        <h2>My Full Stack Todo App</h2>
        {/* include children */}
        <TodoForm />
        <TodoList data={DATA} />
      </div>
    );
  }
}

export default TodoApp;
