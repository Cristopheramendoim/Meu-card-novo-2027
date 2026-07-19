import { X } from "lucide-react";
import { ReactNode } from "react";
import { APP_CONFIG } from "../config/appConfig";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  borderColorClass?: string;
  shadowColorClass?: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  borderColorClass = "border-brand-border",
  shadowColorClass = "shadow-md",
  icon,
  children
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
      {/* Backdrop with elegant background blur */}
      <button 
        onClick={onClose}
        className="absolute inset-0 bg-brand-text/40 backdrop-blur-sm cursor-default"
      />
      
      {/* Modal Card Layout */}
      <div className={`goth-corners relative bg-brand-card border ${borderColorClass} rounded-2xl p-6 w-full max-w-sm text-center space-y-5 animate-fade-in ${shadowColorClass}`}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-brand-text p-1.5 hover:bg-brand-secondary rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Decorative Icon Ring */}
        <div className="mx-auto w-10 h-10 rounded-lg bg-brand-secondary flex items-center justify-center border border-brand-accent/30 text-brand-accent">
          {icon}
        </div>

        <div className="space-y-1.5">
          <h3 className="font-gothic text-2xl text-brand-text glow-pink">{title}</h3>
          {children}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-purple to-brand-accent hover:opacity-90 text-xs font-cinzel font-extrabold text-brand-bg transition-all active:scale-[0.98]"
        >
          {APP_CONFIG.ui.closeBtn}
        </button>
      </div>
    </div>
  );
}

