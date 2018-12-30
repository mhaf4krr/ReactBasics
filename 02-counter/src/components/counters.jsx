import React, { Component } from "react";
import ControlledCounter from "./controlledCounter";
class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 5 }, { id: 2, value: 0 }, { id: 3, value: 10 }]
  };

  handleDelete(id) {
    console.log("Delete counter with id " + id);
    let counters = this.state.counters.filter(counter => {
      return counter.id !== id;
    });

    this.setState({ counters });
  }

  handleIncrement = id => {
    let counters = [...this.state.counters];
    counters[id - 1].value += 1;
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <ControlledCounter
            value={counter.value}
            key={counter.id}
            onDelete={() => this.handleDelete(counter.id)}
            onIncrement={() => this.handleIncrement(counter.id)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
