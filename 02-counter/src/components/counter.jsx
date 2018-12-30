import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.value
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="separate">
        <span className="badge badge-primary"> {this.state.count} </span>
        <button onClick={this.handleIncrement} className="btn btn-primary">
          Increment
        </button>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

export default Counter;
