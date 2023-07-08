import axios from "axios";

export const fetchHomPageVideos = () => {
  console.log(process.env.NEXT_PUBLIC_YOUTUBE_API_URL);

  return axios
    .get(
      `${process.env.NEXT_PUBLIC_YOUTUBE_API_URL}search?part=snippet&chart=mostPopular&maxResults=20&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video`
    )
    .then((response) => {
      console.log(response.data.items, "data");

      return response.data.items;
    })
    .catch((error) => {
      console.log(error);
    });
};
