import React, { Component } from "react";
class controlledCounter extends Component {
  render() {
    return (
      <div className="separate">
        <span className="badge badge-primary"> {this.props.value} </span>
        <button onClick={this.props.onIncrement} className="btn btn-primary">
          Increment
        </button>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

export default controlledCounter;
