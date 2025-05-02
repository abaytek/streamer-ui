"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";
interface Channel {
  id: number;
  channelType: string;
  channelName: string;
  noOfLikes: string;
  time: string;
  imageUrl: string;
}
interface OnAirProps {
  onAirChannels: Channel[];
}

const OnAir = ({ onAirChannels }: OnAirProps) => {
  const router = useRouter();
  return (
    <div className="w-full mt-6 ml-4 p-2">
      <div>
        <h2 className="text-3xl mb-3 bg-[#ED1C24] w-fit rounded-xl px-2 font-semibold">
          On Air
        </h2>
        <div className="flex gap-4 ">
          {onAirChannels.map((channel) => (
            <div
              onClick={() => router.push(`/details/${channel.id}`)}
              className="relative cursor-pointer"
              key={channel.id}
            >
              <div className="flex gap-6 w-[500px] h-[300px] relative items-center">
                <Image
                  height={300}
                  width={500}
                  className="w-full h-full object-cover"
                  src={channel.imageUrl}
                  alt=""
                />
                <div
                  // style={{
                  //   background:
                  //     "linear-gradient(to bottom, #212020 21%, #000000 43%, #000000 100%)",
                  // }}
                  className="absolute top-0 bottom-0 right-0 bg-gradient-to-bl from-black blur-lg  left-1/2 drop-shadow-xl  h-full"
                ></div>

                <div className="absolute flex items-start justify-between flex-col bottom-0 top-0 right-0">
                  <div>
                    <p className="text-[27px] font-semibold">
                      {channel.channelName}
                    </p>
                    <div className="flex justify-end gap-2">
                      <p className="bg-[#424241] text-xl px-2 rounded-sm w-fit">
                        {channel.noOfLikes}
                      </p>
                      <p className="bg-[#424241] text-xl px-2 rounded-sm w-fit">
                        {channel.channelType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ED1C24] flex items-center justify-center absolute left-4 bottom-2 px-2 rounded-md">
                <FaPlay size={12} />
                <p className="text-[28px] px-2 rounded-sm w-fit">Watch Now</p>
              </div>
              <div className="bg-[#fff] flex items-center justify-center gao-2 absolute right-4 bottom-2 p-2 rounded-md">
                <Image height={20} width={20} src="/assets/live.png" alt="youtube" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnAir;
