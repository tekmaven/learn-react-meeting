import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap'
import InformationPanel from './components/InformationPanel'
import TodoList from './components/todo/TodoList'
import StateView from './components/StateView'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Learn React Meeting</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={6}>
              <InformationPanel title="Welcome to the ToDo List App!">
                Hey @Microsoft, you should buy this ToDo app!
              </InformationPanel>
            </Col>
            <Col xs={6}>
              <InformationPanel title="Need help???">
                We have no support, you may want to do a <a href='google.com'>Google Search</a>.
              </InformationPanel>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <TodoList/>
            </Col>
            <Col xs={6}>
              <StateView />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
