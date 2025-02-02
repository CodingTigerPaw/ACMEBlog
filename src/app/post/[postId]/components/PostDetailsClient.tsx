"use client";
import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import fetchPost from "@/app/utils/fetch";
import Header from "@/components/header";
import { BaseURL, icons, favoriteStorageKey } from "@/consts";
import { PostType } from "@/types";
import Link from "next/link";
import {
  setBlogStorage,
  getBlogStorage,
  updateBlogStorage,
} from "@/app/utils/localStorage";
import PostContent from "./PostContent";
import AddToFavoritesIcon from "./AddToFavoritesIcon";
const PostDetailsClient = ({ id }: { id: string }) => {
  const [details, setDetails] = useState<PostType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [favorite, setFavorite] =
    useState<SetStateAction<boolean | undefined>>();

  const convertToString = (value: number | string) => value.toString();

  const storedData = getBlogStorage(favoriteStorageKey) || [];

  const AddtoFavorites = () => {
    setBlogStorage(details, favoriteStorageKey);
    setFavorite(true);
  };

  const removeFromFavorites = (id: string, data: PostType[]) => () => {
    const updatedFavorites = data.filter(
      (item: PostType) => convertToString(item.id) !== convertToString(id)
    );
    updateBlogStorage(favoriteStorageKey, updatedFavorites);
    setFavorite(false);
  };

  const findFavorite = (data: PostType[]) => () => {
    const isFavorite = data.some(
      (el: PostType) => convertToString(el.id) === convertToString(id)
    );
    setFavorite(isFavorite);
  };
  const findFav = findFavorite(storedData);
  const idToRemove = removeFromFavorites(id, storedData);

  useEffect(() => {
    const fetchDetails = fetchPost(`${BaseURL}/${id}`);
    fetchDetails(
      (data) => {
        setDetails(data as SetStateAction<PostType | null>);
        setLoading(false);
      },
      (err) => {
        console.log(err);
        throw new Error("Error During fetching Post");
      }
    );
    findFav();
  }, [id]);
  return (
    <>
      <Header />

      {loading ? (
        <div className="w-10 ml-auto mr-auto">Post is Loading</div>
      ) : (
        <>
          <div className="flex flex-col ml-8 md:flex-row">
            <Link href={"/"}>
              <div className="flex">
                <Image
                  className="w-4 h-3 m-2"
                  src={icons.arrowLeft}
                  alt="icons Left"
                ></Image>
                <span className="text-[32px] font-openSans font-bold">
                  Blog Edukacyjny
                </span>
              </div>
            </Link>
            <AddToFavoritesIcon
              addToFavorites={AddtoFavorites}
              idToRemove={idToRemove}
              favorite={favorite}
            />
          </div>

          <PostContent details={details} />
        </>
      )}
    </>
  );
};
export default PostDetailsClient;
