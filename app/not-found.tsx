import Link from "next/link";
import { companyInfo } from "@/constants";
import HangingSign from "@/components/ui/HangingSign";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-brand-light/50 to-white px-6 overflow-hidden selection:bg-brand-secondary selection:text-white">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <HangingSign text="ERROR 404" />

      <div className="text-center max-w-lg mb-12 flex flex-col gap-2 z-10">
        <p className="text-zinc-800 text-base md:text-lg font-bold tracking-tight">
          Oops! Halaman yang Anda cari tidak ditemukan.
        </p>
        <p className="text-zinc-500 text-sm md:text-base tracking-tight leading-relaxed">
          Sepertinya Anda tersesat di ruang hampa digital. Silakan periksa
          kembali tautan URL atau kembali ke beranda untuk melanjutkan
          eksplorasi.
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 z-10">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "primary", size: "default" }),
          )}
        >
          Kembali ke Beranda
        </Link>

        <div className="flex flex-col items-center gap-1.5 pt-6 border-t border-zinc-200 min-w-[250px]">
          <span className="text-sm font-semibold text-zinc-500 tracking-tight">
            Punya pertanyaan atau butuh bantuan?
          </span>
          <a
            href={`mailto:${companyInfo.email}`}
            className="text-brand-secondary hover:text-brand-primary font-bold tracking-tight transition-colors duration-300"
          >
            {companyInfo.email}
          </a>
        </div>
      </div>
    </main>
  );
}
