import { Category } from "@/types";
export const categoryColor = (categoryName: string) => {
  if (categoryName === Category.knowledge) return "#444E8D";
  if (categoryName === Category.inspiration) return "#FFBF42";
  if (categoryName === Category.interpretations) return "#D94F4F";
  if (categoryName === Category.access) return "#82E49A";
};
