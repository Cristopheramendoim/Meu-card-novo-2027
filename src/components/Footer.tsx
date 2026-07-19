import { Heart } from "lucide-react";
import { APP_CONFIG } from "../config/appConfig";

export default function Footer() {
  return (
    <footer className="text-center pt-14 pb-10 text-brand-muted text-[11px] tracking-wide space-y-3 mt-16">
      <div className="flex items-center justify-center gap-3 text-brand-purple/40 text-[10px] select-none" aria-hidden="true">
        <span>✦</span><span>◇</span><span>†</span><span>◇</span><span>✦</span>
      </div>
      <p className="font-pirata text-xl tracking-wide text-brand-text">{APP_CONFIG.ui.footerTitle}</p>
      <p className="font-light flex items-center justify-center gap-1">
        {APP_CONFIG.ui.footerSubtext}
        <Heart className="w-3 h-3 fill-brand-accent text-brand-accent" aria-label="amor" />
      </p>
    </footer>
  );
}


