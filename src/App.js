import TaskGroup from "./components/TaskGroup";

import { ReactComponent as ListSvg } from "./assets/img/list.svg";
import { AddListButton } from "./components/AddListButton";

function App() {
  const allTasks = [
    {
      label: "Список задач",
      icon: <ListSvg />,
      active: true,
    },
  ];
  const tasks = [
    { label: "Покупки", color: "dark-green" },
    { label: "Фронтенд", color: "blue" },
    { label: "Фильмы и сериалы", color: "pink" },
    { label: "Книги", color: "green" },
    { label: "Личное", color: "grey" },
  ];

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <TaskGroup items={allTasks} />
        <TaskGroup items={tasks} removable />
        <AddListButton />
      </div>
      <div className="todo_tasks"></div>
    </div>
  );
}

export default App;
