"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Unlock,
  TrendingUp,
  Zap,
  Globe,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { featuresData } from "@/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featureIcons = [Unlock, TrendingUp, Zap, Globe];

const formatTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<SVGTSpanElement>(null);
  const badgeRef = useRef<SVGSVGElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useGSAP(
    () => {
      // 1. Animasi Background
      gsap.set(bgRef.current, {
        transformOrigin: "center center",
      });

      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
        rotation: -2,
        scaleX: 1.1,
        scaleY: 1.1,
        ease: "none",
      });

      // 2. Animasi Reveal Teks dan Item
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const revealItems = gsap.utils.toArray<HTMLElement>(".reveal-item");

        gsap.set(revealItems, {
          y: "25vh",
          opacity: 0,
          rotationY: -40,
          rotationX: 40,
          transformOrigin: "center center",
          filter: "brightness(50%)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 10%",
            scrub: 2.5,
          },
        });

        tl.to(revealItems, {
          y: 0,
          opacity: 1,
          rotationY: 0,
          rotationX: 0,
          filter: "brightness(100%)",
          duration: 1,
          ease: "none",
          stagger: 0.15,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        const revealItems = gsap.utils.toArray<HTMLElement>(".reveal-item");

        gsap.set(revealItems, {
          y: "10vh",
          opacity: 0,
        });

        gsap.to(revealItems, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: 2,
          },
          y: 0,
          opacity: 1,
          ease: "none",
          stagger: 0.15,
        });
      });

      // 3. Animasi Counter Angka Acak Berbasis Scroll
      gsap.to(
        { val: 0 },
        {
          val: 100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "top 25%",
            scrub: true,
          },
          onUpdate: function () {
            if (!countRef.current) return;
            const currentProgress = this.progress();

            if (currentProgress === 0) {
              countRef.current.textContent = "000+";
            } else if (currentProgress === 1) {
              countRef.current.textContent = "100+";
            } else {
              const randomNum = Math.floor(Math.random() * 900) + 100;
              countRef.current.textContent = `${randomNum}+`;
            }
          },
        },
      );

      // 4. Animasi Rotasi Badge
      gsap.set(badgeRef.current, {
        rotation: -12,
        scale: 0.9,
      });

      gsap.to(badgeRef.current, {
        rotation: 50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

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

  const handleVolumeClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);

      setShowControls(!newMutedState);
    }
  };

  return (
    <section
      ref={sectionRef}
      // Ubah py-32 menjadi pt-20 pb-32 sm:py-32
      className="relative w-full min-h-screen flex flex-col items-center justify-center z-[120] pt-20 pb-32 sm:py-32 px-4"
      style={{ perspective: "1500px" }}
    >
      <div
        ref={bgRef}
        className="absolute -top-10 -left-[5%] w-[110%] h-[130%] bg-[#660DFF] -z-10"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        <div
          ref={textContainerRef}
          className="mb-16 flex flex-col items-center w-full"
          style={{ perspective: "1500px" }}
        >
          <div className="relative inline-block w-full text-left sm:text-center mb-6 sm:mb-8 -mt-10 sm:mt-0">
            <h2 className="text-[44px] leading-[1.05] sm:text-[clamp(40px,5vw,80px)] sm:leading-[1.1] font-black uppercase tracking-normal text-white drop-shadow-md relative z-10">
              <div className="reveal-item will-change-transform">
                THE NEXT GENERATION
              </div>
              <div className="reveal-item will-change-transform">
                OF DIGITAL FINANCE
              </div>
              <div className="reveal-item will-change-transform">
                STARTS WITH
              </div>
              <div className="reveal-item will-change-transform">ECONIQ</div>
            </h2>

            <div className="reveal-item will-change-transform absolute -top-4 right-0 sm:top-0 sm:-right-16 md:right-15 w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 pointer-events-none drop-shadow-2xl z-20">
              <svg
                ref={badgeRef}
                viewBox="0 0 168 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                style={{ opacity: 0.95 }}
              >
                <g>
                  <path
                    d="M84 -3.67176e-06C130.392 -1.6439e-06 168 37.6081 168 84C168 130.392 130.392 168 84 168L-7.34351e-06 168L-3.67176e-06 84C-1.6439e-06 37.6081 37.6081 -5.69961e-06 84 -3.67176e-06Z"
                    fill="white"
                  />
                  <circle cx="84" cy="84" r="48" fill="#660DFF" />
                  <text
                    fill="white"
                    xmlSpace="preserve"
                    fontFamily="sans-serif"
                    fontSize="32"
                    fontWeight="900"
                    textAnchor="middle"
                    letterSpacing="-0.04em"
                    style={{ whiteSpace: "pre" }}
                  >
                    <tspan ref={countRef} x="84" y="87.08">
                      000+
                    </tspan>
                  </text>
                  <text
                    fill="white"
                    xmlSpace="preserve"
                    fontFamily="sans-serif"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    letterSpacing="0.05em"
                    style={{ whiteSpace: "pre" }}
                  >
                    <tspan x="84" y="105.08">
                      STORES
                    </tspan>
                  </text>
                </g>
              </svg>
            </div>
          </div>
          <div
            className="reveal-item will-change-transform w-full max-w-4xl aspect-video bg-black/10 rounded-3xl border-2 border-white/20 flex flex-col items-center justify-center mb-8 backdrop-blur-md shadow-2xl relative overflow-hidden group"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              src="/animations/econiq.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover pointer-events-none"
            />

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
                    className="cursor-pointer text-[#660DFF] hover:opacity-80 transition-opacity flex-shrink-0"
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
                    className="w-32 sm:w-48 h-1.5 bg-[#660DFF]/20 rounded-full cursor-pointer relative"
                  >
                    <div
                      className="absolute top-0 left-0 h-full bg-[#660DFF] rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <span className="text-[#660DFF] font-bold text-sm tabular-nums flex-shrink-0">
                    {formatTime(currentTime)}
                  </span>
                </div>
              </div>

              <div
                onClick={handleVolumeClick}
                className="bg-white rounded-[20px] flex items-center justify-center h-12 w-12 shadow-lg cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
              >
                {isMuted ? (
                  <VolumeX
                    className="text-[#660DFF]"
                    size={20}
                    strokeWidth={2.5}
                  />
                ) : (
                  <Volume2
                    className="text-[#660DFF]"
                    size={20}
                    strokeWidth={2.5}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 w-full mt-8 reveal-item">
          {featuresData.map((item, index) => {
            const Icon = featureIcons[index % featureIcons.length];

            return (
              <div
                key={index}
                className="flex flex-row items-start p-2 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mr-4 flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col flex-1 text-left pt-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
