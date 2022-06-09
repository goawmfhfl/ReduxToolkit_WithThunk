import { apolloClient } from "../../graphql";
import { GET_ANIME_PAGE } from "./queries";
import { GetAnimePage } from "./generated/GetAnimePage";

class AnimeService {
  async getAnimePage(page: number, perPage = 5): Promise<GetAnimePage["Page"]> {
    try {
      const response = await apolloClient.query({
        query: GET_ANIME_PAGE,
        variables: { page, perPage },
      });

      if (!response || !response.data)
        throw new Error("Cannot get anime list!");

      console.log("Data", response.data);

      return response.data.Page;
    } catch (err) {
      throw console.log("err", err);
    }
  }
}

export default new AnimeService();
