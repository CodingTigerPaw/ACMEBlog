import ItemLayout from "@/components/itemLayout";
import Category from "./components/category";
import { CategoriesData } from "@/consts";
import SliderCategory from "./components/sliderCategory";

const RenderCategories = () => {
  return CategoriesData.map(
    ({ image, title, icon, color, category, bgColor }) => (
      <ItemLayout key={title} bgColor={bgColor}>
        <Category
          color={color}
          image={image}
          icon={icon}
          title={title}
          categoryName={category}
        />
      </ItemLayout>
    )
  );
};
const Categories = () => (
  <div className="bg-[#F4F4F4] pb-8 ">
    <div className="px-12 pt-4 font-openSans font-bold uppercase">
      Kategorie
    </div>

    <div className="hidden md:flex gap-4 justify-start py-8 mb-4">
      {RenderCategories()}
    </div>
    <div className="md:hidden">
      <SliderCategory slides={RenderCategories()} />
    </div>
  </div>
);

export default Categories;

//! plik na texts
