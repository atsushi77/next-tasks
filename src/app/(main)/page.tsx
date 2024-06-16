import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

// taskAppはdataが頻繁にupdateされる為、cacheをdisable
const getAllTasks = async (): Promise<TaskDocument[]> => {
  const res = await fetch(`${process.env.API_URL}/tasks`, {
    cache: "no-store",
  });

  // status codeが200以外 > つまりreqがfailedした場合はredirect to error page
  if (res.status !== 200) {
    throw new Error();
  }

  const data = await res.json();
  // TaskModelに従いdataを返却
  return data.tasks as TaskDocument[];
};

export default async function MainPage() {
  const allTasks = await getAllTasks();
  console.log(allTasks);

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">All Tasks</h1>
        <Link
          href={"/new"}
          className="flex items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700"
        >
          <MdAddTask className="size-5" />
          <div>Add Task</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {allTasks.map((task) => (
          <TaskCard key={task._id.toString()} task={task} />
        ))}
      </div>
    </div>
  );
}