import Image from "next/image";

export default function CatAnimation() {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute z-0"
        style={{
          bottom: "22%",
          left: "10%",
          width: "80%",
          height: "15%",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          filter: "blur(3px)",
          transform: "scaleY(0.5)",
        }}
      ></div>

      <div className="relative w-full h-[50%] z-10 translate-y-[15%] md:translate-y-[25%] -translate-x-[6%] md:-translate-x-[30%]">
        <div className="relative w-full h-full animate-sway-cat origin-bottom">
          <Image
            src="/images/kepala meng1.svg"
            alt="Kepala Kucing"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="relative w-full h-[65%] -translate-y-[20%] md:-translate-y-[25%]">
        <Image
          src="/images/meng1 tanpa kepala.svg"
          alt="Badan Kucing"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  );
}
