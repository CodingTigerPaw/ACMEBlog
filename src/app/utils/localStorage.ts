import { postType } from "@/types";

export const setBlogStorage = (
  posts: postType[] | postType | null,
  key: string
) => {
  const prevFav = getBlogStorage("favorites");
  localStorage.setItem(key, JSON.stringify([...prevFav, posts]));
};

export const getBlogStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};
