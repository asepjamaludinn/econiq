import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useHowItWorksAnimations = (
  sectionRef: RefObject<HTMLElement | null>,
  textContainerRef: RefObject<HTMLDivElement | null>,
  pinWrapperRef: RefObject<HTMLDivElement | null>,
  imageRef: RefObject<HTMLImageElement | null>,
) => {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gsap.fromTo(
        sectionRef.current,
        { clipPath: "polygon(0 0, 100% 0vw, 100% 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 5vw, 100% 100%, 0 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        },
      );

      const imageTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      imageTl.fromTo(
        imageRef.current,
        { x: "-40vw", opacity: 1, rotation: 0 },
        { x: "10vw", opacity: 1, rotation: 20, ease: "none" },
      );

      mm.add("(min-width: 1024px)", () => {
        const textTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        });

        textTl
          .fromTo(
            ".text-line-1",
            {
              opacity: 0,
              y: 50,
              z: -20,
              rotationX: -45,
              filter: "blur(12px)",
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              z: 0,
              rotationX: 0,
              filter: "blur(0px)",
              scale: 1,
              duration: 1,
              ease: "power3.out",
            },
          )
          .fromTo(
            ".text-line-2",
            {
              opacity: 0,
              y: 60,
              z: -20,
              rotationX: -45,
              filter: "blur(12px)",
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              z: 0,
              rotationX: 0,
              filter: "blur(0px)",
              scale: 1,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.9",
          );

        const steps = gsap.utils.toArray<HTMLDivElement>(".desktop-step-card");
        const stepContents = gsap.utils.toArray<HTMLDivElement>(
          ".desktop-step-content",
        );
        const stepCircles = gsap.utils.toArray<HTMLDivElement>(
          ".desktop-step-circle",
        );
        const stepTexts =
          gsap.utils.toArray<HTMLSpanElement>(".desktop-step-text");
        const imageSlides = gsap.utils.toArray<HTMLDivElement>(
          ".desktop-image-slide",
        );

        gsap.set([stepContents, stepCircles, stepTexts], { opacity: 0.25 });
        gsap.set(stepContents, { y: 20 });
        gsap.set(imageSlides, { y: "150vh" });

        gsap.set([stepCircles[0], stepTexts[0], stepContents[0]], {
          opacity: 1,
          y: 0,
        });
        gsap.set(imageSlides[0], { y: "0vh" });

        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinWrapperRef.current,
            start: "top 20%",
            end: "+=3500",
            pin: sectionRef.current,
            pinSpacing: true,
            scrub: 1,
          },
        });

        steps.forEach((step, index) => {
          if (index === 0) return;
          const progress = index / (steps.length - 1);

          pinTl
            .to(".line-progress", {
              scaleY: progress,
              duration: 1.5,
              ease: "none",
            })
            .to([stepCircles[index], stepTexts[index]], {
              opacity: 1,
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out",
            })
            .to(
              stepContents[index],
              { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
              "<",
            )
            .to(
              imageSlides[index - 1],
              { y: "-150vh", duration: 1, ease: "power2.inOut" },
              "<",
            )
            .to(
              imageSlides[index],
              { y: "0vh", duration: 1, ease: "power2.inOut" },
              "<",
            )
            .to({}, { duration: 0.5 });
        });
      });

      mm.add("(min-width: 1280px)", () => {
        gsap.set(textContainerRef.current, {
          transformPerspective: 1500,
          transformOrigin: "center center",
          rotationY: -55,
          rotationZ: -10,
          y: "10vh",
        });
        gsap.to(textContainerRef.current, {
          rotationY: 55,
          rotationZ: 10,
          y: "-60vh",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "bottom 40%",
            scrub: 1.5,
          },
        });
      });

      mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
        gsap.set(textContainerRef.current, {
          transformPerspective: 1500,
          rotationY: -30,
          rotationZ: -5,
          y: "5vh",
        });
        gsap.to(textContainerRef.current, {
          rotationY: 0,
          rotationZ: 0,
          y: "-60vh",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "bottom 50%",
            scrub: 1,
          },
        });

        const textLines = gsap.utils.toArray<HTMLDivElement>(".text-line");
        gsap.to(textLines, {
          opacity: 0.3,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: "bottom 50%",
            scrub: 1,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );
};
