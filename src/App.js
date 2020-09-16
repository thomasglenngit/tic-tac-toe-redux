import React from "react";
import "./App.css";
import Game from "./components/Game";
import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
// import Column from 'react-bootstrap/Columns'


function App() {
  const bodyStyle = {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh'
  }
  return (
    <Container fluid style={bodyStyle}>
      <main className="container">
        <Header />
       <Game />
      </main>
    </Container>
  );
}
export default App;