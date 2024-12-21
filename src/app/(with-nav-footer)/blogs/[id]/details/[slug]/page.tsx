import { NextPage } from "next";

interface IProps {
  params: { id: string; slug: string };
}

const BlogDetailsSlug: NextPage<IProps> = ({ params }) => {
  const { id, slug } = params || {};

  return (
    <main className="flex justify-center items-center w-full h-screen flex-col gap-5">
      <h1 className="text-5xl font-bold text-green-500 ">
        Blog Details Slug Page
      </h1>
      <p className="text-2xl font-bold text-yellow-500">Blog Id:- {id}</p>
      <p className="text-2xl font-bold text-red-500">Blog Slug:- {slug}</p>
    </main>
  );
};

export default BlogDetailsSlug;
