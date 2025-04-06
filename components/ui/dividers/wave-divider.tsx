export function WaveDivider({
  className = "",
  inverted = false,
  color = "currentColor",
}: {
  className?: string
  inverted?: boolean
  color?: string
}) {
  return (
    <div className={`w-full h-24 relative overflow-hidden ${className}`}>
      <svg
        className={`absolute w-full h-full ${inverted ? "rotate-180" : ""}`}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 26.625C960 35.5 1056 71 1152 80.125C1248 89 1344 71 1392 62.125L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
          fill={color}
          fillOpacity="0.1"
        />
        <path
          d="M0 40L48 44.375C96 48.75 192 57.5 288 57.5C384 57.5 480 48.75 576 48.75C672 48.75 768 57.5 864 62C960 66.5 1056 66.5 1152 57.75C1248 49 1344 31 1392 22L1440 13V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V40Z"
          fill={color}
          fillOpacity="0.15"
        />
        <path
          d="M0 80L48 75.5C96 71 192 62 288 57.5C384 53 480 53 576 62C672 71 768 89 864 93.5C960 98 1056 89 1152 80C1248 71 1344 62 1392 57.5L1440 53V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V80Z"
          fill={color}
          fillOpacity="0.2"
        />
      </svg>
    </div>
  )
}

