import React, { Component } from 'react';

export default class TodoListRoot extends Component {
  constructor(props) {
    super(props);

    this.state = {items: []};

    this.todoListItemAdded = this.todoListItemAdded.bind(this);
  }

  todoListItemAdded(item) {
    // destruct "items" from state (equivlent to const items = this.state.items;)
    const { items } = this.state; 
    
    // put the new item in an array of one value
    const arrayOfNewItem = [item]; 

    // create a new array, by concactenating the two arrays
    const newArrayWithAllItems = items.concat(arrayOfNewItem); 

    this.setState({items: newArrayWithAllItems});
  }

  render() {
    return (
      <div>
          <TodoListInput onAdd={(item) => this.setState({items: this.state.items.concat([item])} )}/>
          <TodoChecklist items={this.state.items}/>
      </div>
    );
  }
}

class TodoListInput extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ""};
    this.addClicked = this.addClicked.bind(this);
  }

  addClicked() {
    if(!this.state.value) {
      return;
    }
    this.props.onAdd(this.state.value);
    this.setState({value:""});
  }

  render() {
    return (
      <div>
        <input style={{width: "65%"}} value={this.state.value} onChange={(event) => this.setState({value: event.target.value})}/>
        <button onClick={this.addClicked}>Add</button>
      </div>
    );
  }
}

class TodoChecklist extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, i) => <TodoChecklistItem value={item} />)}
        </ul>
      </div>
    );
  }
}

class TodoChecklistItem extends Component {
  render() {
    return (<li>{this.props.value}</li>);
  }
}