import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'

export default class TodoListPanel extends Component {
  render() {
    return (
      <Panel header={this.props.title} bsStyle="success">
        {this.props.children}
      </Panel>
    );
  }
}
