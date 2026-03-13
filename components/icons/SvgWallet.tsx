export const SvgWallet = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 drop-shadow-2xl"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="walletGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
      </linearGradient>
      <linearGradient id="walletGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B36EE6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#8644F7" stopOpacity="0.9" />
      </linearGradient>
      <filter id="glowWallet" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <circle
      cx="100"
      cy="100"
      r="60"
      fill="#8644F7"
      opacity="0.4"
      filter="blur(20px)"
    />

    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-8; 0,0"
        dur="4s"
        repeatCount="indefinite"
      />
      <rect
        x="30"
        y="60"
        width="140"
        height="90"
        rx="16"
        fill="url(#walletGrad1)"
        stroke="#FFFFFF"
        strokeOpacity="0.2"
        strokeWidth="2"
      />

      <g filter="url(#glowWallet)">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-15; 0,0"
          dur="3s"
          repeatCount="indefinite"
        />
        <circle cx="100" cy="70" r="28" fill="url(#walletGrad2)" />
        <path
          d="M100 52 L91 67 L100 72 L109 67 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />
        <path
          d="M100 72 L91 67 L100 83 L109 67 Z"
          fill="#FFFFFF"
          opacity="0.5"
        />
      </g>

      <path
        d="M20 90 Q 100 120 180 90 L180 140 Q 180 156 164 156 L36 156 Q 20 156 20 140 Z"
        fill="url(#walletGrad2)"
        stroke="#FFFFFF"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
      <rect
        x="85"
        y="95"
        width="30"
        height="12"
        rx="6"
        fill="#FFFFFF"
        opacity="0.9"
      />
      <circle cx="100" cy="101" r="2" fill="#8644F7" />
    </g>

    {[
      { cx: 30, cy: 50, dur: "2s", delay: "0s" },
      { cx: 160, cy: 40, dur: "3s", delay: "1s" },
      { cx: 170, cy: 150, dur: "2.5s", delay: "0.5s" },
    ].map((p, i) => (
      <circle key={i} cx={p.cx} cy={p.cy} r="3" fill="#FFFFFF" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.2;1;0.2"
          dur={p.dur}
          begin={p.delay}
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 0,-10; 0,0"
          dur={p.dur}
          begin={p.delay}
          repeatCount="indefinite"
        />
      </circle>
    ))}
  </svg>
);
