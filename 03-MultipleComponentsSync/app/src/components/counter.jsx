import React, { Component } from "react";
class Counter extends Component {
  /* No internal State */
  render() {
    return (
      <React.Fragment>
        <span >{this.props.value}</span> <button className="btn btn-primary counter" onClick={this.props.onIncrement}>Increment</button>{" "}
        <button className="btn btn-warning">Delete</button>
        <br/>
      </React.Fragment>
    );
  }
}

export default Counter;
