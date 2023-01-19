import React, { useEffect, useState } from "react";
import { getTasks, editTask, addNewTask } from "../../redux/actions/index";
import { useSelector } from "react-redux";
import store from "../../redux/store/index";
import "./main.css";
import Pagination from "../pagination/pagination";
import Table from "../table/table";

const Main = ({ setIsAuth }) => {
  const tasks = useSelector((state) => state.tasks);
  const [showTable, setshowTable] = useState(true);
  const [showEdit, setshowEdit] = useState(false);
  const [showAdd, setshowAdd] = useState(false);
  const [editId, setEditID] = useState(null);
  const [editTitle, setEditTitle] = useState(null);
  const [input, setInput] = useState({ newTitle: "", addnewTask: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const { newTitle, addnewTask } = input;

  const signOut = () => {
    setIsAuth(false);
  };

  const onChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  useEffect(() => {
    store.dispatch(getTasks());
  }, []);

  const addTasks = () => {
    setshowAdd(true);
    setshowTable(false);
  };

  const back = () => {
    setshowAdd(false);
    setshowEdit(false);
    setshowTable(true);
  };

  const selectupdateTask = (taskID) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskID) {
        setEditTitle(tasks[i].title);
        setEditID(taskID);
        setshowEdit(true);
        setshowTable(false);
      }
    }
  };

  const sendNewTask = (title) => {
    let id = tasks.length + 1;
    setshowAdd(false);
    setshowTable(true);
    store.dispatch(addNewTask(title, id));
    setCurrentPage(11);
    setInput({ addnewTask: "" });
  };

  const updateTask = () => {
    store.dispatch(editTask(editId, newTitle));
    setshowEdit(false);
    setshowTable(true);
    setInput({ newTitle: "" });
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentTasks = tasks.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(tasks.length / recordsPerPage);

  return (
    <div>
      <img
        alt="logo"
        className="logo"
        src="https://gett.mobi/wp-content/uploads/2021/11/logo_gett_pymes.png"
      ></img>
      <div className="button-box">
        <button onClick={signOut}>Salir</button>
        {showEdit ? "" : <button onClick={() => addTasks()}>agregar</button>}
      </div>

      <div className="main-container">
        <div className={`add-area-${showAdd ? "on" : "off"}`}>
          <h1>crear tarea</h1>

          <textarea
            name="addnewTask"
            onChange={(e) => onChange(e)}
            value={addnewTask}
          ></textarea>

          <div>
            <br></br>
            {addnewTask ? (
              <button onClick={() => sendNewTask(addnewTask)}>crear</button>
            ) : (
              <button onClick={() => back()}>volver</button>
            )}
          </div>
        </div>

        <div className={`edit-area-${showEdit ? "on" : "off"}`}>
          <h1>editar tarea</h1>
          <textarea
            name="newTitle"
            onChange={(e) => onChange(e)}
            value={newTitle}
          >
            {editTitle}
          </textarea>
          <h1> Titulo : {newTitle ? newTitle : editTitle}</h1>
          {newTitle ? (
            <button onClick={() => updateTask(editId)}>guardar</button>
          ) : (
            <button onClick={() => back()}>volver</button>
          )}
        </div>
        <Table
          currentTasks={currentTasks}
          showTable={showTable}
          selectupdateTask={selectupdateTask}
        />
      </div>
      {!showAdd && !showEdit ? (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
