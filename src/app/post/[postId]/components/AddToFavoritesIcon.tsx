import FavoriteIcon from "./FavoriteIcon";
import { icons } from "@/consts";
import { SetStateAction } from "react";
type AddToFavoritesIconProps = {
  favorite: SetStateAction<boolean | undefined>;
  addToFavorites: () => void;
  idToRemove: () => void;
};

const testF = () => {
  console.log("on clic test");
};
const AddToFavoritesIcon = ({
  favorite,
  addToFavorites,
  idToRemove,
}: AddToFavoritesIconProps) => {
  return (
    <div className=" md:ml-auto ml-[80px]  md:mr-[300px] lg:mr-[600px] ">
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
          handler={addToFavorites}
        />
      )}
    </div>
  );
};

export default AddToFavoritesIcon;
