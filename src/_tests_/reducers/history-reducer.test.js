import historyReducer from "../../reducers/history-reducer";


// describe("toiletFace", () => {
//   const currentState = {
//     1: {
//       names: "Ryan & Aimen",
//       location: "4b",
//       issue: "Redux action is not working correctly",
//       id: 1,
//     },
//     2: {
//       names: "Jasmine and Justine",
//       location: "2a",
//       issue: "Reducer has side effects",
//       id: 2,
//     },
//   };

//   let action;
//   const ticketData = {
//     names: "Ryan & Aimen",
//     location: "4b",
//     issue: "Redux action is not working correctly.",
//     id: 1,
//   };

//   test("Should successfully add new ticket data to masterTicketList", () => {
//     const { names, location, issue, id } = ticketData;
//     action = {
//       type: "ADD_TICKET",
//       names: names,
//       location: location,
//       issue: issue,
//       id: id,
//     };
//     expect(toiletFace({}, action)).toEqual({
//       [id]: {
//         names: names,
//         location: location,
//         issue: issue,
//         id: id,
//       },
//     });
//   });

//   test("Should return default state if there is no action type passed into the reducer", () => {
//     expect(toiletFace({}, { type: null })).toEqual({});
//   });
//   test("Should successfully delete a ticket", () => {
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
// });
