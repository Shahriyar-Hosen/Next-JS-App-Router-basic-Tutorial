import { FC, ReactNode } from "react";

const AboutLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>About Layout</h1>
      {children}
    </div>
  );
};

export default AboutLayout;
