import Header from "../Header/Header.tsx";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
    </div>
  );
}
