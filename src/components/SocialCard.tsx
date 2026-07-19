import { ChevronRight, Instagram, Youtube, MessageSquare, ShoppingBag } from "lucide-react";
import { SocialLink } from "../types";
import Sigil from "./Sigil";

interface SocialCardProps {
  key?: string | number;
  link: SocialLink;
}

export default function SocialCard({ link }: SocialCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "instagram":
        return <Instagram className="w-4 h-4 text-brand-text" />;
      case "youtube":
        return <Youtube className="w-4 h-4 text-brand-text" />;
      case "discord":
        return <MessageSquare className="w-4 h-4 text-brand-text" />;
      case "store":
        return <ShoppingBag className="w-4 h-4 text-brand-text" />;
      case "tiktok":
        return (
          <svg className="w-4 h-4 fill-current text-brand-text" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.62 4.17 1.22 1.34 2.94 2.1 4.74 2.18v3.91c-1.89-.07-3.73-.78-5.17-2.03-.07-.06-.11-.12-.19-.21v6.94c.03 2.5-.94 4.96-2.69 6.7-2.22 2.21-5.54 3.02-8.54 2.15-3.32-.96-5.81-4.06-6.13-7.52-.45-4.83 3.19-9.19 8.01-9.64 1.15-.11 2.31.05 3.42.47v4.06c-1.07-.46-2.26-.54-3.39-.18-1.57.51-2.73 1.95-2.88 3.6-.19 2.08 1.36 3.95 3.43 4.16 2.08.21 3.97-1.25 4.25-3.32.06-.41.07-.83.07-1.24V.02z"/>
          </svg>
        );
      default:
        return <Instagram className="w-4 h-4 text-brand-text" />;
    }
  };

  return (
    <a 
      href={link.url} 
      target="_blank" 
      rel="noreferrer"
      className="goth-corners flex items-center gap-4 p-4 bg-brand-card border border-brand-border hover:border-brand-accent/50 rounded-xl hover:-translate-y-0.5 transition-all duration-200 group active:scale-[0.99] relative overflow-hidden pl-5"
    >
      {/* Thin elegant accent strip on the left side */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-border group-hover:bg-gradient-to-b group-hover:from-brand-purple group-hover:to-brand-accent transition-colors duration-200" />

      {/* Faint corner sigil watermark */}
      <Sigil className="pointer-events-none absolute -right-4 -top-4 w-16 h-16 text-brand-purple/[0.06] group-hover:text-brand-purple/[0.12] transition-colors duration-300" />

      <div className="w-9 h-9 rounded-lg bg-brand-secondary flex items-center justify-center shrink-0 border border-brand-border group-hover:bg-brand-card group-hover:border-brand-text/30 transition-colors duration-200 relative z-10">
        {getIcon(link.iconType)}
      </div>
      <div className="flex-1 min-w-0 text-left">
        <h3 className="font-pirata text-sm md:text-base tracking-wide text-brand-text">
          {link.name}
        </h3>
        <p className="text-[11px] text-brand-muted font-light truncate mt-0.5">{link.subtext}</p>
      </div>
      <ChevronRight className="w-4 h-4 text-brand-muted group-hover:text-brand-text group-hover:translate-x-0.5 transition-all shrink-0" />
    </a>
  );
}

