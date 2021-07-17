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

  componentDidUpdate(prevProps, prevStat, snapshot) {
    if (prevStat.countValue !== this.state.countValue) {
      this.setState({ isEven: this.state.countValue % 2 === 0 });
    }
  }

  handleIncrement = () => {
    this.setState((state) => {
      const incrementedValue = state.countValue + 1;
      return {
        countValue: incrementedValue,
      };
    });
  };

  handleDecriment = () => {
    if (this.state.countValue > 0) {
      this.setState((state) => {
        const decrementedValue = Math.max(state.countValue - 1, 0);
        return {
          countValue: decrementedValue,
        };
      });
    }
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
