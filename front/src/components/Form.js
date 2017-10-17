import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div className="Form">
        <form action="http://localhost:3005/app/dino/add" method="POST">
          <input name="name"/>
          <input name="size"/>
          <input name="food"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}

export default Form;
