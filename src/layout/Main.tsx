import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      {/* <Header /> */}
      <div style={{ height: "calc(100vh - 80px)" }}>
        {/* <Menu /> */}
        <div className="lg:ml-64 h-full">
          <div
            id="main"
            className="overflow-y-auto bg-contentBg h-full sm:w-full w-screen flex flex-col"
          >
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};
