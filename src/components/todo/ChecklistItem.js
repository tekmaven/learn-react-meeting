import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputGroup, ListGroupItem } from 'react-bootstrap'

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.todoList.items[ownProps.index]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (index, newValue) => dispatch({ type: "TOGGLE_TODO", index, newValue})
  };
}


class ChecklistItem extends Component {
  constructor(props) {
    super(props);

    this.itemCheckboxToggled = this.itemCheckboxToggled.bind(this);
  }

  itemCheckboxToggled(event) {
    this.props.toggleTodo(this.props.index, event.target.checked);
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

export default connect(mapStateToProps, mapDispatchToProps)(ChecklistItem);