import Image from "next/image";

export default function AnimatedLeaves() {
  return (
    <div className="hidden md:block absolute top-[5%] xl:top-[10%] right-[-2%] w-[100%] xl:w-[30%] z-15 pointer-events-none">
      <div className="relative w-full h-auto">
        <Image
          src="/images/Pohon.svg"
          alt="Pohon Kanan"
          width={500}
          height={500}
          className="w-full h-auto"
        />

        <div className="absolute -top-[15%] -right-[12%] w-[120%] opacity-90 animate-sway-leaves origin-top">
          <Image
            src="/images/Daun.svg"
            alt="Daun cluster"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
