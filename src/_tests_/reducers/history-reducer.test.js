import React from 'react';
import historyReducer from "../../reducers/history-reducer";
import Board from '../../components/Board';
import Square from "../../components/Square";
import Game from '../../.././src/components/Game';


describe("historyReducer", () => {

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  });

  const currentState = { 
    1: {history: [null, null, null, null, null, null, null, null, null], 
    stepNumber: 0,
    xIsNext: true, 
    key: 1 },
    
    2: {history: ['X', "O", null, null, null, null, null, null, null], 
    stepNumber: 0,
    xIsNext: true, 
    key: 2 }
    }

    let action;
    const historyData = 
      {history: [null, null, null, null, null, null, null, null, null], 
      stepNumber: 0,
      xIsNext: true, 
      key: 1 }
      const historyData2 = 
      {history: ["X", null, null, null, null, null, null, null, null], 
      stepNumber: 0,
      xIsNext: false, 
      key: 2 }

  test("Should return the instantiation ofa new board", () => {
      const { history,  stepNumber, xIsNext, key } = historyData2;
      action = {
      type: "ADD_HISTORY",
      history: ["X", null, null, null, null, null, null, null, null], 
      stepNumber: 0, 
      xIsNext: false ,
      key: 2,
  };
  expect(historyReducer({}, action)).toEqual({
    [key]: {
      history: history,
      stepNumber: stepNumber,
      xIsNext: xIsNext,
      key: 2,
    },
  });
});
});
