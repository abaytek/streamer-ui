"use client";
import Categories from "@/components/categories";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";
const channels = [
  {
    id: 1,
    channelType: "politics",
    channelName: "Channel Name",
    noOfLikes: "159k",
    time: "Today at 18:00",
    imageUrl: "/assets/chef_left.png",
  },
  {
    id: 2,
    channelType: "politics",
    channelName: "Channel Name",
    noOfLikes: "159k",
    time: "Today at 18:00",
    imageUrl: "/assets/chef_left.png",
  },
  {
    id: 3,
    channelType: "politics",
    channelName: "Channel Name",
    noOfLikes: "159k",
    time: "Today at 18:00",
    imageUrl: "/assets/chef_left.png",
  },
];

const Details = () => {
  const { id } = useParams();
  const router = useRouter()
  return (
    <div
      className="bg-no-repeat absolute  left-0 my-6 bg-cover bg-left h-screen w-full"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url('/assets/chef_right.png')`,
        // backgroundImage: `url(https://picsum.photos/1920/1080?random=${id})`,
      }}
    >
      <div className="h-screen ">
        <div className="px-12 relative z-10 flex gap-8">
          <Categories />
          <div>
            <p className="text-6xl text-white font-bold">Channel Name</p>
            <p className="text-5xl">Owner Name</p>
            <div className="flex gap-4 py-3">
              <p className="bg-[#424241] text-xl px-2 rounded-sm w-fit">159k</p>
              <p className="bg-[#424241] text-xl px-2 rounded-sm w-fit">12+</p>
              <p className="bg-[#424241] text-xl px-2 rounded-sm w-fit">
                Life Style
              </p>
            </div>
            <div className="mx-6 my-4">
              <Image width={300} height={30} src="/assets/users.png" alt="users" />
            </div>
            <button onClick={()=> router.push(`/player/${id}`)} className="bg-[#81B616] mx-8 px-2 py-1 rounded-md flex items-center justify-center gap-2 my-16">
              <FaPlay />
              <p className="text-3xl cursor-pointer"> Join the Stream</p>
            </button>
          </div>
        </div>
        <div>
        <div className="flex gap-4 pl-12 py-3 ">
          {channels?.map((channel) => (
            <div
              key={channel.id}
              className="flex gap-6 w-[450px] cursor-pointer h-[300px] rounded-2xl relative items-center"
            >
              <Image
                className="w-full h-full object-cover rounded-2xl"
                src={channel.imageUrl}
                alt=""
                height={450}
                width={300}
              />
              <div
                // style={{
                //   background:
                //     linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5))
                // }}
                className="absolute top-0 bottom-0 right-0 bg-gradient-to-b from-black blur-lg w-50 drop-shadow-xl  h-full"
              ></div>

              <div className="absolute flex  justify-between flex-col bottom-0 top-0 pr-4 right-0">
                <div>
                  <p className="text-[35px] font-semibold">
                   Video Title
                  </p>
                 <p className="text-3xl">12.12.2023</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
