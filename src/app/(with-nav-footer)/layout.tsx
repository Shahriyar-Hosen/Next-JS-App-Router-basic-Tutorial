const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <header className="bg-green-400 py-10 text-center text-xl font-bold text-white">
        <h1>this sis header</h1>
      </header>

      {children}

      <footer className="bg-yellow-400 py-10 text-center text-xl font-bold text-white">
        <h1>this is footer</h1>
      </footer>
    </div>
  );
};

export default RootLayout;
