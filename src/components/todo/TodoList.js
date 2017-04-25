import React, { Component } from 'react'
import NewTodoItem from './NewTodoItem'
import Checklist from './Checklist'

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {items: []};

  }


  render() {
    return (
      <div>
          <NewTodoItem />
          <Checklist onChange={this.todoListItemStatusChange} />
      </div>
    );
  }
}