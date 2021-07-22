import { useCallback, useState, useMemo } from "react";
import FunctionalCounterOfCounter from "../components/CounterOfCounterLayout";

const CounterOfCounters = () => {
  const [counters, setCounters] = useState([]);

  const isEven = useCallback((value) => {
    return value % 2 === 0;
  }, []);

  const totalSum = useMemo(() => {
    return counters.reduce((result, counter) => result + counter.countValue, 0);
  }, [counters]);

  const handleCounterCreate = useCallback(() => {
    const updatedCounters = counters.map((counter) => ({
      countValue: isEven(counter.countValue)
        ? counter.countValue + 1
        : counter.countValue,
    }));
    setCounters([...updatedCounters, { countValue: 0 }]);
  }, [counters]);

  const handleCounterRemove = useCallback(
    (index) => {
      const countersListCopy = [...counters];
      countersListCopy.splice(index, 1);

      const updatedCounters = countersListCopy.map((counter) => ({
        countValue: !isEven(counter.countValue)
          ? counter.countValue - 1
          : counter.countValue,
      }));

      setCounters(updatedCounters);
    },
    [counters]
  );

  const handleCounterResetAll = useCallback(
    (index) => {
      const countersListCopy = [...counters];
      countersListCopy.splice(0, counters.length);
      setCounters(countersListCopy);
    },
    [counters]
  );

  const handleCounterIncrement = useCallback(
    (index) => {
      const countersListCopy = [...counters];
      const foundCounter = countersListCopy[index];
      foundCounter.countValue = foundCounter.countValue + 1;
      setCounters(countersListCopy);
    },
    [counters]
  );

  const handleCounterDecrement = useCallback(
    (index) => {
      if (counters[index].countValue > 0) {
        const countersListCopy = [...counters];
        const foundCounter = countersListCopy[index];
        foundCounter.countValue = foundCounter.countValue - 1;
        setCounters(countersListCopy);
      }
    },
    [counters]
  );

  const handleCounterReset = useCallback(
    (index) => {
      const countersListCopy = [...counters];
      const foundCounter = countersListCopy[index];
      foundCounter.countValue = 0;
      setCounters(countersListCopy);
    },
    [counters]
  );

  return (
    <FunctionalCounterOfCounter
      countersList={counters}
      totalSum={totalSum}
      handleCounterCreate={handleCounterCreate}
      handleCounterRemove={handleCounterRemove}
      handleCounterIncrement={handleCounterIncrement}
      handleCounterDecrement={handleCounterDecrement}
      handleCounterReset={handleCounterReset}
      handleCounterResetAll={handleCounterResetAll}
    />
  );
};

export default CounterOfCounters;

/* const handleCounterCreate = useCallback(() => {
  const newCounter = {
  countValue: 0,
  };
  const countersCopy = [...counters];
  countersCopy.push(newCounter);
  setCounters(countersCopy);
}, [counters]); */
