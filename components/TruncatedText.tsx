import { useMemo } from "react";

interface Props {
  text: string;
  maxLength: number;
}

const TruncateText = ({ text, maxLength }: Props) => {
  const truncatedText = useMemo(() => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }

    return text;
  }, [text, maxLength]);

  return <p>{truncatedText}</p>;
};

export default TruncateText;
