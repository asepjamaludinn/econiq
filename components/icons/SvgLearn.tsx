export const SvgLearn = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 drop-shadow-2xl"
  >
    <defs>
      {/* Efek Kaca (Glassmorphism) untuk Panel */}
      <linearGradient id="learnGlass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
      </linearGradient>

      {/* Glow Filter Premium */}
      <filter id="learnGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>

      {/* Glow Ekstra untuk Kristal */}
      <radialGradient id="crystalGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#B36EE6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#8644F7" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* 1. Ambient Background Glow */}
    <circle cx="100" cy="100" r="55" fill="url(#crystalGlow)" />

    {/* 2. Constellation Network (Node & Garis) */}
    <g stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="1.5">
      <line x1="100" y1="100" x2="35" y2="70" />
      <line x1="100" y1="100" x2="165" y2="60" />
      <line x1="100" y1="100" x2="145" y2="155" />
      <line x1="100" y1="100" x2="45" y2="145" />
      {/* Garis Putus-putus Antar Node */}
      <line x1="35" y1="70" x2="45" y2="145" strokeDasharray="4 4" />
      <line x1="165" y1="60" x2="145" y2="155" strokeDasharray="4 4" />
    </g>

    {/* Pulsing Nodes (Titik-titik Jaringan) */}
    <g fill="#B36EE6" stroke="#FFFFFF" strokeWidth="1.5">
      <circle cx="35" cy="70" r="4">
        <animate
          attributeName="r"
          values="3;5;3"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="165" cy="60" r="5">
        <animate
          attributeName="r"
          values="4;7;4"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="145" cy="155" r="4">
        <animate
          attributeName="r"
          values="3;5;3"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="45" cy="145" r="6">
        <animate
          attributeName="r"
          values="4;6;4"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
    </g>

    {/* 4. Central 3D Crypto Crystal (Simbol Knowledge/Web3) */}
    <g filter="url(#learnGlow)">
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-8; 0,0"
        dur="4s"
        repeatCount="indefinite"
        ease="ease-in-out"
      />

      {/* 3D Polygons membetuk formasi kristal/diamond */}
      <polygon points="100,50 75,95 100,95" fill="#E2D1F9" opacity="0.9" />
      <polygon points="100,50 125,95 100,95" fill="#B36EE6" />
      <polygon points="75,95 100,140 100,95" fill="#8644F7" />
      <polygon points="125,95 100,140 100,95" fill="#5A22B5" />
    </g>

    {/* 5. Floating Glass UI Panels  */}

    {/* Panel Kanan Atas */}
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,-6; 0,0"
        dur="3.5s"
        repeatCount="indefinite"
        ease="ease-in-out"
      />
      <rect
        x="135"
        y="25"
        width="55"
        height="40"
        rx="6"
        fill="url(#learnGlass)"
        stroke="#FFFFFF"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <rect
        x="142"
        y="32"
        width="20"
        height="4"
        rx="2"
        fill="#B36EE6"
        opacity="0.9"
      />
      <rect
        x="142"
        y="42"
        width="40"
        height="2.5"
        rx="1"
        fill="#FFFFFF"
        opacity="0.5"
      />
      <rect
        x="142"
        y="49"
        width="30"
        height="2.5"
        rx="1"
        fill="#FFFFFF"
        opacity="0.3"
      />
      <circle cx="180" cy="34" r="3" fill="#0A7B5E" />
    </g>

    {/* Panel Kiri Bawah  */}
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 0,8; 0,0"
        dur="4.5s"
        repeatCount="indefinite"
        ease="ease-in-out"
      />
      <rect
        x="10"
        y="125"
        width="50"
        height="50"
        rx="8"
        fill="url(#learnGlass)"
        stroke="#B36EE6"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />

      {/* Animated Circular Progress inside Panel */}
      <circle
        cx="35"
        cy="150"
        r="14"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.2"
        strokeWidth="3"
      />
      <circle
        cx="35"
        cy="150"
        r="14"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.9"
        strokeWidth="3"
        strokeDasharray="60"
        strokeDashoffset="20"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 35 150; 360 35 150"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="35" cy="150" r="5" fill="#8644F7" />
    </g>

    {/* Sparkles / Bintang Edukasi */}
    {[
      { x: 70, y: 30, scale: "0.8", dur: "2s" },
      { x: 120, y: 160, scale: "1", dur: "3s" },
      { x: 170, y: 110, scale: "0.6", dur: "2.5s" },
    ].map((star, i) => (
      <g
        key={i}
        transform={`translate(${star.x}, ${star.y}) scale(${star.scale})`}
      >
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur={star.dur}
          repeatCount="indefinite"
        />
        <path
          d="M0 -8 L1.5 -1.5 L8 0 L1.5 1.5 L0 8 L-1.5 1.5 L-8 0 L-1.5 -1.5 Z"
          fill="#FFFFFF"
        />
      </g>
    ))}
  </svg>
);
