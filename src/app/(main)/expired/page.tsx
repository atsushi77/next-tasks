import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

// expiredTaskはdataが頻繁にupdateされる為、cacheをdisable("no-store")
const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  const res = await fetch(`${process.env.API_URL}/tasks/expired`, {
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

const ExpiredTaskPage = async () => {
  const expiredTasks = await getExpiredTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {expiredTasks.map((task) => (
          <TaskCard key={task._id.toString()} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ExpiredTaskPage;
