export function BlobDivider({
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
          d="M0 120V31.6C115.2 69.2 277.2 46.4 396 31.6C514.8 16.8 594 10.4 720 10.4C846 10.4 925.2 16.8 1044 31.6C1162.8 46.4 1324.8 69.2 1440 31.6V120H0Z"
          fill={color}
          fillOpacity="0.2"
        />
      </svg>
    </div>
  )
}

