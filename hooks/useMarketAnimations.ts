import { RefObject, MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useMarketAnimations = (
  sectionRef: RefObject<HTMLElement | null>,
  textContainerRef: RefObject<HTMLDivElement | null>,
  locationTextContainerRef: RefObject<HTMLDivElement | null>,
  teamTextContainerRef: RefObject<HTMLDivElement | null>,
  mobileTl: MutableRefObject<gsap.core.Timeline | null>,
) => {
  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      const form3DParams = {
        opacity: 0,
        y: 80,
        z: -50,
        rotationX: -60,
        scale: 0.9,
      };

      const to3DParams = {
        opacity: 1,
        y: 0,
        z: 0,
        rotationX: 0,
        scale: 1,
        ease: "power3.out",
      };

      const marketingEls = gsap.utils.toArray([
        ".marketing-badge",
        ".market-text-line-1",
        ".market-text-line-2",
        ".market-subtext-p",
      ]);

      const locationEls = gsap.utils.toArray([
        ".location-badge",
        ".location-title",
        ".location-subtext-p",
      ]);

      const teamEls = gsap.utils.toArray([
        ".team-badge",
        ".team-title",
        ".team-subtext-p",
      ]);

      // 1. ANIMASI DESKTOP
      mm.add("(min-width: 1024px)", () => {
        gsap.set(
          [
            textContainerRef.current,
            locationTextContainerRef.current,
            teamTextContainerRef.current,
          ],
          {
            transformPerspective: 800,
            transformOrigin: "center center",
            rotationY: -55,
            rotationZ: -10,
            y: "55vh",
          },
        );

        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=600%",
            pin: true,
            scrub: 1.5,
          },
        });

        pinTl
          .addLabel("marketingEntry")
          .to(
            textContainerRef.current,
            { rotationY: 0, rotationZ: 0, y: "0vh", duration: 0.8 },
            "marketingEntry",
          )
          .to(
            marketingEls,
            { ...to3DParams, duration: 0.8, stagger: 0.08 },
            "marketingEntry",
          )
          .to({}, { duration: 0.5 })
          .fromTo(
            ".zoom-image-wrapper",
            { scale: 0.4, opacity: 0, y: 100 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "back.out(1.2)",
              stagger: 0.25,
            },
          )
          .to({}, { duration: 1 })

          .addLabel("marketingExit")
          .to(
            ".marketing-images-container",
            { opacity: 0, y: -50, duration: 1.5, ease: "power2.inOut" },
            "marketingExit",
          )
          .to(
            textContainerRef.current,
            {
              rotationY: 40,
              rotationZ: 8,
              y: "-60vh",
              opacity: 0,
              duration: 1.5,
              ease: "none",
            },
            "marketingExit",
          )

          .addLabel("locationEntry")
          .fromTo(
            ".location-wrapper",
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            "locationEntry-=0.5",
          )
          .fromTo(
            locationTextContainerRef.current,
            {
              transformPerspective: 800,
              transformOrigin: "center center",
              rotationY: -55,
              rotationZ: -10,
              y: "40vh",
            },
            {
              transformPerspective: 800,
              rotationY: 0,
              rotationZ: 0,
              y: "0vh",
              duration: 2,
            },
            "locationEntry",
          )
          .fromTo(
            locationEls,
            form3DParams,
            { ...to3DParams, duration: 2, stagger: 0.2 },
            "locationEntry",
          )
          .fromTo(
            ".location-image-wrapper",
            { scale: 0.5, opacity: 0, y: 50 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "back.out(1.2)",
              stagger: 0.2,
            },
            "<0.5",
          )
          .to({}, { duration: 1 })

          .addLabel("locationExit")
          .to(
            ".location-images-container",
            { opacity: 0, y: -50, duration: 1.5, ease: "power2.inOut" },
            "locationExit",
          )
          .to(
            locationTextContainerRef.current,
            {
              rotationY: 40,
              rotationZ: 8,
              y: "-60vh",
              opacity: 0,
              duration: 1.5,
              ease: "none",
            },
            "locationExit",
          )

          .addLabel("teamEntry")
          .fromTo(
            ".team-wrapper",
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            "teamEntry-=0.5",
          )
          .fromTo(
            teamTextContainerRef.current,
            {
              transformPerspective: 800,
              transformOrigin: "center center",
              rotationY: -55,
              rotationZ: -10,
              y: "40vh",
            },
            {
              transformPerspective: 800,
              rotationY: 0,
              rotationZ: 0,
              y: "0vh",
              duration: 2,
            },
            "teamEntry",
          )
          .fromTo(
            teamEls,
            form3DParams,
            { ...to3DParams, duration: 2, stagger: 0.2 },
            "teamEntry",
          )
          .fromTo(
            ".team-image-wrapper",
            { scale: 0.5, opacity: 0, y: 50 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "back.out(1.2)",
              stagger: 0.2,
            },
            "<0.5",
          )
          .to({}, { duration: 0.5 });
      });

      // 2. ANIMASI MOBILE & TABLET
      mm.add("(max-width: 1023px)", () => {
        gsap.set(
          [
            textContainerRef.current,
            locationTextContainerRef.current,
            teamTextContainerRef.current,
          ],
          {
            transformPerspective: 800,
            transformOrigin: "center center",
          },
        );

        // Initial State (Slide 0)
        gsap.set(textContainerRef.current, {
          rotationY: 0,
          rotationZ: 0,
          y: 0,
          opacity: 1,
        });
        gsap.set(marketingEls, {
          opacity: 1,
          y: 0,
          z: 0,
          rotationX: 0,
          scale: 1,
        });
        gsap.set(".marketing-images-container", { opacity: 1, y: 0 });
        gsap.set(".zoom-image-wrapper", { scale: 1, opacity: 1, y: 0 });
        gsap.set(".marketing-wrapper", { opacity: 1, pointerEvents: "auto" });

        gsap.set(".location-wrapper", { opacity: 0, pointerEvents: "none" });
        gsap.set(locationTextContainerRef.current, { opacity: 0 });

        gsap.set(".team-wrapper", { opacity: 0, pointerEvents: "none" });
        gsap.set(teamTextContainerRef.current, { opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.addLabel("slide0");

        tl.to(textContainerRef.current, {
          rotationY: 35,
          rotationZ: 8,
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
          .to(
            ".zoom-image-wrapper",
            {
              scale: 0.4,
              opacity: 0,
              y: -50,
              duration: 0.4,
              stagger: 0.05,
              ease: "power2.inOut",
            },
            "<",
          )
          .set(".marketing-wrapper", { pointerEvents: "none" })
          .set(".location-wrapper", { pointerEvents: "auto", opacity: 1 })
          .fromTo(
            locationTextContainerRef.current,
            { rotationY: -35, rotationZ: -8, y: 50, opacity: 0 },
            {
              rotationY: 0,
              rotationZ: 0,
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.1",
          )
          .fromTo(
            locationEls,
            form3DParams,
            { ...to3DParams, duration: 0.6, stagger: 0.08 },
            "<0.1",
          )
          .fromTo(
            ".location-image-wrapper",
            { scale: 0.4, opacity: 0, y: 50 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "back.out(1.2)",
            },
            "<0.1",
          );

        // SLIDE 1
        tl.addLabel("slide1");

        // Transisi ke TEAM (Slide 2)
        tl.to(locationTextContainerRef.current, {
          rotationY: 35,
          rotationZ: 8,
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
          .to(
            ".location-image-wrapper",
            {
              scale: 0.4,
              opacity: 0,
              y: -50,
              duration: 0.4,
              stagger: 0.05,
              ease: "power2.inOut",
            },
            "<",
          )
          .set(".location-wrapper", { pointerEvents: "none" })
          .set(".team-wrapper", { pointerEvents: "auto", opacity: 1 })
          .fromTo(
            teamTextContainerRef.current,
            { rotationY: -35, rotationZ: -8, y: 50, opacity: 0 },
            {
              rotationY: 0,
              rotationZ: 0,
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.1",
          )
          .fromTo(
            teamEls,
            form3DParams,
            { ...to3DParams, duration: 0.6, stagger: 0.08 },
            "<0.1",
          )
          .fromTo(
            ".team-image-wrapper",
            { scale: 0.4, opacity: 0, y: 50 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "back.out(1.2)",
            },
            "<0.1",
          );

        // SLIDE 2
        tl.addLabel("slide2");

        mobileTl.current = tl;
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );
};
