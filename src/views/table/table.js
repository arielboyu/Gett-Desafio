import React from "react";
import store from "../../redux/store/index";
import { deleteTask, toogleTask } from "../../redux/actions/index";
import "../main/main.css";

const Table = ({ currentTasks, showTable, selectupdateTask }) => {
  const toggleTask = (taskID) => {
    store.dispatch(toogleTask(taskID));
  };

  const deleteTasks = (taskID) => {
    store.dispatch(deleteTask(taskID));
  };

  return (
    <div className={`table-${showTable ? "on" : "off"}`}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Título</th>
            <th scope="col">Estado</th>

            <th scope="col">Completar</th>
            <th scope="col">Editar</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((t) => (
            <tr>
              <th key={t.id}>{t.id}</th>
              {t.completed ? (
                <td className="completed-text"> {t.title}</td>
              ) : (
                <td className="incompleted-text"> {t.title}</td>
              )}
              {t.completed ? (
                <td className="completed-state">Completo "👌"</td>
              ) : (
                <td className="incompleted-state">Pendiente "👋"</td>
              )}
              <td>
                <button onClick={() => toggleTask(t.id)}>
                  <img
                    alt="logo-check"
                    width={"30px"}
                    src="https://i.pinimg.com/736x/81/42/c8/8142c89a2f6005cd52535b026c74b830.jpg"
                  ></img>
                </button>
              </td>
              <td>
                <button onClick={() => selectupdateTask(t.id)}>
                  {" "}
                  <img
                    alt="logo-edit"
                    width={"30px"}
                    src="https://cdn.icon-icons.com/icons2/1572/PNG/512/3592869-compose-create-edit-edit-file-office-pencil-writing-creative_107746.png"
                  ></img>
                </button>
              </td>
              <td>
                <button onClick={() => deleteTasks(t.id)}>
                  <img
                    alt="logo-delete"
                    width={"30px"}
                    src="https://previews.123rf.com/images/arhimicrostok/arhimicrostok1706/arhimicrostok170600362/79549735-icono-de-la-papelera-borrar-mover-a-papelera-limpiar-el-espacio-en-disco-ilustraci%C3%B3n-del-vector-.jpg"
                  ></img>
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
