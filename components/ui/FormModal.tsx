"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AnimatedSideModal from "./AnimatedSideModal";
import type ReCAPTCHA_Type from "react-google-recaptcha";
import { contactSchema, ContactInput } from "@/lib/validations/contact";
import { Button } from "./Button";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[78px] bg-zinc-50 animate-pulse rounded-xl border border-zinc-200 flex items-center justify-center shadow-sm">
      <div className="flex items-center gap-2 text-zinc-400">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span className="text-xs font-bold tracking-wider uppercase">
          Memverifikasi Keamanan...
        </span>
      </div>
    </div>
  ),
}) as React.ComponentType<
  React.ComponentProps<typeof ReCAPTCHA_Type> &
    React.RefAttributes<ReCAPTCHA_Type>
>;

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const recaptchaRef = useRef<ReCAPTCHA_Type>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      message: "",
    },
  });

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMsg(null);
        reset();
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
          setCaptchaValue(null);
        }
      }, 500);
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: ContactInput) => {
    if (!captchaValue) {
      setErrorMsg("Harap selesaikan verifikasi keamanan ReCAPTCHA.");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("idle");
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captchaValue }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
          setCaptchaValue(null);
        }
      } else {
        const errorData = await response.json();
        setErrorMsg(
          errorData.message ||
            "Terjadi kesalahan pada server. Silakan coba lagi.",
        );
        setSubmitStatus("error");

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
          setCaptchaValue(null);
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(
        "Gagal terhubung ke server. Harap periksa koneksi jaringan Anda.",
      );
      setSubmitStatus("error");

      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setCaptchaValue(null);
      }
    }
  };

  return (
    <AnimatedSideModal
      isOpen={isOpen}
      onClose={onClose}
      title="Gabung ECONIQ"
      contentClassName="px-5 md:px-10 lg:px-12 pb-12 pt-4 md:pt-6 flex flex-col gap-4 md:gap-6"
    >
      <div className="modal-animate-item shrink-0">
        <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[50px] font-black uppercase tracking-tighter text-foreground leading-[0.9] mb-2 md:mb-4">
          BERGABUNG DENGAN
          <br />
          <span className="text-brand-secondary">GENERASI BARU</span>
          <br />
          KEUANGAN DIGITAL
        </h2>
        <p className="text-sm sm:text-base md:text-md lg:text-md font-medium text-zinc-500 leading-snug max-w-lg">
          Pelajari dasar-dasar Web3, blockchain, dan keuangan digital. Isi data
          diri Anda dan tim kami akan segera membagikan informasi lebih lanjut.
        </p>
      </div>

      <form
        className="flex flex-col gap-3 md:gap-4 mt-1 md:mt-2 shrink-0 pb-4"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <InputField
          {...register("name")}
          type="text"
          placeholder="Nama Lengkap"
          error={errors.name?.message}
          clearError={() => clearErrors("name")}
          wrapperClassName="modal-animate-item"
        />

        <InputField
          {...register("email")}
          type="email"
          placeholder="Alamat Email"
          error={errors.email?.message}
          clearError={() => clearErrors("email")}
          wrapperClassName="modal-animate-item"
        />

        <SelectField
          {...register("interest")}
          error={errors.interest?.message}
          clearError={() => clearErrors("interest")}
          wrapperClassName="modal-animate-item"
          placeholderText="Topik yang Ingin Dipelajari"
          options={[
            {
              value: "Dasar Web3 & Blockchain",
              label: "Dasar Web3 & Blockchain",
            },
            {
              value: "Keamanan Crypto Wallet",
              label: "Keamanan Crypto Wallet",
            },
            {
              value: "Green Blockchain",
              label: "Green Blockchain & Keberlanjutan",
            },
            { value: "Smart Contract", label: "Smart Contract & Pengembangan" },
            { value: "Lainnya", label: "Lainnya / Umum" },
          ]}
        />

        <TextAreaField
          {...register("message")}
          placeholder="Tulis motivasi bergabung atau hal yang ingin Anda tanyakan..."
          rows={4}
          error={errors.message?.message}
          clearError={() => clearErrors("message")}
          wrapperClassName="modal-animate-item"
        />

        <div className="modal-animate-item flex items-start sm:items-center gap-3 mt-1 md:mt-2">
          <input
            {...register("terms_agreed")}
            type="checkbox"
            id="terms"
            onChange={() => clearErrors("terms_agreed")}
            className={`w-5 h-5 mt-0.5 sm:mt-0 accent-brand-secondary cursor-pointer rounded border-brand-secondary/30 shrink-0 ${
              errors.terms_agreed ? "outline outline-1 outline-red-500" : ""
            }`}
          />
          <label
            htmlFor="terms"
            className="text-xs sm:text-sm md:text-base text-zinc-600 cursor-pointer"
          >
            Saya menyetujui pemrosesan{" "}
            <Link
              href="/privacy"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="text-brand-secondary font-medium hover:text-brand-primary hover:underline transition-all duration-300"
            >
              data pribadi saya.
            </Link>
          </label>
        </div>
        {errors.terms_agreed && (
          <span className="modal-animate-item text-red-500 text-sm mt-0 ml-8 font-medium">
            {errors.terms_agreed.message}
          </span>
        )}

        <div className="modal-animate-item mt-1 md:mt-2 origin-left scale-[0.85] sm:scale-100 min-h-[78px]">
          {isOpen && (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(val: string | null) => setCaptchaValue(val)}
            />
          )}
        </div>

        {submitStatus === "success" && (
          <div className="modal-animate-item flex items-start gap-3 text-green-700 bg-green-50 p-3.5 md:p-4 rounded-xl border border-green-200">
            <CheckCircle2
              size={24}
              className="mt-0.5 flex-shrink-0 text-green-600"
            />
            <div className="flex flex-col gap-1">
              <span className="font-bold text-sm md:text-base">
                Terima kasih!
              </span>
              <span className="font-medium text-xs md:text-sm text-green-600/90 leading-relaxed">
                Informasi Anda telah terkirim. Silakan periksa kotak masuk email
                Anda (atau folder spam) untuk pesan konfirmasi.
              </span>
            </div>
          </div>
        )}

        {submitStatus === "error" && errorMsg && (
          <div className="modal-animate-item text-red-500 bg-red-50 p-3.5 md:p-4 rounded-xl border border-red-200 font-medium text-sm">
            {errorMsg}
          </div>
        )}

        <div className="modal-animate-item mt-2 md:mt-4">
          <Button
            type="submit"
            variant="secondary"
            size="default"
            disabled={isSubmitting}
            className="w-full group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Mengirim...
              </>
            ) : (
              <>
                Kirim Pendaftaran
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="overflow-visible"
                >
                  <path
                    d="M5 12h14"
                    className="transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:scale-x-[1.8]"
                    style={{ transformOrigin: "19px 12px" }}
                  />
                  <path
                    d="m12 5 7 7-7 7"
                    className="transition-all duration-300 ease-out group-hover:translate-x-3"
                  />
                </svg>
              </>
            )}
          </Button>
        </div>
      </form>
    </AnimatedSideModal>
  );
}
