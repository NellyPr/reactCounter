import React, { useState, useEffect } from "react";
import CounterView from "../../../commonComponents/CounterView/index.js";

const FunctionalCounterContainer = () => {
  const [counterState, setCounterState] = useState({
    countValue: 0,
    isEven: true,
  });

  useEffect(() => {
      setCounterState({
          ...counterState,
          isEven: counterState.countValue % 2 === 0,
      })
  }, [counterState.countValue]);

  const handleIncrement = () => {
    setCounterState({ countValue: counterState.countValue + 1 });
  };

  const handleDecriment = () => {
    if (counterState.countValue > 0) {
      setCounterState({ countValue: counterState.countValue - 1 });
    }
  };

  const handleReset = () => {
    setCounterState({countValue: 0})
  }

  return (
    <CounterView
      countValue={counterState.countValue}
      isEven={counterState.isEven}
      handleIncrement={handleIncrement}
      handleDecriment={handleDecriment}
      handleReset={handleReset}
    />
  );
};

export default FunctionalCounterContainer;
