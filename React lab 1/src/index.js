import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Использование функций:

let List = [];

root.render(
  <>
    <ListFunc list={List}/>
  </>
);


// <ListFunc list={List}/>

function ListFunc(props) {
  let newList = props.list;
  const [textMove, FuncTextMove] = React.useState("Пусто");
  const [textMove2, FuncTextMove2] = React.useState("");
  const [myString, setMyString] = React.useState("");

  const handleInputChange = (event) => {
    let searchText = "";
    const str = event.target.value;
    if (isNaN(str) || !isFinite(str)){
      alert("Доступны только числа")
      event.target.value = ''
    }
    setMyString(str)
  };

  function updateText(){
    if(myString == "") {
      FuncTextMove("Кнопка нажата, строка пуста.");
    } else {
        FuncTextMove("Кнопка нажата, значение в строке = " + myString);
        newList.push(+myString);
        console.log(newList);
        FuncTextMove2("Средняя оценка: " + avg());
      }
  }
  function avg(){
    let sum = 0;
    for (let i = 0; i < List.length; i++)
      sum += List[i];
    return sum / List.length;
  }
  return(
  <div class = "center">
    <h2>Введите оценку</h2>
    <input type="text" onChange={handleInputChange} />
    <button onClick={updateText}>Отправить!</button>
    <p>{textMove}</p>
    <p>{textMove2}</p>
  </div>
  );
}

