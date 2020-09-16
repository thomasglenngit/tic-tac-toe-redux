import React from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";


function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Header />
       <Game />
      </main>
    </React.Fragment>
  );
}
export default App;