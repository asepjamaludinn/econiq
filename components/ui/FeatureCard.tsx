import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  timestamp: string;
}

export default function FeatureCard({ title, description, imageSrc, timestamp }: FeatureCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-[#660DFF]/50 hover:bg-white/10 hover:-translate-y-2">
      <div className="relative h-60 w-full overflow-hidden bg-black/50">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Badge ala Vlog timestamp */}
        <span className="absolute bottom-4 right-4 rounded-md bg-black/70 px-3 py-1.5 text-xs font-bold tracking-wider text-white backdrop-blur-md">
          {timestamp}
        </span>
      </div>
      
      <div className="flex flex-col p-6 md:p-8">
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/60">{description}</p>
      </div>
    </div>
  );
}