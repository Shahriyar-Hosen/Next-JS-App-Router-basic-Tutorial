import { FC, ReactNode } from "react";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>this is Auth Layout top</h1>
      {children}
      <p>auth footer</p>
    </div>
  );
};

export default AuthLayout;
