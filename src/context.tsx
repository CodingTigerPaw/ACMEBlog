import { createContext } from "react";
import { Category } from "./types";

interface MyContextType {
  categoryC: Category | undefined;
  setCategoryC: React.Dispatch<React.SetStateAction<Category | undefined>>;
}

export const CategoryContext = createContext<MyContextType | null>(null);
