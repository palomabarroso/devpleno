import React from 'react';
import './App.css';

const MostraVolta = (props) => {
  return (
    <div>
      <h1>{props.voltas}</h1>
      <p>voltas</p>
    </div>
  )
}

const MostraTempo = (props) => {
  return (
    <div>
      <h1>{props.tempo}</h1>
      <p>Tempo Médio por volta</p>
    </div>
  )
}

const Button = (props) => {
  return <button onClick={props.onClick}> {props.text}</button>;
}

function App() {
  return (
    <div className="App">
      <MostraVolta voltas='14' />
      <div>
        <Button text='+'></Button>
        <Button text='-'></Button>
      </div>
      <MostraTempo tempo='1:35' />
    </div>
  );
}

export default App;
