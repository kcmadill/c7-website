/**
 * C7 geometric logo mark.
 * C in silver/gray, 7 in burnt orange — matches the brand palette.
 * Pure SVG, no image file needed, scales perfectly at any size.
 */
export default function Logo({
  className = "h-8 w-auto",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 92 40"
      className={className}
      aria-label="C7"
      role="img"
    >
      {/*
        C shape — bold rectangular C
        Left wall: 9px wide
        Top/bottom arms: 8px tall
        Opening: center-right, y 8–32
      */}
      <path
        d="M4,0 L36,0 L36,8 L9,8 L9,32 L36,32 L36,40 L4,40 Q0,40 0,36 L0,4 Q0,0 4,0 Z"
        fill="#C0C8D4"
      />

      {/*
        7 shape — bold geometric 7
        Top bar: full width (44–88), 12px tall
        Diagonal branches from the FAR RIGHT of the bar (x=88),
        sweeping 36px left over 28px height (~52° from vertical).
        Left overhang = 32px (73% of bar width) — unmistakably a 7.
      */}
      <path
        d="M44,0 L88,0 L88,12 L52,40 L40,40 L76,12 L44,12 Z"
        fill="#E05A00"
      />
    </svg>
  );
}
