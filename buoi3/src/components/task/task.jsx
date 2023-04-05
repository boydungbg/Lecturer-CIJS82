import React from "react";

const Task = ({ status, title, id, onDelete, onCompleted, todos }) => {
  return (
    <div className="flex justify-start items-center my-4">
      <div className="rounded-full w-[20px] h-[20px] overflow-hidden border border-neutral-400">
        <input
          type="checkbox"
          className="appearance-none w-[20px] h-[20px] checked:bg-blue-500"
          value={status}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            onCompleted({ title: title, status: e.target.checked });
          }}
        />
      </div>
      <div
        className={`pl-6 text-lg text-stone-950 ${
          status ? "line-through decoration-4" : ""
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export default Task;
