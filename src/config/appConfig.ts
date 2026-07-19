import { AppConfig, SocialLink, FeatureCard } from "../types";

// ==========================================
// EASY CUSTOMIZATION CONSTANTS
// No magic values allowed in application logic.
// All values defined here for effortless config!
// ==========================================

export const APP_CONFIG: AppConfig = {
  name: "Crishfly",
  tagline: "Criadora de Conteúdo, Artista Digital & Fashion Enthusiast",
  contactEmail: "crishfly.design@gmail.com",
  pixKey: "crishfly.design@gmail.com",
  badges: ["Arte Digital", "Conteúdo", "Moda"],
  ui: {
    socialNetworksSection: "Redes Sociais",
    workSupportSection: "Trabalho & Apoio",
    portfolioBtnTitle: "Portfólio Completo",
    portfolioBtnBadge: "Ver",
    portfolioBtnSubtext: "Veja meus projetos selecionados e ilustrações",
    supportBtnTitle: "Apoiar Canal (Pix)",
    supportBtnSubtext: "Ajude a financiar futuros projetos artísticos e vídeos",
    membershipBtnTitle: "Club Exclusivo (Apoia.se)",
    membershipBtnSubtext: "Aulas de desenho, croquis de moda e arquivos PSD",
    quickGalleryTitle: "Galeria Rápida",
    quickGallerySubtext: "Toque nas artes para expandi-las",
    backToLinksBtn: "Voltar para os links",
    portfolioSectionBadge: "Portfólio",
    portfolioSectionTitle: "Trabalhos Selecionados",
    portfolioSectionSubtext: "Aqui estão alguns dos meus principais estudos artísticos e croquis experimentais. Meu processo criativo funde elementos futuristas e alta costura de forma minimalista.",
    illustrationsStat: "Ilustrações",
    sketchesStat: "Croquis",
    originalStat: "Autoral",
    partnershipTitle: "Interessado em Parcerias?",
    partnershipSubtext: "Estou disponível para comissões de arte, projetos de design de moda, campanhas de influência e parcerias estratégicas com marcas autorais.",
    partnershipBtn: "Entre em Contato",
    pixModalTitle: "Apoiar canal via Pix",
    pixModalSubtext: "Qualquer contribuição ajuda imensamente a manter a produção de conteúdo, vídeos e aquisição de novos materiais de arte!",
    pixKeyLabel: "Chave Pix (E-mail)",
    pixCopiedMessage: "Chave Pix Copiada!",
    membersModalTitle: "Membros Exclusivos",
    membersModalSubtext: "Faça parte da nossa comunidade exclusiva e receba recompensas todos os meses diretamente no seu e-mail!",
    membershipBenefits: [
      "Download de Croquis em PSD de alta resolução",
      "Pincéis exclusivos do Procreate/Photoshop",
      "Acesso antecipado aos vídeos do YouTube",
      "Sorteios de artes físicas originais"
    ],
    membershipBtnLabel: "Assinar Membresia Exclusiva",
    lightboxCommissionBtn: "Solicitar Encomenda",
    lightboxBackBtn: "Voltar",
    footerTitle: "CRISHFLY Studio",
    footerSubtext: "Todos os direitos reservados. Feito com",
    visualizeWorkBtn: "Visualizar Obra",
    artworkMedium: "Vetor / Digital",
    closeBtn: "Fechar"
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com",
    iconType: "instagram",
    subtext: "Bastidores, artes diárias e estética visual",
    borderColor: "hover:border-pink-500/20",
    accentColor: "#e1306c",
  },
  {
    id: "tiktok",
    name: "TikTok",
    url: "https://tiktok.com",
    iconType: "tiktok",
    subtext: "Dicas rápidas de moda e transições criativas",
    borderColor: "hover:border-cyan-500/20",
    accentColor: "#69c9d0",
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://youtube.com",
    iconType: "youtube",
    subtext: "Vlogs semanais, processos criativos e tutoriais",
    borderColor: "hover:border-red-500/20",
    accentColor: "#ff0000",
  },
  {
    id: "discord",
    name: "Discord",
    url: "https://discord.com",
    iconType: "discord",
    subtext: "Converse comigo e compartilhe suas criações",
    borderColor: "hover:border-indigo-500/20",
    accentColor: "#5865f2",
  },
  {
    id: "store",
    name: "Loja Online (Merch)",
    url: "https://merch-store.com",
    iconType: "store",
    subtext: "Minha linha exclusiva de roupas e impressões",
    borderColor: "hover:border-yellow-500/20",
    accentColor: "#ffd93d",
  },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "portfolio",
    title: "Portfólio Completo",
    subtext: "Veja meus projetos selecionados e ilustrações",
    badge: "Ver",
    iconType: "award",
    accentStripClass: "bg-brand-accent",
    actionType: "tab",
    actionTarget: "portfolio",
  },
  {
    id: "pix",
    title: "Apoiar Canal (Pix)",
    subtext: "Ajude a financiar futuros projetos artísticos e vídeos",
    iconType: "heart",
    accentStripClass: "bg-brand-purple",
    actionType: "modal",
    actionTarget: "pix",
  },
  {
    id: "membership",
    title: "Club Exclusivo (Apoia.se)",
    subtext: "Aulas de desenho, croquis de moda e arquivos PSD",
    iconType: "sparkles",
    accentStripClass: "bg-brand-accent",
    actionType: "modal",
    actionTarget: "membership",
  },
];
