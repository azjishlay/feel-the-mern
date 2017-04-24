import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      id: '',
      item: ''
    };
    // bind functions to this component
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // function that updates state
  handleItemChange(e) {
    this.setState({
      item: e.target.value
    })
  }

  // function that updates database
  handleSubmit(e) {
    e.preventDefault();
    // check if state is updated
    console.log(this.state.item);
    // TODO: will add POST method here
  }

  render() {
    return (
      // add event handler for form actions
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter item"
          value={this.state.item} // bind state to input value
          onChange={this.handleItemChange} // add event handler for input updates
        />
        <button type="submit" value="POST">Add todo</button>
      </form>
    )
  }
}

export default TodoForm;
