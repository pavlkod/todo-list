import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ReactComponent as AddSvg } from "../../assets/img/add.svg";
import { ReactComponent as CloseSvg } from "../../assets/img/close.svg";
import { useTaskColors } from "../../hooks/TaskColors/useTaskColors";
import { getHexByColorID } from "../../utils";
import { http } from "../../utils/axios";

import Badge from "../Badge";
import TaskGroup from "../TaskGroup";

import "./index.scss";

const AddListButton = ({ addTask }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { isLoading, setIsLoading, colors, selectedColor, setSelectedColor } = useTaskColors();

  const items = [
    {
      name: "Добавить задачу",
      icon: <AddSvg />,
      className: "muted",
      id: uuidv4(),
    },
  ];

  const toggleVisiblePopupHandler = () => {
    setVisiblePopup(!visiblePopup);
    clearInfo();
  };
  const closeAddTaskPopup = () => {
    setVisiblePopup(false);
    clearInfo();
  };
  const clearInfo = () => {
    setInputValue("");
    setActiveColor(1);
  };

  const setActiveColor = id => setSelectedColor(id);
  const changeInputValueHandler = e => setInputValue(e.target.value);

  const addTaskHander = () => {
    if (!inputValue) {
      alert("Введите название списка");
      return;
    }

    const task = {
      name: inputValue,
      colorId: selectedColor,
      id: uuidv4(),
    };

    setIsLoading(true);

    http
      .post("/lists", task)
      .then(({ data }) => {
        addTask({ ...data, color: { hex: getHexByColorID(selectedColor, colors) } });
      })
      .finally(() => {
        closeAddTaskPopup();
        setIsLoading(false);
      });
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
            {colors.length > 0 && (
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
            )}
            {isLoading ? (
              <button className="btn font_14 add-list__popup-btn" disabled>
                Добавление...
              </button>
            ) : (
              <button className="btn font_14 add-list__popup-btn" onClick={addTaskHander}>
                Добавить
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export { AddListButton };
