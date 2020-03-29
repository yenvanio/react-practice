import React, { Component } from "react";
import Counter from "../counter";
import logo from "../../../logo.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { speed: 0 };
    this.onCounterChange = this.onCounterChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
              animation: `spin infinite ${10 / this.state.speed}s linear`
            }}
          />
          <Counter onChange={this.onCounterChange.bind(this)} />
        </header>
      </div>
    );
  }

  onCounterChange(counter) {
    this.setState({
      speed: counter
    });
  }
}

export default Header;
