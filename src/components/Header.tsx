import { APP_CONFIG } from "../config/appConfig";
import Sigil from "./Sigil";
import profilePhoto from "../assets/perfil/profile.webp";

export default function Header() {
  return (
    <header className="relative flex flex-col items-center text-center space-y-5">
      {/* Ambient rotating mandala watermark behind the whole header */}
      <Sigil className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] text-brand-purple/[0.07] animate-spin-slow" />

      {/* Ornate Sigil Portrait Frame */}
      <div className="relative group">
        <div
          className="absolute -inset-2.5 rounded-full opacity-70 blur-md transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "conic-gradient(from 90deg, var(--accent-purple), var(--accent-refined), var(--accent-purple))" }}
        />
        <div className="relative w-[110px] h-[110px] md:w-[120px] md:h-[120px] rounded-full p-[1.5px] bg-gradient-to-br from-brand-purple via-brand-accent to-brand-purple">
          <div className="w-full h-full rounded-full bg-brand-secondary border border-brand-border relative overflow-hidden">
            <img
              src={profilePhoto}
              alt={APP_CONFIG.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Corner sigils flanking the portrait */}
        <Sigil className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-accent/50" />
        <Sigil className="absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-purple/50" />
      </div>

      {/* Blackletter Title */}
      <div className="relative space-y-2 max-w-sm">
        <h1 className="font-gothic text-5xl md:text-6xl text-brand-text glow-pink leading-tight">
          {APP_CONFIG.name}
        </h1>
        <p className="text-xs md:text-sm text-brand-muted font-normal leading-relaxed">
          {APP_CONFIG.tagline}
        </p>
      </div>

      {/* Sticker-style Metadata Row */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-1">
        {APP_CONFIG.badges.map((badge) => (
          <span
            key={badge}
            className="text-[9px] uppercase font-mono tracking-widest font-bold text-brand-purple border border-brand-purple/40 bg-brand-purple/10 rounded-full px-2.5 py-1"
          >
            {badge}
          </span>
        ))}
      </div>
    </header>
  );
}


