"use client";
import React, { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import {v4 as uuidv4} from 'uuid'
import { AddTodo } from "@/apis";
import { useRouter } from "next/navigation";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await AddTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div className=" relative w-full ">
      <div
        onClick={() => setModalOpen(true)}
        className=" bg-blue-800 hover:bg-blue-900 duration-200 text-white flex items-center justify-center py-2 rounded-md w-full "
      >
        <button className=" flex  items-center gap-1">
          Add New Task <AiOutlinePlus className="text-white text-lg" />
        </button>
      </div>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className=" font-bold text-lg">Add New Task</h3>
          <div className=" modal-action mt-3 flex items-center gap-3 justify-center  ">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className=" w-[60%] px-2 border-gray-200 border-[1px] py-2 outline-none rounded-md "
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
    </div>
  );
};

export default AddTask;
