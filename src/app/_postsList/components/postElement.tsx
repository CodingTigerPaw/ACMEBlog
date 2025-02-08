import { categoryColor } from "@/app/utils/categoryColor";
import { PostType } from "@/types";
import { useRouter } from "next/navigation";
import { icons } from "@/consts";
import Image from "next/image";

const PostElement = ({ el }: { el: PostType }) => {
  const router = useRouter();

  const moveToPost = (path: string) => () => {
    router.push(path);
  };

  return (
    <div
      id="el"
      className="font-openSans w-full md:w-[320px] mb-6 mx-[18px]  bg-[#f4f4f4] text-black rounded-tl-[60px] rounded-br-[60px] p-8"
      key={el.id}
    >
      <p
        className="uppercase underline italic font-openSans font-semibold underline-offset-8 mb-6 "
        style={{ color: categoryColor(el.category) }}
      >
        {el.category}
      </p>
      <h1 className=" font-[900] text-[24px] leading-[30px] font-playfair">
        {el.title}
      </h1>
      <p className="py-8 font-playfair">{el.date}</p>
      <p>{el.content}</p>
      <div className="flex items-center gap-2">
        <p
          className="cursor-pointer font-bold my-6"
          onClick={moveToPost(`/post/${el.id}`)}
        >
          Zobacz wiecej
        </p>
        <Image
          className="ml-1 h-4"
          src={icons.arrowNavigation}
          alt="navigation Arrow"
        ></Image>
      </div>
    </div>
  );
};

export default PostElement;
