import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Использование функций:

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
}
const Header = () => {
  return <h1>Компонент 1</h1>
}
const Wist = () => {
  const numbers = ["К", "о", "м", "п", "о", "н", "е", "н", "т", "3"];
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  )
}
root.render(
  <>
    <Header/>
    <Button text="Компонент2 "/>
    <Wist/>
  </>
);