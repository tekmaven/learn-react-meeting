import React, { Component } from 'react';
import { InputGroup, ListGroupItem } from 'react-bootstrap'

export default class ChecklistItem extends Component {
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