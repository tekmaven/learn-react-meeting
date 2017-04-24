import React, { Component } from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'

export default class NewTodoItem extends Component {
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