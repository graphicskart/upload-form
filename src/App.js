import React, { Component } from 'react';
import { Upload } from './components';
import {
  Container
} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Upload />
      </Container>
    );
  }
}

export default App;
