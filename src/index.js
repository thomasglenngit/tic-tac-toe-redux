import React from "react"; //imports React Library
import ReactDOM from "react-dom"; //" ReactDom instance call to populate the DOM"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"; //"the styling"
// import Square from '../components/Square';
// import Board from '../components/Board';
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <main className= "container">
      <App />
    </main>
  </React.StrictMode>,
  
  document.getElementById("root")
);

