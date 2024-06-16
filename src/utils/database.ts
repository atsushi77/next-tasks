// src/utils/database.ts
// dbへ接続する為の関数を定義
import mongoose from "mongoose";

export const connectDb = async () => {
  // DBへの接続は、失敗の可能性がある為try & catchで囲う
  try {
    // DBのURIは機密情報に該当する為、環境変数で安全に取り出す
    // 環境変数を取得出来なかった場合はpipe(||)で空文字を指定
    await mongoose.connect(process.env.DB_URI || "");
  } catch (err) {
    // DBへの接続に失敗した場合はエラーログを出力し、エラーを投げてerrorPageに誘導
    console.log("Failed to connect to database", err);
    throw new Error();
  }
};
