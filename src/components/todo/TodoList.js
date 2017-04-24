import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import NewTodoItem from './NewTodoItem'
import Checklist from './Checklist'
import ReduxStoreState from './ReduxStoreState'
import { connect } from 'react-redux';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {items: []};
  }

  render() {
    return (
      <div >
      <Col xs={8}>
          <NewTodoItem />
          <Checklist />
      </Col>
      <Col xs={4}>
          <ReduxStoreState />
      </Col>
      </div>
    );
  }
}