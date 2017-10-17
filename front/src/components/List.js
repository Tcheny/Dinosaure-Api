import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <div className="List">
        <ul>
          {this.props.dinosaures.map((dino, index) => {
            return (
              <li key={index}>{dino.name} {dino.size} cm {dino.food} <a href={`http://localhost:3005/app/dino/delete/${dino._id}`}>x</a></li>
            )}
          )}
        </ul>
      </div>
    );
  }

}

export default List;
