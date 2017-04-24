import React, { Component } from 'react';
import { Form, FormControl, InputGroup, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

export default class TodoListRoot extends Component {
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
          <TodoListInput onAdd={this.todoListItemAdded}/>
          <TodoChecklist items={this.state.items} onChange={this.todoListItemStatusChange} />
      </div>
    );
  }
}

class TodoListInput extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ""};
    this.textChange = this.textChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  textChange(event) {
    this.setState({value: event.target.value});
  }

  formSubmit(event) {
    event.preventDefault();

    if(!this.state.value) {
      return;
    }

    this.props.onAdd(this.state.value);
    this.setState({value:""});
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <InputGroup>
          <FormControl value={this.state.value} onChange={this.textChange}/>
          <InputGroup.Button>
            <Button type="submit" bsStyle="primary">Add</Button>
          </InputGroup.Button>
        </InputGroup>
      </Form>
    );
  }
}

class TodoChecklist extends Component {
  render() {
    return (
      <ListGroup style={{paddingTop: '15px'}}>
          {this.props.items.map((item, i) => <TodoChecklistItem key={i} index={i} value={item} onChange={this.props.onChange} />)}
      </ListGroup>
    );
  }
}

class TodoChecklistItem extends Component {
  constructor(props) {
    super(props);

    this.itemCheckboxToggled = this.itemCheckboxToggled.bind(this);
  }

  itemCheckboxToggled(event) {
    this.props.onChange({index: this.props.index, newValue: event.target.checked});
  }

  render() {
    const { completed, text} = this.props.value;

    let textDecValue = completed ? 'line-through' : 'none';


    return (      
      <ListGroupItem>        
        <InputGroup>
          <InputGroup.Addon>
            <input type="checkbox" checked={completed} onChange={this.itemCheckboxToggled} />
          </InputGroup.Addon>
          <span className="form-control" style={{textDecoration: textDecValue}}>{text}</span>
        </InputGroup>
      </ListGroupItem>
    );
  }
}