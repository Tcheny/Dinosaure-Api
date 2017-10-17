import React, { Component } from 'react';

class List extends Component {

  render() {
    return (
      <div className="List">
        <ul>
          {this.props.dinosaures.map((dino, index) => {
            return (
              <li key={index}>{dino.name} {dino.size} cm {dino.food}</li>
            )}
          )}
        </ul>
      </div>
    );
  }

}

export default List;
