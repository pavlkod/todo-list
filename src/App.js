import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskGroup from "./components/TaskGroup";

import DB from "./assets/db.json";

import { ReactComponent as ListSvg } from "./assets/img/list.svg";
import { AddListButton } from "./components/AddListButton";

import { formatArray } from "./utils";

function App() {
  const [tasks, setTasks] = useState(() => formatArray(DB.lists, DB.colors));

  const allItemsTask = [
    {
      name: "Список задач",
      icon: <ListSvg />,
      active: true,
      id: uuidv4(),
    },
  ];

  const addTaskHandler = task => {
    setTasks(state => [...tasks, task]);
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
        <TaskGroup items={tasks} removable topAlign removeTask={removeTaskHandler} />
        <AddListButton colors={DB.colors} addTask={addTaskHandler} />
      </div>
      <div className="todo_tasks"></div>
    </div>
  );
}

export default App;
