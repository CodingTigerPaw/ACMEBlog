import { PostType } from "@/types";
import ItemLayout from "@/components/itemLayout";
import Image from "next/image";
import { postImg } from "@/consts";

const PostContent = ({ details }: { details: PostType | null }) => {
  return (
    <div className="ml-[100px]  md:mr-[300px] lg:mr-[600px]">
      <h1 className="text-xl font-bold py-6">{details?.title}</h1>
      <p className="pb-16">{details?.description}</p>
      <p className="text-xl font-bold py-6">{details?.header}</p>
      <p>{details?.content}</p>
      <ItemLayout>
        <Image src={postImg.postImage} alt="img"></Image>
      </ItemLayout>
    </div>
  );
};

export default PostContent;
