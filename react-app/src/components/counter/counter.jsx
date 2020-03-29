import React, { Component } from "react";
import "./counter.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.decrementCounter = this.decrementCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <div className="counter__modify" onClick={this.decrementCounter}>
          <span className="counter__modify--decrement"></span>
        </div>
        <div className="counter__value">{this.state.counter}</div>
        <div className="counter__modify" onClick={this.incrementCounter}>
          <span className="counter__modify--increment"></span>
        </div>
      </div>
    );
  }

  decrementCounter() {
    this.setState({ counter: Math.max(0, --this.state.counter) });
    this.handleChange();
  }

  incrementCounter() {
    this.setState({ counter: ++this.state.counter });
    this.handleChange();
  }

  handleChange() {
    this.props.onChange(this.state.counter);
  }
}

export default Counter;
