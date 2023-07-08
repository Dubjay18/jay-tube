import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useQuery } from "react-query";
import { fetchHomPageVideos } from "@/api";
import Image from "next/image";
import { getTimeElapsed } from "@/lib/utils";
import { Dot } from "lucide-react";
import TruncateText from "./TruncatedText";

function Grid() {
  const options = useMemo(
    () => ({
      queryKey: "homepageVideos",
      queryFn: fetchHomPageVideos,
      staleTime: 60 * 1000,
    }),
    []
  );
  const { isLoading, error, data } = useQuery(options);
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;
  console.log(data);

  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto gap-5'>
      {console.log(data)}
      {(data as any)?.map((item: IVideoData, i: number) => (
        <Card className='border-none' key={i}>
          <CardHeader>
            <Image
              src={
                item?.snippet?.thumbnails?.medium?.url ||
                "https://placehold.co/600x400"
              }
              alt={item.snippet.title}
              width={
                item?.snippet?.thumbnails?.medium?.width
              }
              height={
                item?.snippet?.thumbnails?.medium?.height
              }
              className='rounded-lg cursor-pointer'
            />
          </CardHeader>
          <CardContent>
            <p className='scroll-m-20 text-xl font-semibold tracking-tight '>
              <TruncateText
                text={item?.snippet?.title}
                maxLength={50}
              />
            </p>
            <p className='text-gray-400 font-semibold text-sm flex items-center gap-1 '>
              <span>{item?.snippet?.channelTitle}</span>
              <span>
                <Dot className='h-[2rem] w-[2rem]' />
              </span>
              <span>
                {getTimeElapsed(
                  item?.snippet?.publishedAt as string
                )}
              </span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Grid;
