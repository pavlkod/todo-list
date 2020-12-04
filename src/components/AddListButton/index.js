import TaskGroup from "../TaskGroup";

import { useState } from "react";

import { ReactComponent as AddSvg } from "../../assets/img/add.svg";
import "./index.scss";
import Badge from "../Badge";

const AddListButton = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const addTask = [
    {
      label: "Добавить задачу",
      icon: <AddSvg />,
      className: "muted",
    },
  ];
  return (
    <>
      <TaskGroup items={addTask} showPopup={() => setVisiblePopup(!visiblePopup)} />
      {visiblePopup && (
        <div className="add-list">
          <div className="add-list__popup">
            <input type="text" placeholder="Название списка" className="form-control" />
            <div className="add-list__popup-colors">
              {colors.map((color, i) => (
                <Badge isActive={!i} key={color.id} color={color.name} />
              ))}
            </div>
            <button className="btn font_14 add-list__popup-btn">Добавить</button>
          </div>
        </div>
      )}
    </>
  );
};
export { AddListButton };
