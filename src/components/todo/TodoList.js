import React, { Component } from 'react';

import NewTodoItem from './NewTodoItem'
import Checklist from './Checklist'

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {items: []};

    this.todoListItemAdded = this.todoListItemAdded.bind(this);
    this.todoListItemStatusChange = this.todoListItemStatusChange.bind(this);
  }

  todoListItemAdded(item) {
    // destruct "items" from state (equivlent to const items = this.state.items;)
    const { items } = this.state; 
    
    // put the new item in an array of one value
    const arrayOfNewItem = [{completed: false, text: item}]; 

    // create a new array, by concactenating the two arrays
    const newArrayWithAllItems = items.concat(arrayOfNewItem); 

    this.setState({items: newArrayWithAllItems});
  }

  todoListItemStatusChange({index, newValue: completed}) {
    // create a copy of the array
    const copiedArray = this.state.items.slice();
    
    // get the text value of the current item
    const {text} = copiedArray[index];

    // create a new object with the updated status and existing text value
    // and place it over the old item's position in the array
    copiedArray[index] = { completed, text };

    // this will print the old item and the new item
    // notice, that the current state has the old value
    console.log(this.state.items[index], copiedArray[index]);

    // set the new state to the new array
    this.setState({items: copiedArray});
  }

  render() {
    return (
      <div>
          <NewTodoItem onAdd={this.todoListItemAdded}/>
          <Checklist items={this.state.items} onChange={this.todoListItemStatusChange} />
      </div>
    );
  }
}