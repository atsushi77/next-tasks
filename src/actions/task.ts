"use server"; // serverActionsを利用する場合のdirective

import { Task, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { redirect } from "next/navigation";

// serverActions内でのerrに対して返却する為のtype definition
export interface FormState {
  error: string;
}

// task作成の為の関数 引数に(state, data)を取る
export const createTask = async (state: FormState, formData: FormData) => {
  // FormDataからinput要素を取得

  const newTask: Task = {
    title: formData.get("title") as string, //　nullの可能性もあるが今回はstring型を強制
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    // default値は未完了(false)
    isCompleted: false,
  };

  // 作成したtaskをDBに登録
  try {
    await connectDb();
    await TaskModel.create(newTask);
  } catch (error) {
    console.log("Could not add data", error);
    state.error = "Could not add data";
    return state;
  }

  // 登録が完了したら、homeへredirect
  redirect("/"); // tryCatch文の中ではうまく動作しない
};

// task[id]の編集の為の引数に(id, state, data)を取る
export const updateTask = async (
  id: string,
  state: FormState,
  formData: FormData
) => {
  // FormDataからinput要素を取得

  const updateTask: Task = {
    title: formData.get("title") as string, //　nullの可能性もあるが今回はstring型を強制
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    // default値は未完了(false)
    isCompleted: Boolean(formData.get("isCompleted")) as boolean,
  };

  // 作成したtaskをDBに登録
  try {
    await connectDb();
    await TaskModel.updateOne({ _id: id }, updateTask);
  } catch (error) {
    state.error = "Could not edit data";
    return state;
  }

  // 登録が完了したら、homeへredirect
  redirect("/"); // tryCatch文の中ではうまく動作しない
};

// task[id]の削除にformDataは不要
export const deleteTask = async (id: string, state: FormState) => {
  // 作成したtaskをDBに登録
  try {
    await connectDb();
    await TaskModel.deleteOne({ _id: id });
  } catch (error) {
    state.error = "Could not delete data";
    return state;
  }

  // 登録が完了したら、homeへredirect
  redirect("/"); // tryCatch文の中ではうまく動作しない
};
