interface TholexLogoProps {
  size?: number;
  color?: string;
  className?: string;
}

export function TholexLogo({ 
  size = 40, 
  color = "#B7472A",
  className = "" 
}: TholexLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* T letter - left part */}
      <path
        d="M 10 10 L 45 10 L 45 22 L 33 22 L 33 90 L 22 90 L 22 22 L 10 22 Z"
        fill={color}
      />
      
      {/* H letter - right part, sharing the vertical bar with T */}
      <path
        d="M 55 10 L 66 10 L 66 45 L 78 45 L 78 10 L 89 10 L 89 90 L 78 90 L 78 57 L 66 57 L 66 90 L 55 90 Z"
        fill={color}
      />
    </svg>
  );
}

// Wordmark version with full "THOLEX" text
interface TholexWordmarkProps {
  height?: number;
  color?: string;
  className?: string;
}

export function TholexWordmark({ 
  height = 32, 
  color = "#B7472A",
  className = "" 
}: TholexWordmarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <TholexLogo size={height} color={color} />
      <span 
        className="tracking-[0.05em]"
        style={{ 
          fontSize: height * 0.6,
          fontWeight: 700,
          color: color,
          letterSpacing: '0.05em'
        }}
      >
        THOLEX
      </span>
    </div>
  );
}