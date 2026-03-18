import { forwardRef, RefObject } from "react";

interface SvgBadgeStoresProps {
  className?: string;
  countRef?: RefObject<SVGTSpanElement | null>;
}

export const SvgBadgeStores = forwardRef<SVGSVGElement, SvgBadgeStoresProps>(
  ({ className = "", countRef }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 168 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${className}`}
        style={{ opacity: 0.95 }}
        aria-hidden="true"
        focusable="false"
      >
        <g>
          <path
            d="M84 -3.67176e-06C130.392 -1.6439e-06 168 37.6081 168 84C168 130.392 130.392 168 84 168L-7.34351e-06 168L-3.67176e-06 84C-1.6439e-06 37.6081 37.6081 -5.69961e-06 84 -3.67176e-06Z"
            fill="white"
          />
          <circle cx="84" cy="84" r="48" fill="#660DFF" />
          <text
            fill="white"
            xmlSpace="preserve"
            fontFamily="sans-serif"
            fontSize="32"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="-0.04em"
            style={{ whiteSpace: "pre" }}
          >
            <tspan ref={countRef as any} x="84" y="87.08">
              000+
            </tspan>
          </text>
          <text
            fill="white"
            xmlSpace="preserve"
            fontFamily="sans-serif"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="0.05em"
            style={{ whiteSpace: "pre" }}
          >
            <tspan x="84" y="105.08">
              TEMPAT
            </tspan>
          </text>
        </g>
      </svg>
    );
  },
);

SvgBadgeStores.displayName = "SvgBadgeStores";
