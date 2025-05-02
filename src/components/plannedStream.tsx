'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";


interface Channel {
  id: number;
  channelType: string;
  channelName: string;
  noOfLikes: string;
  time: string;
  imageUrl: string;
}
interface StreamProps {
  channels: Channel[];
}

const PlannedStream = ({channels}: StreamProps) => {
  const router = useRouter();
  return (
    <div>
    <div className="w-full mt-6 ml-4 p-2">
      <div>
        <h2 className="text-3xl mb-4 bg-[#444444] w-fit rounded-xl px-2 font-semibold">
          Planned Streams
        </h2>
        <div className="flex gap-4 ">
          {channels?.map((channel) => (
            <div
            onClick={() => router.push(`/details/${channel.id}`)}
              key={channel.id}
              className="flex gap-6 w-[500px] cursor-pointer h-[300px] relative items-center"
            >
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

              <div className="absolute flex  justify-between flex-col bottom-0 top-0 right-0">
                <div>
                  <p className="text-[27px] font-semibold">
                    {channel.channelName}
                  </p>
                  <div className="flex justify-end gap-2 px-2">
                    <p className="bg-[#424241] text-xl px-2 rounded-sm w-fit">
                      {channel.noOfLikes}
                    </p>
                    <p className="bg-[#424241] text-xl px-2 rounded-sm w-fit">
                      {channel.channelType}
                    </p>
                  </div>
                </div>
                <p className="bg-[#999999] text-[28px] px-2 m-3 rounded-sm w-fit">{channel.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlannedStream;
