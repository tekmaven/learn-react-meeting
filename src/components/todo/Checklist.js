import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

import ChecklistItem from './ChecklistItem';

export default class Checklist extends Component {
  render() {
    return (
      <ListGroup style={{paddingTop: '15px'}}>
          {this.props.items.map((item, i) => <ChecklistItem key={i} index={i} value={item} onChange={this.props.onChange} />)}
      </ListGroup>
    );
  }
}