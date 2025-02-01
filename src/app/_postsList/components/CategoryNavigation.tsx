import { useContext } from "react";
import { CategoryContext } from "@/context";
import Image from "next/image";
import { icons } from "@/consts";
const CategoryNavigation = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("Context Error");
  }

  const { categoryC, setCategoryC } = context;
  return (
    <div className="flex px-6">
      <span className="font-poppins underline font-bold text-[#8E2F3F]">
        {categoryC}
      </span>
      <span
        className="pl-4 cursor pointer"
        onClick={() => setCategoryC(undefined)}
      >
        <Image className="pt-2" src={icons.closeButton} alt="x"></Image>
      </span>
    </div>
  );
};

export default CategoryNavigation;
