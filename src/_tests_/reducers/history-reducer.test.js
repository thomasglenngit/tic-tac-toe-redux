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
    
    2: {history: ['X', null, null, null, null, null, null, null, null], 
    stepNumber: 0,
    xIsNext: false, 
    key: 2 },
  
    // 3: {history: ['X', 'O', null, null, null, null, null, null, null], 
    // stepNumber: 0,
    // xIsNext: true, 
    // key: 3 }
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
      // const historyData3 =
      // {history: ["X", 'O', null, null, null, null, null, null, null], 
      // stepNumber: 0,
      // xIsNext: true, 
      // key: 3 }
    

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



  test("Should successfully go back in time", () => {  
         
     action = {
      type: "DELETE_HISTORY",
      history: ['X', null, null, null, null, null, null, null, null], 
      stepNumber: 0, 
      xIsNext: true ,
      key: 1,
     };
     expect(historyReducer(currentState, action)).toEqual({
       2: {
        history:  [null, null, null, null, null, null, null, null, null], 
        stepNumber: 0,
        xIsNext: true,
        key: 2,
       },
     });
   });

});

//write a Revert Function to get DELETE_HISTORY working!!!!!!

//test("Should successfully delete a ticket", () => {
  //     action = {
  //       type: "DELETE_TICKET",
  //       id: 1,
  //     };
  //     expect(ticketListReducer(currentState, action)).toEqual({
  //       2: {
  //         names: "Jasmine and Justine",
  //         location: "2a",
  //         issue: "Reducer has side effects",
  //         id: 2,
  //       },
  //     });
  //   });
 
