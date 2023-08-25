import Image from "next/image";
import React from "react";
import image from '@/public/Mindblowing.svg'

const Loader = () => {
  return (
    <div className=" w-screen h-screen flex-col bg-white text-orange-500 flex justify-center items-center ">
      <Image width={200}  height={200} src={image} alt="Mind Blowing Mornings"/>

    </div>
  );
};

export default Loader;
