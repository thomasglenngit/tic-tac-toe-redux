import React from "react"; //imports React Library
import ReactDOM from "react-dom"; //" ReactDom instance call to populate the DOM"
import "./index.css"; //"the styling"
  //OrderItem


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;