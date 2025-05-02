import { IMAGES } from "@/constants/images";
import Image from "next/image";
import React from "react";

const streamTypes = [
  {
    id: 1,
    name: "Destpek",
    icon: "/assets/4.png",
  },
  {
    id: 2,
    name: "Mûzîk",
    icon: "/assets/5.png",
  },
  {
    id: 3,
    name: "Sînema",
    icon: "/assets/6.png",
  },
  {
    id: 4,
    name: "Stream",
    icon: "/assets/6.png",
  },
];

const StreamType = () => {
  return (
    <div className="flex gap-6 h[55px] items-center justify-center">
      {streamTypes.map((streamType) => (
        <div className="h-[55px] cursor-pointer w-[55px] object-contain" key={streamType.id}>
          <Image
            height={40}
            className="object-contain flex justify-center"
            width={45}
            src={streamType.icon}
            alt={streamType.name}
          />
          <p className="text-[22px] mt-2 text-center">{streamType.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StreamType;
