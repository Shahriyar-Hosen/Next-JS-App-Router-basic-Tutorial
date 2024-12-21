"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// function getRandomNumber(count: number): number {
//   return Math.floor(Math.random() * count);
// }

const HomePage = () => {
  // const showErrorPage = getRandomNumber(2) === 1;
  // if (showErrorPage) {
  //   throw new Error("Show Error Page");
  // }

  const route = useRouter();

  return (
    <main className="flex justify-center items-center w-full h-screen flex-col">
      <h1 className="text-5xl font-bold text-green-500 ">Home Page</h1>

      <div className="mt-5 space-x-5">
        <Link href="/about" className="text-blue-500 font-bold text-xl">
          About
        </Link>
        <Link href="/blogs" className="text-blue-500 font-bold text-xl">
          Blogs
        </Link>
      </div>
      <div className="mt-5 space-x-5">
        <button
          onClick={() => route.forward()}
          className="bg-blue-500 text-white rounded px-4 py-1 text-lg"
        >
          About
        </button>
        <Link href="/blogs" className="text-blue-500 font-bold text-xl">
          Blogs
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
