"use client";
import Categories from "./categories/page";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import fetchPost from "./utils/fetch";
import PostList from "./postsList/page";
import { postType } from "@/types";
import { CategoryContext } from "@/context";
import { setBlogStorage } from "./utils/localStorage";

export default function Home() {
  const [post, setPost] = useState<postType[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [categoryC, setCategoryC] = useState(undefined);
  useEffect(() => {
    const postsReq = fetchPost("/api/");
    postsReq(
      (res) => {
        setPost(res);
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

  return (
    <>
      <Layout>
        <CategoryContext value={{ categoryC, setCategoryC }}>
          <Categories />
          {loading ? "post is loading" : <PostList data={post} />}
        </CategoryContext>
      </Layout>
    </>
  );
}
