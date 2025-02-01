"use client";
import Image from "next/image";
import { CategoryProps } from "@/types";
import { useContext } from "react";
import { CategoryContext } from "@/context";

const Category = ({
  image,
  icon,
  title,
  color,
  categoryName,
  customStyles,
}: CategoryProps) => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("Context Error");
  }

  const { categoryC, setCategoryC } = context;

  return (
    <div
      className={`${customStyles},${
        categoryName === categoryC && "border-black border-4"
      }, cursor-pointer`}
      onClick={() => {
        setCategoryC(categoryName);
      }}
    >
      <Image src={image} alt="image"></Image>
      <h1
        style={{ color: `${color}` }}
        className={` uppercase text-center font-bold font-openSans py-6`}
      >
        {title}
      </h1>
      <div id="el" className="flex justify-center mx-0 pb-8">
        <Image src={icon} alt="icon" height={48}></Image>
      </div>
    </div>
  );
};

export default Category;
