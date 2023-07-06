import { nanoid } from "nanoid";

export const addTask = (text) => {
  return {
    type: "tasks/addTasks",
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};

export const toggleCompleted = (taskId) => {
  return {
    tupe: "tasks/toggleCompleted",
    payload: taskId,
  };
};

export const setStatusFilter = (value) => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};
