interface IVideoData {
  kind?: string;
  statistics?: {
    viewCount?: string;
    likeCount?: string;
    dislikeCount?: string;
    favoriteCount?: string;
    commentCount?: string;
  };
  etag?: string;
  id: {
    kind?: string;
    videoId: string;
  };
  snippet: {
    publishedAt?: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default?: {
        url: string;
        width: number;
        height: number;
      };
      medium?: {
        url: string;
        width: number;
        height: number;
      };
      high?: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent?: string;
    publishTime?: string;
  };
}

interface IVideoDataResponse {
  kind?: string;
  etag?: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo?: {
    totalResults?: number;
    resultsPerPage?: number;
  };
  items: IVideoData[];
}

interface IVideoDataResponseState {
  videoDataResponse: IVideoDataResponse;
  loading: boolean;
  error: string;
}

interface IVideoDataResponseAction {
  type: string;
  payload: IVideoDataResponse;
}

interface IParsedVideoData {
  id: string;
  title: string;
  description?: string;
  videoDuration?: string;
  publishedAt?: string;
  channelTitle: string;
  image?: string;
  channelImage?: string;
  viewCount?: string;
  videoViews?: string;
  videoLink?: string;
}
