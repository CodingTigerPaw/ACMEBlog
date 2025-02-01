import { PostType } from "@/types";

export const setBlogStorage = (
  posts: PostType[] | PostType | null,
  key: string
) => {
  const prevFav = getBlogStorage("favorites");
  localStorage.setItem(key, JSON.stringify([...prevFav, posts]));
};

export const getBlogStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const updateBlogStorage = (key: string, dataToUpdate: PostType[]) =>
  localStorage.setItem(key, JSON.stringify(dataToUpdate));
