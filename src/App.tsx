import { useState } from "react";
import { 
  Palette, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  ArrowLeft, 
  Copy, 
  Check,
  Send,
  Heart,
  Award,
  Zap,
  ShoppingBag
} from "lucide-react";

// Components
import Header from "./components/Header";
import SocialCard from "./components/SocialCard";
import ArtworkCard from "./components/ArtworkCard";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Sigil from "./components/Sigil";
import ShaderBackground from "./components/ShaderBackground";

// Configurations & Domain Data
import { APP_CONFIG, SOCIAL_LINKS, FEATURE_CARDS } from "./config/appConfig";
import { PORTFOLIO_ARTWORKS } from "./data/artworks";
import { Artwork } from "./types";

export default function App() {
  // Navigation & Modal States
  const [activeTab, setActiveTab] = useState<"links" | "portfolio">("links");
  const [drawingsOpen, setDrawingsOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [pixModalOpen, setPixModalOpen] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [exclusiveModalOpen, setExclusiveModalOpen] = useState(false);

  // Copy Pix Key Logic (Adaptive state interaction)
  const handleCopyPix = () => {
    navigator.clipboard.writeText(APP_CONFIG.pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="min-h-screen text-brand-text font-sans antialiased relative overflow-x-hidden selection:bg-brand-accent selection:text-brand-bg">

      {/* Animated WebGL "Waves" flow shader, fixed behind all content */}
      <ShaderBackground />

      {/* Decorative Top Border - Goth-Cute Sigil Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-purple via-brand-accent to-brand-purple" />

      <main className="relative z-10 w-full max-w-xl mx-auto px-5 py-12 md:py-20 transition-all duration-300">
        
        {/* ======================================================== */}
        {/* VIEW 1: LINKS & BIO                                      */}
        {/* ======================================================== */}
        {activeTab === "links" && (
          <div className="space-y-8 animate-fade-in">
            {/* Header Component */}
            <Header />

            {/* Content Lists */}
            <div className="space-y-3.5">
              <div className="font-cinzel text-[10px] uppercase font-extrabold text-brand-accent tracking-[0.2em] flex items-center gap-2">
                <span className="text-brand-purple">✦</span>
                <span>{APP_CONFIG.ui.socialNetworksSection}</span>
                <span className="gothic-rule" />
              </div>

              {/* Social networks generated list */}
              {SOCIAL_LINKS.map((link) => (
                <SocialCard key={link.id} link={link} />
              ))}

              <div className="font-cinzel text-[10px] uppercase font-extrabold text-brand-accent tracking-[0.2em] pt-4 flex items-center gap-2">
                <span className="text-brand-purple">✦</span>
                <span>{APP_CONFIG.ui.workSupportSection}</span>
                <span className="gothic-rule" />
              </div>

              {/* Feature cards generated dynamically */}
              {FEATURE_CARDS.map((card) => {
                const getFeatureIcon = (type: string) => {
                  switch (type) {
                    case "award":
                      return <Award className="w-4 h-4" />;
                    case "heart":
                      return <Heart className="w-4 h-4 fill-current" />;
                    case "sparkles":
                      return <Sparkles className="w-4 h-4" />;
                    case "shopping-bag":
                      return <ShoppingBag className="w-4 h-4" />;
                    default:
                      return <Send className="w-4 h-4" />;
                  }
                };

                const handleCardClick = () => {
                  if (card.actionType === "tab") {
                    setActiveTab(card.actionTarget);
                  } else if (card.actionType === "modal") {
                    if (card.actionTarget === "pix") {
                      setPixModalOpen(true);
                    } else if (card.actionTarget === "membership") {
                      setExclusiveModalOpen(true);
                    }
                  } else if (card.actionType === "link") {
                    window.open(card.actionTarget, "_blank", "noopener,noreferrer");
                  }
                };

                return (
                  <button 
                    key={card.id}
                    onClick={handleCardClick}
                    className="goth-corners w-full flex items-center gap-4 p-4 bg-brand-card border border-brand-border hover:border-brand-accent/50 rounded-xl hover:-translate-y-0.5 transition-all duration-200 group active:scale-[0.99] relative overflow-hidden pl-5 text-left cursor-pointer"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${card.accentStripClass || 'bg-brand-border'}`} />
                    <Sigil className="pointer-events-none absolute -right-4 -top-4 w-16 h-16 text-brand-purple/[0.06] group-hover:text-brand-purple/[0.12] transition-colors duration-300" />
                    <div className="w-9 h-9 rounded-lg bg-brand-secondary flex items-center justify-center text-brand-text shrink-0 border border-brand-border group-hover:bg-brand-card group-hover:border-brand-text/30 transition-colors duration-200 relative z-10">
                      {getFeatureIcon(card.iconType)}
                    </div>
                    <div className="flex-1 min-w-0 relative z-10">
                      <h3 className="font-pirata text-sm md:text-base tracking-wide text-brand-text flex items-center gap-1.5">
                        {card.title}
                        {card.badge && (
                          <span className="text-[9px] bg-brand-accent text-brand-bg px-1.5 py-0.5 rounded font-cinzel uppercase tracking-wider font-extrabold">
                            {card.badge}
                          </span>
                        )}
                      </h3>
                      <p className="text-[11px] text-brand-muted font-light truncate mt-0.5">{card.subtext}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-brand-muted group-hover:text-brand-text group-hover:translate-x-0.5 transition-transform shrink-0 relative z-10" />
                  </button>
                );
              })}
            </div>

            {/* Quick Draw / Gallery Trigger Panel */}
            <div className="space-y-4 pt-2">
              <button 
                onClick={() => setDrawingsOpen(!drawingsOpen)}
                className={`goth-corners w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                  drawingsOpen
                    ? "bg-brand-secondary border-brand-accent"
                    : "bg-brand-card border-brand-border hover:border-brand-accent/50"
                }`}
              >
                <Sigil className="pointer-events-none absolute -right-6 -bottom-6 w-24 h-24 text-brand-purple/[0.06]" />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-text">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-pirata text-sm md:text-base tracking-wide text-brand-text">{APP_CONFIG.ui.quickGalleryTitle}</h3>
                    <p className="text-[11px] text-brand-muted font-light mt-0.5">{APP_CONFIG.ui.quickGallerySubtext}</p>
                  </div>
                </div>

                <span className={`relative z-10 text-xs px-2 py-1 rounded bg-brand-secondary text-brand-text border border-brand-border transition-all duration-300 flex items-center gap-1 ${
                  drawingsOpen ? "rotate-180 bg-brand-accent text-brand-bg border-transparent" : ""
                }`}>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </button>

              {/* Instant fluid rendering grid */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                drawingsOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
              }`}>
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  {PORTFOLIO_ARTWORKS.map((art) => (
                    <button
                      key={art.id}
                      onClick={() => setSelectedArtwork(art)}
                      className="aspect-square rounded-xl overflow-hidden bg-brand-secondary border border-brand-border hover:border-brand-text relative group cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-text"
                    >
                      <div className={`w-full h-full bg-gradient-to-tr ${art.gradient} relative transition-opacity duration-200`}>
                        <img
                          src={art.image}
                          alt={art.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                        />

                        <div className="absolute inset-0 bg-brand-text/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-2 text-center">
                          <p className="font-cinzel text-[9px] font-extrabold text-brand-card uppercase tracking-wider truncate w-full">{art.title}</p>
                          <p className="text-[8px] text-brand-card/70 truncate w-full mt-0.5">{art.category}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW 2: PORTFOLIO SHOWCASE                               */}
        {/* ======================================================== */}
        {activeTab === "portfolio" && (
          <div className="space-y-8 animate-fade-in">
            {/* Back transition button */}
            <button 
              onClick={() => setActiveTab("links")}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-card border border-brand-border hover:border-brand-text rounded-full text-xs font-cinzel font-extrabold text-brand-text transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> {APP_CONFIG.ui.backToLinksBtn}
            </button>

            {/* Intro layout */}
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <span className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 bg-brand-accent text-brand-bg rounded-full font-extrabold font-cinzel">{APP_CONFIG.ui.portfolioSectionBadge}</span>
                <span className="gothic-rule" />
              </div>
              <h2 className="font-gothic text-4xl text-brand-text glow-pink">
                {APP_CONFIG.ui.portfolioSectionTitle}
              </h2>
              <p className="text-xs text-brand-muted font-light max-w-lg leading-relaxed">
                {APP_CONFIG.ui.portfolioSectionSubtext}
              </p>
            </div>

            {/* List of cards */}
            <div className="space-y-6 text-left">
              {PORTFOLIO_ARTWORKS.slice(0, 4).map((art, index) => (
                <ArtworkCard 
                  key={art.id} 
                  artwork={art} 
                  index={index} 
                  onSelect={setSelectedArtwork} 
                />
              ))}
            </div>

            {/* Aesthetic Stats block */}
            <div className="grid grid-cols-3 gap-3">
              <div className="goth-corners bg-brand-card p-4 border border-brand-border rounded-xl text-center space-y-1">
                <p className="font-cinzel text-lg font-extrabold text-brand-accent">120+</p>
                <p className="text-[9px] text-brand-muted uppercase tracking-wider font-mono">{APP_CONFIG.ui.illustrationsStat}</p>
              </div>
              <div className="goth-corners bg-brand-card p-4 border border-brand-border rounded-xl text-center space-y-1">
                <p className="font-cinzel text-lg font-extrabold text-brand-purple">30+</p>
                <p className="text-[9px] text-brand-muted uppercase tracking-wider font-mono">{APP_CONFIG.ui.sketchesStat}</p>
              </div>
              <div className="goth-corners bg-brand-card p-4 border border-brand-border rounded-xl text-center space-y-1">
                <p className="font-cinzel text-lg font-extrabold text-brand-accent">100%</p>
                <p className="text-[9px] text-brand-muted uppercase tracking-wider font-mono">{APP_CONFIG.ui.originalStat}</p>
              </div>
            </div>

            {/* Direct contact footer collaboration banner */}
            <div className="p-6 rounded-xl space-y-4 text-center text-brand-bg relative overflow-hidden bg-gradient-to-br from-brand-purple to-brand-accent">
              <div className="inline-flex p-2.5 bg-black/15 text-brand-bg rounded-lg">
                <Send className="w-4 h-4" />
              </div>
              <div className="space-y-1 max-w-sm mx-auto">
                <h3 className="font-pirata text-base tracking-wide text-brand-bg">{APP_CONFIG.ui.partnershipTitle}</h3>
                <p className="text-[11px] text-brand-bg/75 font-light leading-relaxed">
                  {APP_CONFIG.ui.partnershipSubtext}
                </p>
              </div>
              <div>
                <a
                  href={`mailto:${APP_CONFIG.contactEmail}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-bg text-brand-accent hover:bg-brand-secondary rounded-lg font-cinzel font-extrabold text-xs active:scale-95 transition-all shadow-md"
                >
                  {APP_CONFIG.ui.partnershipBtn} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Modularized Footer */}
        <Footer />

      </main>

      {/* ======================================================== */}
      {/* MODAL WINDOWS & LIGHTBOX                                 */}
      {/* ======================================================== */}
      
      {/* Pix modal supporting helper */}
      <Modal 
        isOpen={pixModalOpen} 
        onClose={() => setPixModalOpen(false)}
        title={APP_CONFIG.ui.pixModalTitle}
        borderColorClass="border-brand-border"
        shadowColorClass="shadow-md"
        icon={<Zap className="w-5 h-5 text-brand-text" />}
      >
        <p className="text-xs text-brand-muted font-light max-w-xs mx-auto leading-relaxed">
          {APP_CONFIG.ui.pixModalSubtext}
        </p>

        <div className="p-3 bg-brand-secondary border border-brand-border rounded-lg flex items-center justify-between gap-3 text-left">
          <div className="min-w-0">
            <span className="text-[9px] uppercase text-brand-muted tracking-wider font-mono block">{APP_CONFIG.ui.pixKeyLabel}</span>
            <p className="text-xs text-brand-text font-mono font-medium truncate">{APP_CONFIG.pixKey}</p>
          </div>
          
          <button 
            onClick={handleCopyPix}
            className={`p-2 rounded-md shrink-0 transition-all cursor-pointer border ${
              copiedPix 
                ? "bg-brand-text text-brand-card border-transparent" 
                : "bg-brand-card hover:bg-brand-secondary text-brand-text border-brand-border"
            }`}
            title="Copiar chave"
          >
            {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {copiedPix && (
          <p className="text-[10px] text-brand-text font-extrabold font-cinzel uppercase tracking-wider pt-1 animate-pulse">
            {APP_CONFIG.ui.pixCopiedMessage}
          </p>
        )}
      </Modal>

      {/* Exclusive membership modal helper */}
      <Modal 
        isOpen={exclusiveModalOpen} 
        onClose={() => setExclusiveModalOpen(false)}
        title={APP_CONFIG.ui.membersModalTitle}
        borderColorClass="border-brand-border"
        shadowColorClass="shadow-md"
        icon={<Sparkles className="w-5 h-5 text-brand-text" />}
      >
        <p className="text-xs text-brand-muted font-light leading-relaxed max-w-xs mx-auto">
          {APP_CONFIG.ui.membersModalSubtext}
        </p>

        <ul className="text-left bg-brand-secondary p-4 border border-brand-border rounded-lg space-y-2.5 text-xs text-brand-text font-light">
          {APP_CONFIG.ui.membershipBenefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2">
          <a
            href="https://apoia.se"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-purple to-brand-accent hover:opacity-90 text-xs font-cinzel font-extrabold text-brand-bg block transition-all shadow-md text-center"
          >
            {APP_CONFIG.ui.membershipBtnLabel}
          </a>
        </div>
      </Modal>

      {/* Lightbox details viewer */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 animate-fade-in">
          <button 
            onClick={() => setSelectedArtwork(null)}
            className="absolute inset-0 bg-brand-text/60 backdrop-blur-md cursor-default"
          />

          <div className="goth-corners relative bg-brand-card border border-brand-border rounded-2xl overflow-hidden max-w-sm w-full p-6 space-y-5 shadow-lg">
            <button 
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-4 right-4 text-brand-muted hover:text-brand-text p-1.5 hover:bg-brand-secondary rounded-full transition-colors z-10 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Vector frame preview */}
            <div className="aspect-square rounded-xl overflow-hidden bg-brand-secondary relative flex items-center justify-center border border-brand-border">
              <div className={`absolute inset-0 bg-gradient-to-tr ${selectedArtwork.gradient}`} />
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                className="w-full h-full object-cover relative z-10"
              />
            </div>

            {/* Interactive context */}
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-brand-accent tracking-wider font-cinzel">
                  {selectedArtwork.category}
                </span>
                <span className="text-[10px] text-brand-muted font-mono">Obra #0{selectedArtwork.id}</span>
              </div>
              <h3 className="font-gothic text-2xl text-brand-text glow-pink">
                {selectedArtwork.title}
              </h3>
              <p className="text-xs text-brand-muted font-light leading-relaxed">
                {selectedArtwork.description}
              </p>
            </div>

            <div className="flex gap-2.5 pt-1">
              <a
                href={`mailto:${APP_CONFIG.contactEmail}?subject=Interesse em Comissão`}
                className="flex-1 py-3 bg-gradient-to-r from-brand-purple to-brand-accent hover:opacity-90 text-brand-bg border border-transparent rounded-lg text-xs font-cinzel font-extrabold text-center transition-all active:scale-[0.98] shadow-sm"
              >
                {APP_CONFIG.ui.lightboxCommissionBtn}
              </a>
              <button 
                onClick={() => setSelectedArtwork(null)}
                className="px-5 py-3 bg-brand-secondary hover:bg-brand-border text-xs font-cinzel font-extrabold text-brand-text rounded-lg transition-all cursor-pointer border border-brand-border"
              >
                {APP_CONFIG.ui.lightboxBackBtn}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

