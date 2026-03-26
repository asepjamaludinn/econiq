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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 w-full max-w-[90%] justify-center pointer-events-none">
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center pointer-events-auto ${
            showControls ? "max-w-[400px] opacity-100" : "max-w-0 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white/95 backdrop-blur rounded-[15px] flex items-center h-10 md:h-11 px-4 shadow-xl gap-4 w-max border border-white/20">
            <button
              onClick={togglePlay}
              className="cursor-pointer text-brand-primary hover:opacity-80 transition-opacity flex-shrink-0"
            >
              {isPlaying ? (
                <Pause size={18} fill="currentColor" strokeWidth={0} />
              ) : (
                <Play size={18} fill="currentColor" strokeWidth={0} />
              )}
            </button>

            <div
              ref={progressBarRef}
              onClick={handleSeek}
              className="w-24 sm:w-40 h-1 bg-brand-primary/20 rounded-full cursor-pointer relative"
            >
              <div
                className="absolute top-0 left-0 h-full bg-brand-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-brand-primary font-bold text-[12px] tabular-nums flex-shrink-0">
              {formatTime(currentTime)}
            </span>
          </div>
        </div>

        <div
          role="button"
          tabIndex={0}
          onClick={handleVolumeClick}
          className="bg-white/95 backdrop-blur rounded-[15px] flex items-center justify-center h-10 w-10 md:h-11 md:w-11 shadow-lg cursor-pointer hover:scale-105 transition-transform flex-shrink-0 pointer-events-auto border border-white/20"
        >
          {isMuted ? (
            <VolumeX
              className="text-brand-primary"
              size={18}
              strokeWidth={2.5}
            />
          ) : (
            <Volume2
              className="text-brand-primary"
              size={18}
              strokeWidth={2.5}
            />
          )}
        </div>
      </div>
    </div>
  );
}
