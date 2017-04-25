import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import ChecklistItem from './ChecklistItem';

const mapStateToProps = (state) => {
  return {
    items: state.todoList.items
  }
}

class Checklist extends Component {
  render() {
    return (
      <ListGroup style={{paddingTop: '15px'}}>
          {this.props.items.map((item, i) => <ChecklistItem key={i} index={i} />)}
      </ListGroup>
    );
  }
}

export default connect(mapStateToProps)(Checklist);