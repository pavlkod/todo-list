import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { ReactComponent as ListSvg } from "./assets/img/list.svg";
import { AddListButton } from "./components/AddListButton";

import { http } from "./utils/axios";

import TaskGroup from "./components/TaskGroup";
import Tasks from "./components/Tasks";

function App() {
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    http.get("/lists?_expand=color").then(({ data }) => {
      setTasks(data);
      setIsLoadingTasks(false);
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

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <TaskGroup items={allItemsTask} />

        {isLoadingTasks && <p>Загрузка задач...</p>}
        {tasks.length > 0 && !isLoadingTasks && (
          <TaskGroup items={tasks} removable topAlign removeTask={removeTaskHandler} />
        )}

        <AddListButton addTask={addTaskHandler} />
      </div>
      <div className="todo__tasks">
        <Tasks title="Фронтенд" />
      </div>
    </div>
  );
}

export default App;
