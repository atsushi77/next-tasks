// app/api/tasks/route.ts
// routeHandler()
// 動作確認: http://localhost:3000/api/tasks

import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

// dbからdataをfetchする関数を定義
export const GET = async () => {
  try {
    await connectDb();
    // dbから全てのtaskを取得
    const allTasks: TaskDocument[] = await TaskModel.find(); // modelsで定義した型を適用
    return NextResponse.json({
      message: "Successful data acquisition",
      tasks: allTasks,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Failed to get data" },
      { status: 500 } // requestURLが無効であることを意味します
    );
  }
};

// cacheを使わず、req毎に最新のデータを取得
export const dynamic = "force-dynamic";
