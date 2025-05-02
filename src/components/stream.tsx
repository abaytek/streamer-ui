import React from "react";
import PlannedStream from "./plannedStream";
import OnAir from "./onAir";

const channels = [
  {
    id: 1,
    channelType: "politics",
    channelName: "Channel Name",
    noOfLikes: "159k",
    time: "Today at 18:00",
    imageUrl: "/assets/podcast.png",
  },
  {
    id: 2,
    channelType: "politics",
    channelName: "Channel Name",
    noOfLikes: "159k",
    time: "Today at 18:00",
    imageUrl: "/assets/2.png",
  },
  {
    id: 3,
    channelType: "politics",
    channelName: "Channel Name",
    noOfLikes: "159k",
    time: "Today at 18:00",
    imageUrl: "/assets/3.png",
  },
];
const onAirChannels = [
  {
    id: 10,
    channelType: "politics",
    channelName: "Channel Name",
    noOfLikes: "159k",
    time: "Today at 18:00",
    imageUrl: "/assets/podcast.png",
  },
  {
    id: 11,
    channelType: "politics",
    channelName: "Channel Name",
    noOfLikes: "159k",
    time: "Today at 18:00",
    imageUrl: "/assets/2.png",
  },
  {
    id: 12,
    channelType: "politics",
    channelName: "Channel Name",
    noOfLikes: "159k",
    time: "Today at 18:00",
    imageUrl: "/assets/3.png",
  },
];

const Stream = () => {
  console.log(channels)
  return (
    <div>
      <PlannedStream channels={channels} />
      <OnAir onAirChannels={onAirChannels} />
    </div>
  );
};

export default Stream;
