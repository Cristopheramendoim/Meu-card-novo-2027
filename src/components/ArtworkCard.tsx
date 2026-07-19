import { ArrowRight } from "lucide-react";
import { Artwork } from "../types";
import { APP_CONFIG } from "../config/appConfig";
import Sigil from "./Sigil";

interface ArtworkCardProps {
  key?: string | number;
  artwork: Artwork;
  index: number;
  onSelect: (artwork: Artwork) => void;
}

export default function ArtworkCard({ artwork, index, onSelect }: ArtworkCardProps) {
  return (
    <div className="goth-corners bg-brand-card border border-brand-border hover:border-brand-accent/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col md:flex-row group shadow-sm hover:shadow-brand-accent/10 relative">
      {/* Left side preview, clipped into a pointed banner shape */}
      <div className="clip-banner w-full md:w-48 aspect-video md:aspect-square shrink-0 relative overflow-hidden bg-brand-secondary border-b md:border-b-0 md:border-r border-brand-border">
        <div className={`w-full h-full bg-gradient-to-tr ${artwork.gradient}`}>
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Custom index indexation badge */}
        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-wider font-extrabold font-cinzel bg-brand-accent text-brand-bg px-2 py-0.5 rounded">
          0{index + 1}
        </span>
      </div>

      {/* Corner sigil watermark on the description panel */}
      <Sigil className="pointer-events-none absolute -right-5 -bottom-5 w-28 h-28 text-brand-purple/[0.06] group-hover:text-brand-purple/[0.1] transition-colors duration-300" />

      {/* Description block */}
      <div className="relative p-5 md:p-6 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-brand-accent font-cinzel uppercase tracking-widest font-bold">
              {artwork.category}
            </span>
            <span className="text-[10px] text-brand-muted font-mono">2026</span>
          </div>
          <h3 className="font-pirata text-xl text-brand-text">
            {artwork.title}
          </h3>
          <p className="text-xs text-brand-muted font-light leading-relaxed">
            {artwork.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-brand-border">
          <button 
            onClick={() => onSelect(artwork)}
            className="text-xs text-brand-text hover:text-brand-muted font-cinzel font-bold flex items-center gap-1 group/btn cursor-pointer"
          >
            {APP_CONFIG.ui.visualizeWorkBtn}
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
          <span className="text-[10px] text-brand-muted font-mono">{APP_CONFIG.ui.artworkMedium}</span>
        </div>
      </div>
    </div>
  );
}

