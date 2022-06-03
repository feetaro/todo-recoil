import { useState } from "react";
import { useRecoilState } from "recoil";
import todoState from "../recoil/todoState";

const Input = () => {
  const [todo, setTodo] = useRecoilState(todoState);
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  const clickAdd = (text, setText) => {
    if (text) {
      setTodo([...todo, text]);
      setText("");
    }
  };

  return (
    <>
      <input onChange={changeText} value={text} />
      <button onClick={() => clickAdd(text, setText)}>todo</button>
    </>
  );
};

export default Input;
