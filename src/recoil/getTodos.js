import { selector } from "recoil";
import todoState from "./todoState";

const getTodos = selector({
  key: "getTodos", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(todoState);
    return text;
  }
});

export default getTodos;
