interface IconProps {
  className?: string;
}

export const IconArrowRightSlider = ({ className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
