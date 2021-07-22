import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.scss";

const CounterView = ({
  countValue,
  isEven,
  handleIncrement,
  handleDecriment,
  handleReset,
  onRemove,
}) => {
  return (
    <section className={style.bodyPage}>
      <div className={`${style.wrapper} ${isEven && style.evenBg}`}>
        <div className={style.display}> {countValue} </div>
        <div className={style.info}> {isEven ? "even number" : "odd number"}</div>
        <div className={style.buttonsWrapper}>
          <button onClick={handleDecriment}>-</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrement}>+</button>
          <button onClick={onRemove}>Delete</button>
        </div>
      </div>
    </section>
  );
};

CounterView.propTypes = {
  countValue: PropTypes.number.isRequired,
};

export default CounterView;
