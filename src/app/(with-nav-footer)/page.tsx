function getRandomNumber(count: number): number {
  return Math.floor(Math.random() * count);
}

const HomePage = () => {
  const showErrorPage = getRandomNumber(2) === 1;
  if (showErrorPage) {
    throw new Error("Show Error Page");
  }

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <h1 className="text-5xl font-bold text-green-500 ">Home Page</h1>
    </main>
  );
};

export default HomePage;
