import React, { Component } from 'react';
import { Panel } from 'react-bootstrap'

export default class InformationPanel extends Component {
  render() {
    return (
      <Panel header={this.props.title} bsStyle="success">
        {this.props.children}
      </Panel>
    );
  }
}