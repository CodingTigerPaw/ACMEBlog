import { ReactNode } from "react";
import Header from "./header";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" px-4 md:px-14">
      <Header />
      <main>{children}</main>
    </div>
  );
}
