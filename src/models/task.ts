// src/models/task.ts
// MongoDBのtaskModelを作成
// modelとは設計図およびルール
// modelを利用するとMongoDBへの操作を簡単にする

import mongoose, { Document } from "mongoose"; // MongoDBでdataが一般的にもつpropertiesが含んだclass

export interface Task {
  // taskに必要な属性を定義
  // MongoDBでは、データ登録時に自動でIDが付与される為、IDの定義は不要
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

// TaskとDocumentのpropertiesを持つinterfaceを作成
export interface TaskDocument extends Task, Document {
  _id: mongoose.Types.ObjectId; // _idの型を明示的に定義
  createdAt: Date; // 作成日
  updatedAt: Date; // 編集日
}

// TaskDataのschemaを定義
// mongoDBのdata構造を定義するもの(filed名, data型、制約, default値)
// Typeのinitialは大文字
const taskSchema = new mongoose.Schema<TaskDocument>(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
  },
  // 第二引数に下記を設定すると、createdAtとupdatedAtが自動追加
  { timestamps: true }
);

export const TaskModel =
  mongoose.models.Task || mongoose.model("Task", taskSchema);
