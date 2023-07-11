import React from "react";

function TimeTag({ text }: { text: string | undefined }) {
  return (
    <div className='bg-black opacity-80 px-3 py-2 text-xs flex items-center justify-center rounded-lg text-white z-20 absolute bottom-7 left-6 '>
      {text}
    </div>
  );
}

export default TimeTag;
