// import React from 'react';
import cx from "classnames";

import "./index.scss";
import removeSvg from "../../assets/img/remove.svg";
import Badge from "../Badge";

const TaskGroup = ({ items, removable, toggleVisiblePopup }) => {
  if (!items.length) {
    return null;
  }

  const toggleVisibleHandler = event => toggleVisiblePopup && toggleVisiblePopup();

  return (
    <ul className="task-group" onClick={toggleVisibleHandler}>
      {items.map(task => {
        return (
          <li
            className={cx(task.className, "task-group__item", { "task-group__item--active": task.active })}
            key={task.id}
          >
            <i className="task-group__item-icon">{task.icon ? task.icon : <Badge bgcolor={task.hex} />}</i>
            <span>{task.name}</span>
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
