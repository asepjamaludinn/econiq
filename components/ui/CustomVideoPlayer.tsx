"use client";

import React, { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { CustomVideoPlayerProps } from "@/types";

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export default function CustomVideoPlayer({
  src,
  poster,
}: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setCurrentTime(current);
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const handleVideoClick = () => {
    if (!showControls) {
      setShowControls(true);
    } else {
      togglePlay();
    }
  };

  const handleVolumeClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      setShowControls(!newMutedState);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="relative w-full h-full flex items-center justify-center cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-brand-primary"
      onClick={handleVideoClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleVideoClick();
        }
      }}
    >
      <video
        ref={videoRef}
        poster={poster || "/images/video.png"}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover pointer-events-none"
      >
        <source src={src.replace(".mp4", ".webm")} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>

      {/* Video Controls Wrapper */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${
            showControls
              ? "max-w-[500px] opacity-100"
              : "max-w-0 opacity-0 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-[20px] flex items-center h-12 px-5 shadow-lg gap-4 w-max">
            <button
              onClick={togglePlay}
              className="cursor-pointer text-brand-primary hover:opacity-80 transition-opacity flex-shrink-0"
            >
              {isPlaying ? (
                <Pause size={20} fill="currentColor" strokeWidth={0} />
              ) : (
                <Play size={20} fill="currentColor" strokeWidth={0} />
              )}
            </button>

            <div
              ref={progressBarRef}
              onClick={handleSeek}
              className="w-32 sm:w-48 h-1.5 bg-brand-primary/20 rounded-full cursor-pointer relative"
            >
              <div
                className="absolute top-0 left-0 h-full bg-brand-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-brand-primary font-bold text-sm tabular-nums flex-shrink-0">
              {formatTime(currentTime)}
            </span>
          </div>
        </div>

        <div
          role="button"
          tabIndex={0}
          onClick={handleVolumeClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleVolumeClick(e);
            }
          }}
          className="bg-white rounded-[20px] flex items-center justify-center h-12 w-12 shadow-lg cursor-pointer hover:scale-105 transition-transform flex-shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          {isMuted ? (
            <VolumeX
              className="text-brand-primary"
              size={20}
              strokeWidth={2.5}
            />
          ) : (
            <Volume2
              className="text-brand-primary"
              size={20}
              strokeWidth={2.5}
            />
          )}
        </div>
      </div>
    </div>
  );
}
