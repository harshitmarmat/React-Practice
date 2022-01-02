import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  useState()
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state)=> state.counter.showCounter);
  const dispatch = useDispatch();
  
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  }

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  }
  const increaseHandler = () => {
    dispatch(counterAction.increase(10))
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

