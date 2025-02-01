"use client";
import { useEffect } from "react";
import { CategoryFilter, PostType } from "@/types";
import fetchPost from "../utils/fetch";
import { useContext, useState } from "react";
import { CategoryContext } from "@/context";
import { getBlogStorage, setBlogStorage } from "../utils/localStorage";
import PostElement from "./components/postElement";
import CategoryNavigation from "./components/CategoryNavigation";
import SelectCategory from "./components/SelectCategory";
import { favoriteStorageKey } from "@/consts";

const filterAndMap = (arr: PostType[], fliteredValue: string) => {
  return arr
    .filter(
      (el: PostType) =>
        fliteredValue === undefined || el.category === fliteredValue
    )
    .map((el: PostType) => <PostElement key={el.id} el={el} />);
};

const getFavorites = (categoryC: string) => {
  const fav = getBlogStorage(favoriteStorageKey);
  return filterAndMap(fav, categoryC);
};

const PostList = () => {
  const [post, setPost] = useState<PostType[] | []>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const postsReq = fetchPost("/api/");
    postsReq(
      (res) => {
        setPost(res as PostType[]);
        setBlogStorage(res, "posts");
        setLoading(false);
        console.log(res);
      },
      (err) => {
        console.log(err);
        setLoading(false);
        throw new Error("Error during data fetching");
      }
    );
  }, []);
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("Error Context");
  }

  const { categoryC } = context;

  const [selected, setSelected] = useState(CategoryFilter.all);
  const posts = filterAndMap(post, categoryC as string);

  return (
    <div>
      <div className="flex py-8 pl-[60px] pt-8">
        <h2 className=" pl-[60px] uppercase font-openSans font-bold">Wpisy</h2>

        <div className={`${categoryC === undefined ? "invisible" : "visible"}`}>
          <CategoryNavigation />
        </div>
        <SelectCategory selected={selected} setSelected={setSelected} />
      </div>

      <div className="flex gap-x-6 flex-wrap justify-start bg-white">
        {selected === CategoryFilter.all
          ? loading
            ? "post loading"
            : posts
          : getFavorites(categoryC as string)}
      </div>
    </div>
  );
};

export default PostList;
