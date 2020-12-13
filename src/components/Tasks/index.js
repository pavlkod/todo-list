import React from "react";
import { ReactComponent as EditSvg } from "../../assets/img/edit.svg";
import { ReactComponent as CheckSvg } from "../../assets/img/check.svg";
import "./index.scss";
import { http } from "../../utils/axios";

const Tasks = ({ items: { name, tasks, id }, onEditTitle }) => {
  const onEditTitleHandler = async (id, title) => {
    let name;
    if ((name = prompt("Новое название", title))) {
      try {
        await http.patch(`/lists/${id}/`, { name });
        onEditTitle(id, name);
      } catch (e) {
        alert("Не удалось обновить значение списка");
      }
    }
  };

  if (!tasks.length) {
    return <div className="tasks-empty">Задачи отсутствуют</div>;
  }

  return (
    <div className="tasks">
      <h2 className="tasks__title">
        {name}
        <div className="tasks__title-icon">
          <EditSvg onClick={onEditTitleHandler.bind(null, id, name)} />
        </div>
      </h2>
      <div className="tasks__list">
        {tasks.map(item => (
          <div className="tasks__item" key={item.id}>
            <input type="checkbox" className="tasks__item-checkbox" id={item.id} />
            <label htmlFor={item.id}>
              <span>{item.text}</span>
              <span className="tasks__item-icon">
                <CheckSvg />
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
