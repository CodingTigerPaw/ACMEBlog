import axios from "axios";
import { PostType } from "@/types";

const fetchPost =
  (url: string) =>
  async (
    onSucces: (data: PostType[] | PostType) => void,
    onError: (err: unknown) => void
  ) => {
    try {
      const response = await axios.get<PostType[]>(`${url}`, {});
      return onSucces(response.data);
    } catch (err) {
      return onError(err);
    }
  };

export default fetchPost;
