import Task from "../task/task";

const TaskList = ({ todos, onCompleteTask, onDeleteTask }) => {
  return (
    <div className="flex flex-col h-[500px] overflow-auto mt-4 mb-8">
      {/* Render List data */}
      {todos?.map((value, index) => (
        // binding data to component
        <Task
          key={index}
          id={index}
          status={value.status}
          title={value.title}
          todos={todos}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
