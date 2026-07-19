export interface Artwork {
  id: number;
  title: string;
  category: string;
  description: string;
  gradient: string;
  image: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconType: "instagram" | "tiktok" | "youtube" | "discord" | "store";
  subtext: string;
  borderColor: string;
  accentColor: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  subtext: string;
  badge?: string;
  iconType: "award" | "heart" | "sparkles" | "link" | "shopping-bag";
  accentStripClass: string; // e.g. bg-brand-text, bg-[#121211], etc.
  actionType: "tab" | "modal" | "link";
  actionTarget: string; // "portfolio", "pix", "membership", or a web URL
}

export interface UIStrings {
  socialNetworksSection: string;
  workSupportSection: string;
  portfolioBtnTitle: string;
  portfolioBtnBadge: string;
  portfolioBtnSubtext: string;
  supportBtnTitle: string;
  supportBtnSubtext: string;
  membershipBtnTitle: string;
  membershipBtnSubtext: string;
  quickGalleryTitle: string;
  quickGallerySubtext: string;
  backToLinksBtn: string;
  portfolioSectionBadge: string;
  portfolioSectionTitle: string;
  portfolioSectionSubtext: string;
  illustrationsStat: string;
  sketchesStat: string;
  originalStat: string;
  partnershipTitle: string;
  partnershipSubtext: string;
  partnershipBtn: string;
  pixModalTitle: string;
  pixModalSubtext: string;
  pixKeyLabel: string;
  pixCopiedMessage: string;
  membersModalTitle: string;
  membersModalSubtext: string;
  membershipBenefits: string[];
  membershipBtnLabel: string;
  lightboxCommissionBtn: string;
  lightboxBackBtn: string;
  footerTitle: string;
  footerSubtext: string;
  visualizeWorkBtn: string;
  artworkMedium: string;
  closeBtn: string;
}

export interface AppConfig {
  name: string;
  tagline: string;
  contactEmail: string;
  pixKey: string;
  badges: string[];
  ui: UIStrings;
}

