import React, { Component } from 'react';
import request from 'request';

import config from '../config';
import List from './List';
import Form from './Form';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinosaures : [] // state dinosaures vide
    };
  }

  // requete vers le back pour récuperer la DB
  componentDidMount() {
    request(config.url, (err, res, body)=> {
      if(err);
      this.setState({
        dinosaures : JSON.parse(body)
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Form />
        <List dinosaures={this.state.dinosaures}/>
      </div>
    );
  };
};

export default App;
