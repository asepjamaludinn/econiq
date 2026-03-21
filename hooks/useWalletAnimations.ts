import { RefObject, MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { walletAssetsData } from "@/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useWalletAnimations = (
  wrapperRef: RefObject<HTMLDivElement | null>,
  dompetRef: RefObject<HTMLDivElement | null>,
  nextSectionRef: RefObject<HTMLElement | null>,
  textContainerRef: RefObject<HTMLDivElement | null>,
  assetRefs: MutableRefObject<(HTMLImageElement | null)[]>,
  mobileWalletContainerRef: RefObject<HTMLDivElement | null>,
  mobileAssetRefs: MutableRefObject<(HTMLImageElement | null)[]>,
) => {
  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1280px)", () => {
        gsap.set(dompetRef.current, {
          xPercent: -50,
          yPercent: -50,
          rotation: 4,
          transformOrigin: "center center",
        });

        walletAssetsData.forEach((_, i) => {
          gsap.set(assetRefs.current[i], {
            x: i % 2 === 0 ? -150 : 150,
            y: -120,
            opacity: 0,
            scale: 0.8,
            rotation: i % 2 === 0 ? -45 : 45,
          });
        });

        gsap.set(textContainerRef.current, {
          y: "20vh",
          opacity: 0,
          rotationY: -40,
          rotationX: 25,
          transformOrigin: "center center",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: nextSectionRef.current,
            start: "top 85%",
            end: "bottom top",
            scrub: 2.5,
          },
        });

        tl.to(
          dompetRef.current,
          { y: "98vh", left: "50%", scale: 8, ease: "none", duration: 0.6 },
          0,
        )
          .to(
            dompetRef.current,
            { rotation: -60, ease: "sine.inOut", duration: 0.3 },
            0,
          )
          .to(
            dompetRef.current,
            { rotation: 4, ease: "sine.inOut", duration: 0.2 },
            0.4,
          );

        tl.to(
          textContainerRef.current,
          { opacity: 1, duration: 0.9, ease: "power2.inOut" },
          0,
        );
        tl.to(
          textContainerRef.current,
          {
            y: "-35vh",
            rotationY: 10,
            rotationX: -15,
            duration: 1,
            ease: "none",
          },
          0,
        );
        tl.fromTo(
          textContainerRef.current,
          { filter: "opacity(85%) brightness(90%)" },
          {
            filter: "opacity(100%) brightness(100%)",
            duration: 1,
            ease: "none",
          },
          0,
        );
        tl.to(textContainerRef.current, { opacity: 1, duration: 1 }, 0.85);

        const assetTL = gsap.timeline({ paused: true });
        assetTL.to(assetRefs.current, {
          keyframes: [
            { opacity: 1, duration: 0.01 },
            {
              x: 0,
              y: -10,
              opacity: 1,
              rotation: 0,
              scale: 0.5,
              duration: 0.8,
              ease: "power1.out",
            },
            { y: 15, opacity: 0, scale: 0.2, duration: 0.6, ease: "power2.in" },
          ],
          stagger: 0.4,
        });

        tl.to(
          {},
          {
            duration: 0.1,
            onStart: () => {
              assetTL.restart();
            },
            onReverseComplete: () => {
              gsap.to(assetRefs.current, {
                opacity: 0,
                duration: 0.2,
                ease: "power1.out",
                onComplete: () => {
                  assetTL.pause(0);
                },
              });
            },
          },
          0.6,
        );
      });

      mm.add("(max-width: 1279px)", () => {
        gsap.set(dompetRef.current, {
          xPercent: -50,
          yPercent: -50,
          rotation: 4,
          y: 0,
          left: "30%",
          scale: 1,
        });

        gsap.set(textContainerRef.current, {
          y: 0,
          opacity: 1,
          rotationY: 0,
          rotationX: 0,
          filter: "none",
        });

        const contH = mobileWalletContainerRef.current?.offsetHeight || 220;

        mobileAssetRefs.current.forEach((el, i) => {
          gsap.set(el, {
            x: i % 2 === 0 ? -contH * 1.2 : contH * 1.2,
            y: -contH * 1.2,
            opacity: 0,
            scale: 0.8,
            rotation: i % 2 === 0 ? -45 : 45,
          });
        });

        const mobileAssetTL = gsap.timeline({
          paused: true,
          repeat: -1,
        });

        mobileAssetTL.to(mobileAssetRefs.current, {
          keyframes: [
            { opacity: 1, duration: 0.01 },
            {
              x: 0,
              y: contH * 0.23,
              opacity: 1,
              rotation: 0,
              scale: 1,
              duration: 1.4,
              ease: "power1.out",
            },
            {
              y: contH * 0.14,
              opacity: 0,
              scale: 0.3,
              duration: 1.2,
              ease: "power2.in",
            },
          ],
          stagger: 0.6,
        });

        ScrollTrigger.create({
          trigger: mobileWalletContainerRef.current,
          start: "top 75%",
          onEnter: () => mobileAssetTL.play(),
        });
      });

      return () => mm.revert();
    },
    { scope: wrapperRef },
  );
};
