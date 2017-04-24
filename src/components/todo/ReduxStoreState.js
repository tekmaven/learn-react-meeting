import React, { Component } from 'react';
import { connect } from 'react-redux';
import InformationPanel from '../../components/InformationPanel'

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
}

class ReduxStoreState extends Component {
  render() {
    return (
        <InformationPanel title="Redux Store State">
            <pre>{JSON.stringify(this.props, null, '    ')}</pre>
        </InformationPanel>
    );
  }
}

export default connect(mapStateToProps)(ReduxStoreState);