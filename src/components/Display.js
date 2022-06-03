import { useRecoilValue } from "recoil";
import todoState from "../recoil/todoState";

//import getTodos from "../recoil/getTodos";

const Display = () => {
  //  const todo = useRecoilValue(getTodos)
  const todo = useRecoilValue(todoState);

  return (
    <ul>
      {todo.map((row, index) => {
        return <li key={index}>{row}</li>;
      })}
    </ul>
  );
};

export default Display;
