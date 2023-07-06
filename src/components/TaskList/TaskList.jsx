import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { statusFilter } from "../../redux/constants";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilter.active:
      return tasks.filter((task) => !task.completed);
    case statusFilter.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const statusFilter = useSelector((state) => state.filters.status);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
