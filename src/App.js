import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap'
import TodoListPanel from './TodoListPanel'
import TodoListRoot from './TodoListRoot'

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
              <TodoListPanel title="Welcome to the ToDo List App!">
                Hey @Microsoft, you should buy this ToDo app!
              </TodoListPanel>
            </Col>
            <Col xs={6}>
              <TodoListPanel title="Need help???">
                We have no support, you may want to do a <a href='google.com'>Google Search</a>.
              </TodoListPanel>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <TodoListRoot />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
