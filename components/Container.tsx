import React, { ReactNode } from "react";
type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex h-fit flex-col items-center justify-center gap-4 break-words rounded-lg bg-zinc-950 p-6 text-2xl shadow-md shadow-green-950 transition-all duration-1000 hover:shadow-none ">
      {children}
    </div>
  );
}
