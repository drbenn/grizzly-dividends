import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import {
  addition,
  division,
  multiplication,
  subtraction
} from '../redux/calcSlice';

const CalcPage = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const calcValues = useSelector((state: RootState) => state.calc);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Toolkit</h1>
      First Value :{' '}
      <input
        onChange={event => setFirstValue(Number(event.target.value))}
        type="number"
      />
      <br />
      <br />
      Second Value :{' '}
      <input
        onChange={event => setSecondValue(Number(event.target.value))}
        type="number"
      />
      <br />
      <br />
      <button onClick={() => dispatch(addition({ firstValue, secondValue }))}>
        Addition
      </button>
      <button onClick={() => dispatch(division({ firstValue, secondValue }))}>
        Division
      </button>
      <button
        onClick={() => dispatch(multiplication({ firstValue, secondValue }))}
      >
        Multiplication
      </button>
      <button
        onClick={() => dispatch(subtraction({ firstValue, secondValue }))}
      >
        Subtraction
      </button>
      <h3>Result : {calcValues.total}</h3>
    </div>
  );
};

export default CalcPage;