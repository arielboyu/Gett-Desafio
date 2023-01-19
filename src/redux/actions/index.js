export  const getTasks = () => async (dispatch) => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    let parse = await data.json();
    dispatch({
      type: "GET_TASKS",
      payload: parse.slice(0, 100),
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
}; 
export const addNewTask = (title, id) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TASKS",
      payload: {
        id: id,
        title: title,
      },
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};

export const toogleTask = (taskID) => async (dispatch) => {
  try {
    dispatch({
      type: "TOGGLE_TASKS",
      payload: taskID,
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};

 export const editTask = (taskID, title) => async (dispatch) => {
  try {
    dispatch({
      type: "EDIT_TASKS",
      payload: {
        id: taskID,
        title: title,
      },
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};

export const deleteTask = (taskID) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TASK",
      payload: taskID,
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};

