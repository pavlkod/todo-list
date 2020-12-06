// import React from 'react';
import cx from "classnames";

import "./index.scss";
import { ReactComponent as RemoveSvg } from "../../assets/img/remove.svg";
import Badge from "../Badge";

const TaskGroup = ({ items, removable = false, toggleVisiblePopup, topAlign = false, removeTask }) => {
  if (!items.length) {
    return null;
  }

  const toggleVisibleHandler = () => toggleVisiblePopup && toggleVisiblePopup();
  const removeTaskHandler = index => {
    if (window.confirm("Вы действительно хотите удалить категорию?")) {
      removeTask(index);
    }
  };

  return (
    <ul className={cx("task-group", { "task-group--align-top": topAlign })} onClick={toggleVisibleHandler}>
      {items.map((task, index) => {
        return (
          <li
            className={cx(task.className, "task-group__item", { "task-group__item--active": task.active })}
            key={task.id}
          >
            <i className="task-group__item-icon">{task.icon ? task.icon : <Badge bgcolor={task.hex} />}</i>
            <span className="task-group__item-title">{task.name}</span>
            {removable && (
              <span className="task-group__item-remove" title="Удалить" onClick={removeTaskHandler.bind(null, index)}>
                <RemoveSvg />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskGroup;
