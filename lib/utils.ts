import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getTimeElapsed = (time: string): string => {
  const now = new Date();
  const then = new Date(time);

  const seconds = Math.floor(
    (now.getTime() - then.getTime()) / 1000
  );

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hours ago`;
  }

  const days = Math.floor(hours / 24);

  if (days < 30) {
    return `${days} days ago`;
  }

  const months = Math.floor(days / 30);

  if (months < 12) {
    return `${months} months ago`;
  }

  const years = Math.floor(months / 12);

  return `${years} years ago`;
};
export const parseVideoDuration = (
  duration: string
): string => {
  const durationParts: string[] = duration
    .replace("PT", "")
    .replace("H", ":")
    .replace("M", ":")
    .replace("S", "")
    .split(":");

  if (durationParts.length === 3) {
    return `${durationParts[0]}:${
      parseInt(durationParts[1]) < 9
        ? `0${durationParts[1]}`
        : durationParts[1]
    }:${
      parseInt(durationParts[2]) < 9
        ? `0${durationParts[2]}`
        : durationParts[2]
    }`;
  }

  if (durationParts.length === 2) {
    return `${durationParts[0]}:${
      parseInt(durationParts[1]) < 9
        ? `0${durationParts[1]}`
        : durationParts[1]
    }`;
  }

  if (durationParts.length === 1) {
    return `0:${
      parseInt(durationParts[0]) < 9
        ? `0${durationParts[0]}`
        : durationParts[0]
    }`;
  }

  return "";
};
export const convertRawViewstoString = (
  labelValue: String,
  isSub = false
): string => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(0) +
        "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(0) +
      "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(
        isSub ? 2 : 0
      ) + "K"
    : Math.abs(Number(labelValue)).toString();
};
