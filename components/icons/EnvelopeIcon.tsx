export const EnvelopeIcon = () => (
  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    className="overflow-visible absolute inset-0 w-full h-full group-hover:animate-vibrate"
  >
    <defs>
      <clipPath id="clip-bottom">
        <rect x="-10" y="-50" width="44" height="70" />
      </clipPath>
    </defs>

    <rect x="0" y="4" width="24" height="16" rx="2" fill="white" />

    <g clipPath="url(#clip-bottom)">
      <g className="transition-transform duration-[400ms] ease-out group-hover:-translate-y-[14px]">
        <rect x="3" y="4" width="18" height="24" fill="#f4f4f5" rx="1" />
        <line
          x1="7"
          y1="7"
          x2="17"
          y2="7"
          stroke="#a1a1aa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="7"
          y1="10"
          x2="15"
          y2="10"
          stroke="#a1a1aa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="7"
          y1="13"
          x2="11"
          y2="13"
          stroke="#a1a1aa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </g>

    <path
      d="M0 4L10.8 11.2C11.5 11.6 12.5 11.6 13.2 11.2L24 4V18C24 19.1 23.1 20 22 20H2C0.9 20 0 19.1 0 18V4Z"
      fill="white"
    />

    <path
      d="M1 3.5L12 10.5L23 3.5"
      stroke="#660DFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:stroke-[#5200CC] transition-colors duration-300"
    />
  </svg>
);
