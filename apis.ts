import { todo } from "node:test";
import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/task`, { cache: "no-store" });
  const todos = res.json();

  return todos;
};

export const AddTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/task`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const EditTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/task/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};
export const DeleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/task/${id}`, {
    method: "DELETE",
  });
};
