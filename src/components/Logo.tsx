import Image from "next/image";
import logo from "../images/Proassist Blog Edukacyjny.png";

const Logo = () => {
  return (
    <>
      <div className="px-6 ">
        <Image src={logo} alt="logo_blog_edukacyjny"></Image>
      </div>
      <p className="pr-2">
        <span className="px-2 text-black block font-bold italic">
          <span className="text-[#8E2F3F]">A</span>
          CME
        </span>
        <span className="block">Institute</span>
      </p>
    </>
  );
};

export default Logo;
