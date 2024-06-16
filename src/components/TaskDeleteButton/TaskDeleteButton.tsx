"use client";

import { FormState, deleteTask } from "@/actions/task";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  // saで作成したdelete Task関数にidを渡すためbindを行う
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = { error: "" };
  const [state, formAction] = useFormState(deleteTaskWithId, initialState);

  // 依存配列であるerrorに変化があればalertでerrorを表示
  useEffect(() => {
    if (state && state.error !== "") {
      alert(state.error);
    }
  }),
    [state];

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="hover:text-gray-700 text-lg cursor-pointer disabled:bg-gray-400"
      >
        <FaTrashAlt />
      </button>
    );
  };

  return (
    <form action={formAction} className="flex items-center">
      <SubmitButton />
    </form>
  );
};

export default TaskDeleteButton;
