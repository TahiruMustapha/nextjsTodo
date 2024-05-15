import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";
interface TodoListProps {
  tasks: ITask[];
}
const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div>
      <div className=" relative overflow-x-auto  h-[60vh]">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>Task </th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
