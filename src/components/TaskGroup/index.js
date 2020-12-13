// import React from 'react';
import cx from "classnames";

import { ReactComponent as RemoveSvg } from "../../assets/img/remove.svg";

import { http } from "../../utils/axios";

import Badge from "../Badge";

import "./index.scss";

const TaskGroup = ({
  items,
  removable = false,
  toggleVisiblePopup,
  topAlign = false,
  removeTask,
  openTasksGroup,
  activeItem,
}) => {
  if (!items.length) {
    return null;
  }

  const toggleVisibleHandler = () => toggleVisiblePopup && toggleVisiblePopup();
  const removeTaskHandler = (id, index) => {
    if (window.confirm("Вы действительно хотите удалить категорию?")) {
      http.delete(`/lists/${id}`).then(() => removeTask(index));
    }
  };

  return (
    <ul className={cx("task-group", { "task-group--align-top": topAlign })} onClick={toggleVisibleHandler}>
      {items.map((task, index) => {
        return (
          <li
            className={cx(task.className, "task-group__item", {
              "task-group__item--active": activeItem?.id === task.id,
            })}
            key={task.id}
            onClick={openTasksGroup ? openTasksGroup.bind(null, task) : null}
          >
            <i className="task-group__item-icon">{task.icon ? task.icon : <Badge bgcolor={task.color.hex} />}</i>
            <span className="task-group__item-title">
              {task.name}
              {task.tasks?.length > 0 && ` (${task.tasks.length})`}
            </span>
            {removable && (
              <span
                className="task-group__item-remove"
                title="Удалить"
                onClick={removeTaskHandler.bind(null, task.id, index)}
              >
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
