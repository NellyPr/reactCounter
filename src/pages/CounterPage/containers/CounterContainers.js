import React, { Component } from "react";
import CounterView from "../components/CounterView/index.js";

export default class CounterContainers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  handleIncrement = () => {
    this.setState((state) => {
      const incrementedValue = state.countValue + 1;
      const isEven = incrementedValue % 2 === 0;
      return {
        countValue: incrementedValue,
        isEven,
      };
    });
  };

  handleDecriment = () => {
    this.setState((state) => {
      const decrementedValue = Math.max(state.countValue - 1, 0);
      const isEven = decrementedValue % 2 === 0;
      return {
        countValue: decrementedValue,
        isEven,
      };
    });
  };

  handleReset = () => {
    this.setState({
        countValue: 0,
        isEven: true,
      });
  };

  render() {
    return (
      <div>
        <CounterView
          countValue={this.state.countValue}
          isEven={this.state.isEven}
          handleIncrement={this.handleIncrement}
          handleDecriment={this.handleDecriment}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}
