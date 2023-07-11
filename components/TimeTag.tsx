import React from "react";

function TimeTag({ text }: { text: string | undefined }) {
  return (
    <div className='bg-black opacity-80 px-4 py-2 text-sm flex items-center justify-center rounded-lg text-white z-20 absolute bottom-5 '>
      {text}
    </div>
  );
}

export default TimeTag;
