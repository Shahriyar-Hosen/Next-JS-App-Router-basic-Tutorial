import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
};

const AboutPage = () => {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <h1 className="text-5xl font-bold text-green-500 ">About Page</h1>
    </main>
  );
};

export default AboutPage;
