import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";
import { TaskDocument } from "@/models/task";

// pathの動的[id]parameterを取得するには下記記述で取得可能
interface Params {
  params: {
    id: string;
  };
}

const getTask = async (id: string): Promise<TaskDocument> => {
  const res = await fetch(`${process.env.API_URL}/tasks/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.task as TaskDocument;
};
const EditTaskPage = async ({ params }: Params) => {
  const id = params.id;
  const task = await getTask(id);

  console.log(task);

  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">Edit Task</h2>
      <EditTaskForm task={task} />
    </div>
  );
};

export default EditTaskPage;
