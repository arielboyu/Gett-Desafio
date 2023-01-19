import {
  GET_TASKS,
  DELETE_TASK,
  TOGGLE_TASKS,
  EDIT_TASKS,
  ADD_TASKS,
} from "../types";

const initialState = {
  tasks: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_TASKS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case EDIT_TASKS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        ),
      };
    case ADD_TASKS:
      return {
        tasks: [
          ...state.tasks,
          {
            id: action.payload.id,
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    default:
      return state;
  }
}
