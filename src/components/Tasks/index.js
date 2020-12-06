import React from "react";
import { ReactComponent as EditSvg } from "../../assets/img/edit.svg";
import { ReactComponent as CheckSvg } from "../../assets/img/check.svg";
import "./index.scss";

const Tasks = ({ title }) => {
  return (
    <div className="tasks">
      <h2 className="tasks__title">
        {title}
        <div className="tasks__title-icon">
          <EditSvg />
        </div>
      </h2>
      <div className="tasks__list">
        <div className="tasks__item">
          <input type="checkbox" className="tasks__item-checkbox" id="1" />
          <label htmlFor="1">
            <span>Text</span>
            <span className="tasks__item-icon">
              <CheckSvg />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
