export const SvgGrow = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 drop-shadow-2xl"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="growGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B36EE6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
      </linearGradient>
      <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="100" cy="170" rx="60" ry="15" fill="url(#shadowGrad)" />
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-5; 0,0"
        dur="3s"
        repeatCount="indefinite"
      />
      <ellipse
        cx="100"
        cy="150"
        rx="50"
        ry="15"
        fill="#8644F7"
        opacity="0.3"
        stroke="#FFFFFF"
        strokeOpacity="0.2"
      />
      <ellipse
        cx="100"
        cy="140"
        rx="40"
        ry="12"
        fill="#8644F7"
        opacity="0.6"
        stroke="#FFFFFF"
        strokeOpacity="0.3"
      />
      <ellipse
        cx="100"
        cy="130"
        rx="30"
        ry="9"
        fill="#B36EE6"
        stroke="#FFFFFF"
        strokeOpacity="0.5"
      />
    </g>
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-15; 0,0"
        dur="3s"
        repeatCount="indefinite"
      />
      <path
        d="M100 30 L150 80 L120 80 L120 120 L80 120 L80 80 L50 80 Z"
        fill="url(#growGrad)"
        stroke="#8644F7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M100 40 L130 70 L110 70 L110 110 L90 110 L90 70 L70 70 Z"
        fill="#FFFFFF"
        opacity="0.3"
      />
    </g>
    {[
      { x: 40, y: 50, s: "1" },
      { x: 160, y: 70, s: "0.7" },
      { x: 70, y: 20, s: "0.5" },
    ].map((star, i) => (
      <g key={i} transform={`translate(${star.x}, ${star.y}) scale(${star.s})`}>
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur={`${2 + i}s`}
          repeatCount="indefinite"
        />
        <path
          d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z"
          fill="#FFFFFF"
        />
      </g>
    ))}
  </svg>
);
