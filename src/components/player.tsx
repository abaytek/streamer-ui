"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Player() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleProgress = () => {
    const video = videoRef.current;
    if (!video) return;

    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const value = Number(e.target.value);
    video.currentTime = (value / 100) * video.duration;
    setProgress(value);
  };

  const seekBy = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime += seconds;
  };

  return (
    <div className="relative w-full my-5 h-1/2 mx-auto bg-black rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        onTimeUpdate={handleProgress}
        className="w-full rounded-2xl"
        poster="/assets/chef_right.png"
      />

      <div className="absolute z-40 bottom-4 left-0 right-0 px-4 flex flex-col items-center gap-2 pointer-events-none">
        <div className="flex items-center justify-center gap-6 pointer-events-auto">
          <button className="text-white ">
            <Image height={67} width={67} src="/assets/back.png" alt="mute" />
          </button>
          <button onClick={() => seekBy(-15)} className="text-white">
            <Image
              height={67}
              width={67}
              src="/assets/15_back.png"
              alt="rewind"
            />
          </button>
          <button onClick={togglePlay} className="text-white">
            <Image
              height={67}
              width={67}
              src="/assets/pause.png"
              alt="pause/play"
            />
          </button>
          <button onClick={() => seekBy(15)} className="text-white  transition">
            <Image height={67} width={67} src="/assets/15_go.png" alt="forward" />
          </button>
          <button className="text-white ">
            <Image height={67} width={67} src="/assets/skip.png" alt="mute" />
          </button>
        </div>
        <input
          type="range"
          value={progress}
          onChange={handleSeek}
          style={{
            background: `linear-gradient(to right, #ff0000 ${progress}%, #ffffff ${progress}%)`,
          }}
          className="w-full appearance-none my-6 h-1 bg-red-500 pointer-events-auto"
        />
        <div className="flex items-center  w-full">
          <p className="text-[35px] w-1/2 px-2">Past stream</p>
          <p className="text-[35px]">Streaming title</p>
        </div>

      </div>
      <div className="absolute bg-gradient-to-t from-black to-70% bottom-0 right-0 left-0 h-80 "></div>
    </div>
  );
}
