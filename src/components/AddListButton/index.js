import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ReactComponent as AddSvg } from "../../assets/img/add.svg";
import { ReactComponent as CloseSvg } from "../../assets/img/close.svg";
import { getHexByColorID } from "../../utils";

import Badge from "../Badge";
import TaskGroup from "../TaskGroup";

import "./index.scss";

const AddListButton = ({ colors, addTask }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const items = [
    {
      name: "Добавить задачу",
      icon: <AddSvg />,
      className: "muted",
      id: uuidv4(),
    },
  ];

  const toggleVisiblePopupHandler = () => setVisiblePopup(!visiblePopup);
  const setActiveColor = id => setSelectedColor(id);
  const closeAddTaskPopup = () => setVisiblePopup(false);
  const changeInputValueHandler = e => setInputValue(e.target.value);

  const addTaskHander = () => {
    if (!inputValue) {
      alert("Введите название списка");
      return;
    }
    const task = {
      name: inputValue,
      hex: getHexByColorID(selectedColor, colors),
      id: uuidv4(),
    };
    addTask(task);
  };

  return (
    <>
      <TaskGroup items={items} toggleVisiblePopup={toggleVisiblePopupHandler} />
      {visiblePopup && (
        <div className="add-list">
          <div className="add-list__popup">
            <div className="add-list__popup-close" title="Закрыть" onClick={closeAddTaskPopup}>
              {<CloseSvg />}
            </div>
            <input
              value={inputValue}
              onChange={changeInputValueHandler}
              type="text"
              placeholder="Название списка"
              className="form-control"
            />
            <div className="add-list__popup-colors">
              {colors.map((color, i) => (
                <Badge
                  onClick={setActiveColor.bind(null, color.id)}
                  isActive={selectedColor === color.id}
                  key={color.id}
                  bgcolor={color.hex}
                />
              ))}
            </div>
            <button className="btn font_14 add-list__popup-btn" onClick={addTaskHander}>
              Добавить
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export { AddListButton };
