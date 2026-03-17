import Link from "next/link";
import { companyInfo } from "@/constants";
import HangingSign from "@/components/ui/HangingSign";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-brand-light/50 to-white px-6 overflow-hidden selection:bg-brand-secondary selection:text-white">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <HangingSign text="404 ERROR" />

      <div className="text-center max-w-lg mb-12 flex flex-col gap-2 z-10">
        <p className="text-zinc-700 md:text-lg font-semibold tracking-tight">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <p className="text-zinc-500 text-sm md:text-base tracking-tight">
          We suggest you check the URL or return to our homepage.
        </p>
      </div>

      {/* Aksi & Kontak */}
      <div className="flex flex-col items-center gap-10 z-10">
        <Link
          href="/"
          className="px-8 py-3.5 bg-brand-primary text-white font-normal rounded-xl shadow-[0_8px_25px_rgba(102,13,255,0.3)] hover:bg-brand-dark hover:-translate-y-1 transition-all duration-300 active:scale-95"
        >
          Return to Homepage
        </Link>

        <div className="flex flex-col items-center gap-1.5 pt-6 border-t border-zinc-200 min-w-[250px]">
          <span className="text-sm font-semibold text-zinc-800 tracking-tight">
            Contact us for any inquiry
          </span>
          <a
            href={`mailto:${companyInfo.email}`}
            className="text-brand-secondary hover:text-brand-primary font-semibold transition-colors duration-300"
          >
            {companyInfo.email}
          </a>
        </div>
      </div>
    </main>
  );
}
