import React from "react";
import PropTypes from "prop-types";
import CounterView from "../../../../commonComponents/CounterView/index.js";
import style from "../../../../commonComponents/CounterView/style.module.scss";

const CounterOfCounterLayout = ({
  countersList,
  handleCounterCreate,
  handleCounterRemove,
  handleCounterIncrement,
  handleCounterDecrement,
  handleCounterReset,
  handleCounterResetAll,
  totalSum,
}) => {
  return (
    <div>
      <div className={style.counterbtn}>
        <button onClick={handleCounterCreate}>Create counter</button>
        <button onClick={handleCounterResetAll}>Reset</button>
      </div>
      <div className={style.counterInfo}>
          <p>TOTAL COUNTERS: {countersList.length} </p>
          <p>TOTAL SUM: {totalSum}</p>
      </div>
      <div >
        {countersList.map(({ countValue }, index) => ( 
          <CounterView
            countValue={countValue}
            onRemove={() => handleCounterRemove(index)}
            handleIncrement={() => handleCounterIncrement(index)}
            handleDecriment={() => handleCounterDecrement(index)}
            handleReset={() => handleCounterReset(index)}
          />
        ))}
      </div>
    </div>
  );
};

CounterOfCounterLayout.propTypes = {
    countersList: PropTypes.number.isRequired,
}; 

export default CounterOfCounterLayout;
