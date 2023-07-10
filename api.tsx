import axios from "axios";
import {
  convertRawViewstoString,
  parseVideoDuration,
} from "./lib/utils";

export const fetchHomPageVideos = () => {
  console.log(process.env.NEXT_PUBLIC_YOUTUBE_API_URL);

  return axios
    .get(
      `${process.env.NEXT_PUBLIC_YOUTUBE_API_URL}search?part=snippet&chart=mostPopular&maxResults=20&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video`
    )
    .then((response) => {
      console.log(response.data.items, "data");
      console.log(
        parseVideoData(response.data.items),
        "parseVideoData"
      );

      return response.data.items;
    })
    .catch((error) => {
      console.log(error);
    });
};

const parseVideoData = async (items: IVideoData[]) => {
  try {
    const videoIds: string[] = [];
    const channelIds: string[] = [];
    items.forEach((item) => {
      videoIds.push(item.id.videoId);
      channelIds.push(item.snippet.channelId);
    });
    const {
      data: { items: videosData },
    } = await axios.get(
      `${
        process.env.NEXT_PUBLIC_YOUTUBE_API_URL
      }videos?part=contentDetails,statistics&id=${videoIds.join(
        ","
      )}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    );
    const {
      data: { items: channelsData },
    } = await axios.get(
      `${
        process.env.NEXT_PUBLIC_YOUTUBE_API_URL
      }channels?part=snippet,contentDetails&id=${channelIds.join(
        ","
      )}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    );
    const parsedChannelsData: {
      id: string;
      image: string;
    }[] = [];
    channelsData.forEach(
      (channel: {
        id: string;
        snippet: {
          thumbnails: { default: { url: string } };
        };
      }) =>
        parsedChannelsData.push({
          id: channel.id,
          image: channel.snippet.thumbnails.default.url,
        })
    );

    const parsedVideosData: IParsedVideoData[] = [];
    items.forEach((video: IVideoData, index) => {
      const channel = parsedChannelsData.find(
        (channel) => channel.id === video.snippet.channelId
      )!;
      if (channel) {
        parsedVideosData.push({
          id: video.id.videoId,
          title: video.snippet.title,
          channelTitle: video.snippet.channelTitle,
          channelImage: channel?.image,
          viewCount: video.statistics?.viewCount,
          publishedAt: video.snippet.publishedAt,
          image: video.snippet.thumbnails.high?.url,
          videoLink: `https://www.youtube.com/watch?v=${video.id.videoId}`,
          description: video.snippet.description,
          videoViews: convertRawViewstoString(
            videosData[index].statistics.viewCount
          ),
          videoDuration: parseVideoDuration(
            videosData[index].contentDetails.duration
          ),
        });
      }
    });
    return parsedVideosData;
  } catch (err) {
    console.log(err);
  }
};
