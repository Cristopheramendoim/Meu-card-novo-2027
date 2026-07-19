interface SigilProps {
  className?: string;
}

// Ornate mandala-star motif echoing the occult/goth moodboard's linework.
export default function Sigil({ className = "" }: SigilProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M50 4 L58 38 L92 30 L62 50 L92 70 L58 62 L50 96 L42 62 L8 70 L38 50 L8 30 L42 38 Z" />
      <circle cx="50" cy="50" r="13" />
      <circle cx="50" cy="50" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}
