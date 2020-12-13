import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { ReactComponent as ListSvg } from "./assets/img/list.svg";
import { AddListButton } from "./components/AddListButton";

import { http } from "./utils/axios";

import TaskGroup from "./components/TaskGroup";
import Tasks from "./components/Tasks";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    http.get("/lists?_expand=color&_embed=tasks").then(({ data }) => {
      setTasks(data);
      setIsLoading(false);
    });
  }, []);

  const allItemsTask = [
    {
      name: "Список задач",
      icon: <ListSvg />,
      active: true,
      id: uuidv4(),
    },
  ];

  const addTaskHandler = task => {
    setTasks([...tasks, task]);
  };

  const removeTaskHandler = index => {
    const items = [...tasks];
    items.splice(index, 1);
    setTasks(items);
  };

  const openTasksGroupHandler = task => {
    setActiveItem(task);
  };
  const onEditTitleHandler = (id, name) => {
    const items = [...tasks].map(item => {
      if (item.id === id) {
        item["name"] = name;
      }
      return item;
    });
    setTasks(items);
  };

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <TaskGroup items={allItemsTask} />

        {isLoading && <p style={{ marginBottom: "20px" }}>Загрузка задач...</p>}
        {tasks.length > 0 && !isLoading && (
          <TaskGroup
            items={tasks}
            removable
            topAlign
            removeTask={removeTaskHandler}
            openTasksGroup={openTasksGroupHandler}
            activeItem={activeItem}
          />
        )}

        <AddListButton addTask={addTaskHandler} />
      </div>
      <div className="todo__tasks">
        {isLoading && <p>Загрузка задач...</p>}
        {tasks.length > 0 && !isLoading && <Tasks items={activeItem ?? tasks[0]} onEditTitle={onEditTitleHandler} />}
      </div>
    </div>
  );
}

export default App;
