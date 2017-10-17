import React, { Component } from 'react';
import request from 'request';

import List from './List';
import Form from './Form';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinosaures : []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3005/app/dino/";

    request(url, (err, res, body)=> {
      if(err);
      this.setState({
        dinosaures : JSON.parse(body)
      });
      console.log(this.state.dinosaures);
    })
  }

  render() {
    return (
      <div className="App">
        <Form />
        <List dinosaures={this.state.dinosaures}/>
      </div>
    );
  }
}

export default App;
