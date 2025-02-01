"use client";
import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import fetchPost from "@/app/utils/fetch";
import Header from "@/components/header";
import { BaseURL } from "@/consts";
import { postType } from "@/types";
import Link from "next/link";
import { setBlogStorage, getBlogStorage } from "@/app/utils/localStorage";
import { icons, postImg } from "@/consts";
import ItemLayout from "@/components/itemLayout";
import FavoriteIcon from "./FavoriteIcon";
import { favoriteStorageKey } from "@/consts";
const PostDetailsClient = ({ id }: { id: string }) => {
  const [details, setDetails] = useState<postType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [favorite, setFavorite] =
    useState<SetStateAction<boolean | undefined>>();

  const storedData = getBlogStorage(favoriteStorageKey) || [];

  const AddtoFavorites = () => {
    setBlogStorage(details, favoriteStorageKey);
    setFavorite(true);
  };

  const removeFromFavorites = (id: string, data: postType[]) => () => {
    const updatedFavorites = data.filter(
      (item: postType) => item.id.toString() !== id.toString()
    );
    localStorage.setItem(favoriteStorageKey, JSON.stringify(updatedFavorites));
    setFavorite(false);
  };

  const findFavorite = (data: postType[]) => () => {
    const isFavorite = data.some(
      (el: postType) => el.id?.toString() === id.toString()
    );
    setFavorite(isFavorite);
  };

  const findFav = findFavorite(storedData);
  const idToRemove = removeFromFavorites(id, storedData);

  useEffect(() => {
    const fetchDetails = fetchPost(`${BaseURL}/${id}`);
    fetchDetails(
      (data) => {
        setDetails(data);
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
        "Post is loading"
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
            <div className=" md:ml-auto mr-[600px] ">
              {favorite ? (
                <FavoriteIcon
                  icon={icons.starFull}
                  text="usuń z ulubionych"
                  handler={idToRemove}
                />
              ) : (
                <FavoriteIcon
                  icon={icons.starStroke}
                  text="dodaj z ulubionych"
                  handler={AddtoFavorites}
                />
              )}
            </div>
          </div>
          <div className="ml-[100px] mr-[600px]">
            <h1 className="text-xl font-bold py-6">{details?.title}</h1>
            <p className="pb-16">{details?.description}</p>
            <p className="text-xl font-bold py-6">{details?.header}</p>
            <p>{details?.content}</p>
            <ItemLayout>
              <Image src={postImg.postImage} alt="img"></Image>
            </ItemLayout>
          </div>
        </>
      )}
    </>
  );
};
export default PostDetailsClient;
