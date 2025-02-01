"use client";
import Categories from "./_categories/page";
import Layout from "../components/layout";
import { useState } from "react";
import PostList from "./_postsList/page";
import { CategoryContext } from "@/context";
import { Category } from "@/types";

export default function Home() {
  const [categoryC, setCategoryC] = useState<Category | undefined>(undefined);

  return (
    <>
      <Layout>
        <CategoryContext value={{ categoryC, setCategoryC }}>
          <Categories />
          <PostList />
        </CategoryContext>
      </Layout>
    </>
  );
}
