"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-50 p-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mb-4 h-16 w-16 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
        />
      </svg>
      <h2 className="mb-2 text-3xl font-bold text-red-700">حدث خطأ ما!</h2>
      <p className="mb-6 max-w-md text-center text-red-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-red-600 px-6 py-3 text-white shadow-md transition hover:bg-red-700"
      >
        حاول مرة أخرى
      </button>
    </div>
  );
}
