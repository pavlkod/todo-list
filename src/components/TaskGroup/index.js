// import React from 'react';
import classnames from "classnames";

import "./index.scss";
import removeSvg from "../../assets/img/remove.svg";
import Badge from "../Badge";

const TaskGroup = ({ items, removable, showPopup }) => {
  if (!items.length) {
    return null;
  }

  const showPopupHandler = event => {
    console.log(123);
    showPopup();
  };
  return (
    <ul className="task-group" onClick={showPopupHandler}>
      {items.map(task => {
        return (
          <li
            className={classnames(task.className, "task-group__item", { "task-group__item--active": task.active })}
            key={task.label}
          >
            <i className="task-group__item-icon">{task.icon ? task.icon : <Badge color={task.color} />}</i>
            <span>{task.label}</span>
            {removable && (
              <span className="task-group__item-remove">
                <img src={removeSvg} alt="remove" />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskGroup;
