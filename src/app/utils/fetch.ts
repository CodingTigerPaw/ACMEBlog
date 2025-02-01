import axios from "axios";
import { postType } from "@/types";

const fetchPost =
  (url: string) =>
  async (
    onSucces: (data: postType[] | postType) => void,
    onError: (err: unknown) => void
  ) => {
    try {
      const response = await axios.get<postType[]>(`${url}`, {});
      return onSucces(response.data);
    } catch (err) {
      return onError(err);
    }
  };

export default fetchPost;
