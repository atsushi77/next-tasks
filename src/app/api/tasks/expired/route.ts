// app/api/tasks/route.ts
// routeHandler()
// 動作確認: http://localhost:3000/api/tasks

import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

// dbからdataをfetchする関数を定義
export const GET = async () => {
  // new Date()で取得した現在時刻 > 日本時間の yyyy/mm/dd にreplace
  const currentDate = new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      // hour: "2-digit",
    })
    .replace(/\//g, "-");

  try {
    await connectDb();
    // find({未完了 && 期限切れ})
    const expiredTasks: TaskDocument[] = await TaskModel.find({
      // expired
      isCompleted: false,
      // $lt: "より小さい" mongoDBにある演算子
      dueDate: { $lt: currentDate }, // 期限切れ
    });
    return NextResponse.json({
      message: "Successful data acquisition",
      tasks: expiredTasks,
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
