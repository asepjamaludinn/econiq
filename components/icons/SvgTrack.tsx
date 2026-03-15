export const SvgTrack = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 drop-shadow-2xl"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="trackBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
      </linearGradient>
      <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B36EE6" stopOpacity="1" />
        <stop offset="100%" stopColor="#8644F7" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,5; 0,-5; 0,5"
        dur="4s"
        repeatCount="indefinite"
      />
      <rect
        x="20"
        y="30"
        width="160"
        height="140"
        rx="16"
        fill="url(#trackBg)"
        stroke="#FFFFFF"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <rect
        x="35"
        y="45"
        width="40"
        height="8"
        rx="4"
        fill="#FFFFFF"
        opacity="0.5"
      />
      <circle cx="165" cy="49" r="4" fill="#B36EE6" />
      <line
        x1="35"
        y1="80"
        x2="165"
        y2="80"
        stroke="#FFFFFF"
        strokeOpacity="0.1"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <line
        x1="35"
        y1="110"
        x2="165"
        y2="110"
        stroke="#FFFFFF"
        strokeOpacity="0.1"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <line
        x1="35"
        y1="140"
        x2="165"
        y2="140"
        stroke="#FFFFFF"
        strokeOpacity="0.2"
        strokeWidth="1"
      />
      {[
        { x: 45, h1: 30, h2: 50 },
        { x: 75, h1: 60, h2: 40 },
        { x: 105, h1: 40, h2: 80 },
        { x: 135, h1: 90, h2: 60 },
      ].map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y="140"
          width="18"
          height="0"
          rx="4"
          fill="url(#barGrad)"
        >
          <animate
            attributeName="height"
            values={`${bar.h1};${bar.h2};${bar.h1}`}
            dur={`${3 + i * 0.5}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values={`${140 - bar.h1};${140 - bar.h2};${140 - bar.h1}`}
            dur={`${3 + i * 0.5}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
      <path
        d="M35 120 Q 60 70 90 90 T 165 50"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="d"
          values="M35 120 Q 60 70 90 90 T 165 50; M35 100 Q 60 110 90 70 T 165 30; M35 120 Q 60 70 90 90 T 165 50"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>
      <circle cx="165" cy="50" r="6" fill="#FFFFFF">
        <animate
          attributeName="cy"
          values="50;30;50"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);
