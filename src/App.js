import React from "react";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  //제목변경
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  //내용변경
  const contentsChangehandler = (event) => {
    setContents(event.target.value);
  };
  //추가버튼클릭
  const clickAddButtonHandler = () => {
    const newTodo = {
      id: 1,
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };

  return (
    <div>
      <header>
        <div>My Todo List</div>
        <div>React</div>
      </header>
      <div>
        <label>제목&nbsp;</label>
        <input value={title} onChange={titleChangeHandler} />
        <label>내용&nbsp;</label>
        <input value={contents} onChange={contentsChangehandler} />
        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>
      <div className="list-container">
        <h2>Working..🔥</h2>
        <h2>Done..!</h2>
      </div>
    </div>
  );
}

export default App;
