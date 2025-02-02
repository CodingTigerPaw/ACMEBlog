import { CategoryFilter } from "@/types";
import { SetStateAction } from "react";
const SelectCategory = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<CategoryFilter>>;
}) => {
  const setCategory = (value: SetStateAction<CategoryFilter>) => () => {
    setSelected(value);
  };
  return (
    <div className="flex flex-grow justify-center bg-white">
      <button
        className={`${
          selected === "all" && "underline text-[#8E2F3F] "
        } font-bold uppercase text-[14px] mr-6`}
        onClick={setCategory(CategoryFilter.all)}
      >
        wszystkie
      </button>
      /
      <button
        className={`${
          selected === "favorites" && "underline text-[#8E2F3F]"
        }  font-bold uppercase text-[14px] ml-6`}
        onClick={setCategory(CategoryFilter.favorites)}
      >
        Ulubione
      </button>
    </div>
  );
};

export default SelectCategory;
