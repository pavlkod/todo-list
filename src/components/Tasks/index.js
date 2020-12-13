import React from "react";
import { ReactComponent as EditSvg } from "../../assets/img/edit.svg";
import { ReactComponent as CheckSvg } from "../../assets/img/check.svg";
import "./index.scss";

const Tasks = ({ items: { name, tasks } }) => {
  return (
    <div className="tasks">
      <h2 className="tasks__title">
        {name}
        <div className="tasks__title-icon">
          <EditSvg />
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
