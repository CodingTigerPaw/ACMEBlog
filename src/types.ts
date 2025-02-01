import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export type CategoryProps = {
  categoryName: Category;
  image: StaticImageData;
  icon: StaticImageData;
  title: string;
  color: string;
  customStyles?: string;
};
export type PostType = {
  id: string;
  title: string;
  date: string;
  description: string;
  header: string;
  category: Category;
  content: string;
};

export enum Category {
  knowledge = "knowledge",
  inspiration = "inspiration",
  interpretations = "interpretations",
  access = "access",
}
export type SlidesType = {
  slides: ReactNode[];
};
export enum CategoryFilter {
  all = "all",
  favorites = "favorites",
}

export type PostListType = {
  data: PostType[];
};
