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
              <TodoListPanel title="Welcome!">
                This is going to make us a million dollars!!!
              </TodoListPanel>
            </Col>
            <Col xs={6}>
              <TodoListPanel title="Need help???">
                asd <a href='google.com'>google</a>
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
