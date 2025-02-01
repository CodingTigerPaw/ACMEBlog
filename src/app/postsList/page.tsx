"use client";
import { CategoryFilter, PostListType, postType } from "@/types";
import { useContext, useState } from "react";
import { CategoryContext } from "@/context";
import { getBlogStorage } from "../utils/localStorage";
import PostElement from "./components/postElement";
import CategoryNavigation from "./components/CategoryNavigation";
import SelectCategory from "./components/SelectCategory";
import { favoriteStorageKey } from "@/consts";

const filterAndMap = (arr: postType[], fliteredValue: string) => {
  return arr
    .filter(
      (el: postType) =>
        fliteredValue === undefined || el.category === fliteredValue
    )
    .map((el: postType) => <PostElement key={el.id} el={el} />);
};

const getFavorites = (categoryC: string) => {
  const fav = getBlogStorage(favoriteStorageKey);
  return filterAndMap(fav, categoryC);
};

const PostList = ({ data }: PostListType) => {
  const { categoryC } = useContext(CategoryContext);
  const [selected, setSelected] = useState(CategoryFilter.all);
  const posts = filterAndMap(data, categoryC);

  return (
    <div>
      <h2 className="py-8 pl-[60px] uppercase font-openSans font-bold">
        Wpisy
      </h2>

      <div className={`${categoryC === undefined ? "invisible" : "visible"}`}>
        <CategoryNavigation />
      </div>
      <SelectCategory selected={selected} setSelected={setSelected} />
      <div className="flex gap-x-6 flex-wrap justify-center bg-white">
        {selected === CategoryFilter.all ? posts : getFavorites(categoryC)}
      </div>
    </div>
  );
};

export default PostList;
