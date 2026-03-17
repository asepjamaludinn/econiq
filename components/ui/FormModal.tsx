"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";
import AnimatedSideModal from "./AnimatedSideModal";
import type ReCAPTCHA_Type from "react-google-recaptcha";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[78px] bg-zinc-100 animate-pulse rounded-md border border-zinc-200 flex items-center justify-center">
      <span className="text-sm font-medium text-zinc-400">
        Loading anti-spam...
      </span>
    </div>
  ),
});

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const recaptchaRef = useRef<ReCAPTCHA_Type>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMsg(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
          setCaptchaValue(null);
        }
      }, 500);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      setErrorMsg("Please complete the reCAPTCHA.");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
          setCaptchaValue(null);
        }
      } else {
        const errorData = await response.json();

        if (errorData.errors && Array.isArray(errorData.errors)) {
          setErrorMsg(errorData.errors.join(", "));
        } else {
          setErrorMsg(errorData.message || "An unexpected error occurred.");
        }

        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg(
        "Failed to connect to the server. Please check your network.",
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSideModal
      isOpen={isOpen}
      onClose={onClose}
      title="Join ECONIQ"
      contentClassName="px-5 md:px-10 lg:px-12 pb-8 md:pb-10 pt-4 md:pt-6 flex-grow flex flex-col gap-4 md:gap-6 overflow-y-auto"
    >
      <div className="modal-animate-item shrink-0">
        <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-black uppercase tracking-tighter text-foreground leading-[0.9] mb-2 md:mb-4">
          JOIN THE
          <br />
          <span className="text-brand-secondary">NEXT GENERATION</span>
          <br />
          OF DIGITAL FINANCE
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-zinc-500 leading-snug max-w-lg">
          Learn the fundamentals of Web3, blockchain, and digital finance. Leave
          your details and our team will share more information with you.
        </p>
      </div>

      <form
        className="flex flex-col gap-3 md:gap-4 mt-1 md:mt-2 shrink-0 pb-4"
        onSubmit={handleSubmit}
      >
        <div className="modal-animate-item">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full bg-brand-light text-foreground placeholder:text-zinc-400 p-3.5 md:p-4 rounded-xl font-medium outline-none border border-transparent focus:border-brand-secondary/40 transition-colors"
          />
        </div>

        <div className="modal-animate-item">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full bg-brand-light text-foreground placeholder:text-zinc-400 p-3.5 md:p-4 rounded-xl font-medium outline-none border border-transparent focus:border-brand-secondary/40 transition-colors"
          />
        </div>

        <div className="modal-animate-item flex items-start sm:items-center gap-3 mt-1 md:mt-2">
          <input
            type="checkbox"
            id="terms"
            name="terms_agreed"
            required
            className="w-5 h-5 mt-0.5 sm:mt-0 accent-brand-secondary cursor-pointer rounded border-brand-secondary/30 shrink-0"
          />
          <label
            htmlFor="terms"
            className="text-xs sm:text-sm md:text-base text-zinc-600 cursor-default"
          >
            I accept the processing of my{" "}
            <Link
              href="/privacy"
              onClick={(e) => e.stopPropagation()}
              className="text-brand-secondary font-medium hover:text-brand-primary hover:underline transition-all duration-300"
            >
              personal data.
            </Link>
          </label>
        </div>

        <div className="modal-animate-item mt-1 md:mt-2 origin-left scale-[0.85] sm:scale-100 min-h-[78px]">
          {isOpen && (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(val) => setCaptchaValue(val)}
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
              <span className="font-bold text-sm md:text-base">Thank you!</span>
              <span className="font-medium text-xs md:text-sm text-green-600/90 leading-relaxed">
                Your information has been sent. Please check your email inbox
                (or spam folder) for the confirmation message.
              </span>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="modal-animate-item text-red-500 bg-red-50 p-3.5 md:p-4 rounded-xl border border-red-200 font-medium text-sm">
            {errorMsg || "Oops! Something went wrong. Please try again later."}
          </div>
        )}

        <div className="modal-animate-item mt-2 md:mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group w-full font-bold py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer active:scale-[0.98] ${
              isSubmitting
                ? "bg-brand-muted text-white cursor-not-allowed"
                : "bg-brand-secondary hover:bg-brand-primary hover:shadow-lg text-white"
            }`}
          >
            {isSubmitting ? "Sending..." : "Start Learning"}

            {!isSubmitting && (
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
            )}
          </button>
        </div>
      </form>
    </AnimatedSideModal>
  );
}
