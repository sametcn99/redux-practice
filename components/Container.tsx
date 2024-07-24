import { ReactNode } from "react";
type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <section className="container">{children}</section>;
}
