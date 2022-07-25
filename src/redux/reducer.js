import filterReducer from "../components/Filters/FiltersSlide";
import todoListReducer from "../components/TodoList/TodosSlide";
import { combineReducers } from "redux";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
