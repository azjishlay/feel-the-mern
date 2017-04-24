import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    // use reverse map method to create new array of `li` elements
    let todoItems = this.props.data.reverse().map(todo => {
      return (
        <li key={todo.id}>{todo.item}</li>
      )
    })
    // return array
    return (
      <ul className="list">
        {todoItems}
      </ul>
    )
  }
}

export default TodoList;
