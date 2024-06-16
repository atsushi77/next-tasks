"use client";
import Link from "next/link";

// directiveが必要
// throw new Error()で強制的にerrorを投げる事が可能

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold">Error</h1>
      <p className="mt-2 text-4xl font-semibold">Unexpected error occurred</p>
      <Link
        href={"/"}
        className="mt-6 text-2xl font-medium text-green-500 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
