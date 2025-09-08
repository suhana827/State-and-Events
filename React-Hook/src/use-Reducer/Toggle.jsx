// 1. Show/Hide on button click 

// Using useReducer

// import React, { useReducer } from "react";

// // Reducer function
// function toggleReducer(state, action) {
//   switch (action.type) {
//     case "TOGGLE":
//       return !state; // flip true <-> false
//     default:
//       return state;
//   }
// }

// function Text() {
//   // useReducer instead of useState
//   const [showHide, dispatch] = useReducer(toggleReducer, false);

//   return (
//     <div>
//       <p>Show or Hide the text with help of button.</p>
//       <button onClick={() => dispatch({ type: "TOGGLE" })}>
//         {showHide ? "Hide" : "Show"}
//       </button>
//       {showHide && <p>This is the hidden text now visible!</p>}
//     </div>
//   );
// }

// export default Text;



