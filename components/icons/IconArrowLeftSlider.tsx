interface IconProps {
  className?: string;
}

export const IconArrowLeftSlider = ({ className = "" }: IconProps) => (
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
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);
