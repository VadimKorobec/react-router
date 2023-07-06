import { useSelector } from "react-redux";
import { statusFilter } from "../../redux/constants";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { getStatusFilter } from "../../redux/selectors";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilter.all}>All</Button>
      <Button selected={filter === statusFilter.active}>Active</Button>
      <Button selected={filter === statusFilter.completed}>Completed</Button>
    </div>
  );
};
