"use client";
import React, { FormEventHandler, useState } from "react";
import { ITask } from "@/types/tasks";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { DeleteTodo, EditTodo } from "@/apis";
import { table } from "console";
interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
  const [modalOpenDeleted, setModalOpenDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const handleSubmitEdit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await EditTodo({
      id: task.id,
      text: taskToEdit,
    });
    
    setModalOpenEdit(false);
    router.refresh();
  };
  const handleDeleteTask = async (id: string) => {
    await DeleteTodo(id);
    setModalOpenDeleted(false);
    router.refresh();
  };
  return (
    <tr>
      <td className=" w-full">{task.text}</td>
      <td className=" flex  items-center gap-5">
        {" "}
        <FiEdit
          onClick={() => setModalOpenEdit(true)}
          className=" cursor-pointer text-blue-700"
          size={20}
        />{" "}
        <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
          <form onSubmit={handleSubmitEdit}>
            <h3 className=" text-center font-bold text-lg">Edit Task</h3>
            <div className=" mt-3 flex items-center gap-3 justify-center  ">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className=" w-[60%]  px-2 border-gray-200 border-[1px] py-2 outline-none rounded-md "
              />
              <button
                type="submit"
                className=" bg-gray-800 px-2 text-sm py-2 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash
          onClick={() => setModalOpenDeleted(true)}
          className=" cursor-pointer text-red-500"
          size={20}
        />
        <Modal modalOpen={modalOpenDeleted} setModalOpen={setModalOpenDeleted}>
         
          <h3 className=" text-black text-lg text-center">
            Are you sure you want to delete this task?
          </h3>
          <div className=" px-3 modal-action">
            <button
              className=" bg-gray-800 hover:bg-gray-900 duration-200 px-2 text-sm py-2  text-white rounded-md"
              onClick={() => handleDeleteTask(task.id)}
            >
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
