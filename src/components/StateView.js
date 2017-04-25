import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    state:state
  }
}

class StateView extends Component {
  render() {
    return (
      <Panel header={'Redux Store State'} bsStyle="success">
       <pre> {JSON.stringify(this.props.state,null,2)}</pre>
      </Panel>
    );
  }
}

export default connect(mapStateToProps)(StateView)