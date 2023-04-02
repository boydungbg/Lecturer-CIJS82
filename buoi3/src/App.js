import Task from "./components/task/task";

function App() {
  /// Litst data
  let array = [
    {
      status: true,
      title: "Làm việc nhà",
    },
    {
      status: true,
      title: "Làm việc nhà",
    },
    {
      status: true,
      title: "Làm việc nhà",
    },
    {
      status: true,
      title: "Làm việc nhà",
    },
    {
      status: true,
      title: "Làm việc nhà",
    },
    {
      status: true,
      title: "Làm việc nhà",
    },
    {
      status: true,
      title: "Làm việc nhà",
    },
    {
      status: true,
      title: "Làm việc nhà",
    },
  ];
  return (
    <div
      className="flex h-[100vh] justify-center items-center"
      onClick={(e) => {
        console.log("click");
      }}
    >
      <div className="mx-auto w-2/4 bg-white h-[500px] p-6">
        <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Enter your task here..."
              className="h-[40px] px-2 w-full border-b-2 border-neutral-950 outline-0"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="flex flex-col mt-4 mb-8">
          {/* Render List data */}
          {array.map((value) => (
            // binding data to component
            <Task status={value.status} title={value.title} />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl">{5} Tasks</div>
          <div className="text-2xl">Todo app</div>
        </div>
      </div>
    </div>
  );
}

export default App;
