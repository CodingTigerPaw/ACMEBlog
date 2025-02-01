import { ReactNode } from "react";
export default function ItemLayout({
  children,
  bgColor,
}: {
  children: ReactNode;
  bgColor?: string;
}) {
  return (
    <div
      className={`rounded-tl-[60px] rounded-br-[60px] overflow-hidden`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      {children}
    </div>
  );
}
