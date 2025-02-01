import { useContext } from "react";
import { CategoryContext } from "@/context";
import Image from "next/image";
import { icons } from "@/consts";
const CategoryNavigation = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error(
      "CategoryNavigation must be used within a CategoryProvider"
    );
  }

  const { categoryC, setCategoryC } = context;
  return (
    <div className="flex">
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
