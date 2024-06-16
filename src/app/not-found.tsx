import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="mt-2 text-4xl font-semibold">Page Not Found</p>
      <Link
        href={"/"}
        className="mt-6 text-2xl font-medium text-green-500 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
