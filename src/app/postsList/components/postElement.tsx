import { categoryColor } from "@/app/utils/categoryColor";
import { postType } from "@/types";
import { useRouter } from "next/navigation";
import { icons } from "@/consts";
import Image from "next/image";

const PostElement = ({ el }: { el: postType }) => {
  const router = useRouter();

  return (
    <div
      id="el"
      className="font-openSans w-full md:w-[320px] mb-6 mx-[18px]  bg-[#f4f4f4] text-black rounded-tl-[60px] rounded-br-[60px] p-4"
      key={el.id}
    >
      <p
        className="uppercase underline italic font-bold"
        style={{ color: categoryColor(el.category) }}
      >
        {el.category}
      </p>
      <h1 className="font-bold">{el.title}</h1>
      <p className="py-4">{el.date}</p>
      <p>{el.content}</p>
      <div className="flex items-center gap-2">
        <p
          className="cursor-pointer font-bold my-6"
          onClick={() => router.push(`/post/${el.id}`)}
        >
          Zobacz wiecej
        </p>
        <Image
          className="h-2"
          src={icons.arrowNavigation}
          alt="navigation Arrow"
        ></Image>
      </div>
    </div>
  );
};

export default PostElement;
