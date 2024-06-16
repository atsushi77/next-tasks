import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

// 第一引数のreqは今回不要なので_で表示
// 第二引数で[id]を取得
export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDb();
    const task = await TaskModel.findById(params.id);
    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Successful data acquisition", task });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
