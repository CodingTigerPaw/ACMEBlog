import Image, { StaticImageData } from "next/image";
const FavoriteIcon = ({
  text,
  icon,
  handler,
}: {
  text: string;
  icon: StaticImageData;
  handler: () => void;
}) => {
  return (
    <div>
      <Image
        className="ml-11"
        onClick={handler}
        src={icon}
        alt="starFull"
      ></Image>
      <p>{text}</p>
    </div>
  );
};

export default FavoriteIcon;
