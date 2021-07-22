import React, { useMemo } from "react";
import CounterView from "../../../commonComponents/CounterView/index.js";
import {useCounter} from "../../../hooks"

const FunctionalCounterContainer = () => {
  const [countValue, handleIncrement, handleDecriment, handleReset] = useCounter(0);

  const isEven = useMemo(() => {
    return countValue % 2 === 0;
  }, [countValue]);
  
  return (
    <CounterView
      countValue={countValue}
      isEven={isEven}
      handleIncrement={handleIncrement}
      handleDecriment={handleDecriment}
      handleReset={handleReset}
    />
  );
};

export default FunctionalCounterContainer;
