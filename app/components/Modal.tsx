import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen,children }) => {
  return (
    <div
      className={`${
        modalOpen ? ` w-[60%] py-3 absolute top-48  left-[20%]  rounded-md  shadow-md text-gray-400 z-50     bg-gray-300 flex` : ` hidden`
      }  `}
    >
      <div className=" w-full relative  flex items-center justify-center ">
        <div className=" w-full ">
          {children}
        </div>
      </div>
      <button
        onClick={() => setModalOpen(false)}
        className=" w-8 h-8  rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-white cursor-pointer   absolute right-2 top-2"
      >
        x
      </button>
    </div>
  );
};

export default Modal;
