import { CategoryFilter } from "@/types";
const SelectCategory = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<CategoryFilter>>;
}) => {
  return (
    <div className="flex flex-grow justify-center bg-white">
      <button
        className={`${
          selected === "all" && "underline text-[#8E2F3F] "
        } font-bold uppercase text-[14px] mr-6`}
        onClick={() => setSelected(CategoryFilter.all)}
      >
        wszystkie
      </button>
      /
      <button
        className={`${
          selected === "favorites" && "underline text-[#8E2F3F]"
        }  font-bold uppercase text-[14px] ml-6`}
        onClick={() => setSelected(CategoryFilter.favorites)}
      >
        Ulubione
      </button>
    </div>
  );
};

//! wydzielić buttony
export default SelectCategory;
