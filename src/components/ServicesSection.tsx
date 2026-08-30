import React from 'react';
import {
  Building2,
  FileCheck2,
  BarChart3,
  ShieldCheck,
  CreditCard,
  RefreshCw,
  FolderArchive,
  KeyRound,
  Clapperboard,
  Video,
  Bot,
  Palette,
  PenTool,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  openCategory: 'mei' | 'video' | 'art' | null;
  onToggleCategory: (category: 'mei' | 'video' | 'art') => void;
  onServiceInquiry: (service: { title: string; price: string; category: string; desc?: string }) => void;
  discordTag: string;
  discordDisplayName: string;
  discordLink: string;
  copiedDiscord: boolean;
  onCopyDiscordTag: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  openCategory,
  onToggleCategory,
  onServiceInquiry,
  discordTag,
  discordDisplayName,
  discordLink,
  copiedDiscord,
  onCopyDiscordTag,
}) => {
  return (
    <div className="w-full">
      {/* SEÇÃO PRESTAÇÃO DE SERVIÇOS */}
      <div className="section-label">Prestação de Serviços</div>

      <div className="space-y-4 mb-6">
        {/* 1. CARD DESPACHANTE DIGITAL (MEI) - AZUL */}
        <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black backdrop-blur-md shadow-2xl hover:border-blue-500/60 transition-all">
          <div 
            onClick={() => onToggleCategory('mei')}
            className="flex items-center justify-between p-4.5 sm:p-5 cursor-pointer hover:bg-blue-950/20 transition-colors"
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-blue-950/60 border border-blue-500/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.25)]">
                <Building2 className="w-7 h-7 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-['Syne'] font-bold text-white text-base sm:text-xl leading-tight">
                  Despachante Digital
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-snug break-words font-sans">
                  Abertura de MEI · Declaração Anual · Regularização de Débitos
                </p>
              </div>
            </div>
            <div className={`w-9 h-9 rounded-full bg-blue-950/80 border border-blue-500/40 flex items-center justify-center transition-transform duration-300 ml-3 flex-shrink-0 ${openCategory === 'mei' ? 'rotate-90 bg-blue-600 border-blue-400' : ''}`}>
              <ChevronRight className={`w-5 h-5 transition-colors ${openCategory === 'mei' ? 'text-white' : 'text-blue-400'}`} />
            </div>
          </div>

          {openCategory === 'mei' && (
            <div className="p-4 sm:p-6 pt-0 border-t border-zinc-800 animate-fadeIn space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 pt-3">
                {[
                  {
                    title: "Abertura de MEI",
                    price: "R$ 100,00",
                    desc: "Formalização completa com CNPJ ativo, CCMEI, enquadramento de CNAEs e alvarás.",
                    badge: "Essencial",
                    category: "Despachante Digital MEI",
                    iconNode: <FileCheck2 className="w-5 h-5 text-blue-400" />
                  },
                  {
                    title: "Declaração Anual",
                    price: "R$ 60,00",
                    desc: "Elaboração, cálculo e transmissão do faturamento anual (DASN-SIMEI) à Receita.",
                    badge: "Obrigatório",
                    category: "Despachante Digital MEI",
                    iconNode: <BarChart3 className="w-5 h-5 text-blue-400" />
                  },
                  {
                    title: "Regularização",
                    price: "R$ 184,00",
                    desc: "Auditoria fiscal, levantamento de pendências, cálculo de DAS em atraso e regularização.",
                    badge: "Mais Procurado",
                    category: "Despachante Digital MEI",
                    iconNode: <ShieldCheck className="w-5 h-5 text-blue-400" />
                  },
                  {
                    title: "Parcelamento de Dívida",
                    price: "R$ 148,00",
                    desc: "Negociação de débitos tributários com a Receita/PGFN e emissão em até 60 parcelas.",
                    badge: "Facilitado",
                    category: "Despachante Digital MEI",
                    iconNode: <CreditCard className="w-5 h-5 text-blue-400" />
                  },
                  {
                    title: "Alteração Cadastral",
                    price: "R$ 75,00",
                    desc: "Atualização de dados, atividades econômicas (CNAEs), endereço ou nome fantasia.",
                    badge: "Rápido",
                    category: "Despachante Digital MEI",
                    iconNode: <RefreshCw className="w-5 h-5 text-blue-400" />
                  },
                  {
                    title: "Baixa (Encerramento do MEI)",
                    price: "R$ 169,59",
                    desc: "Extinção definitiva do CNPJ MEI com certidão de baixa e declaração de extinção.",
                    badge: "Completo",
                    category: "Despachante Digital MEI",
                    iconNode: <FolderArchive className="w-5 h-5 text-blue-400" />
                  },
                  {
                    title: "Recuperação Gov.br / Certidões",
                    price: "R$ 50,00",
                    desc: "Acesso à conta Gov.br (Prata/Ouro) e emissão de Certidão Negativa de Débitos.",
                    badge: "Express",
                    category: "Despachante Digital MEI",
                    iconNode: <KeyRound className="w-5 h-5 text-blue-400" />
                  }
                ].map((s, idx) => (
                  <div 
                    key={idx}
                    onClick={() => onServiceInquiry({ title: s.title, price: s.price, category: s.category, desc: s.desc })}
                    className="p-4 sm:p-5 rounded-2xl border border-zinc-800 bg-black hover:border-blue-500/70 transition-all cursor-pointer flex flex-col justify-between group shadow-xl hover:scale-[1.02] active:scale-98"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/40 flex items-center justify-center shadow-md group-hover:border-blue-400 transition-colors">
                          {s.iconNode}
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/40 font-sans">
                          {s.badge}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-white text-base sm:text-lg font-['Syne'] leading-snug group-hover:text-blue-300 transition-colors">
                        {s.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-white/90 mt-2 leading-relaxed font-sans font-normal">
                        {s.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-col gap-2.5">
                      <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.35)] font-sans tracking-tight">
                        {s.price}
                      </div>
                      
                      <button className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all cursor-pointer font-sans">
                        Contratar Serviço
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* BANNER CENTRALIZADO DO DISCORD & NEGOCIAÇÃO */}
              <div className="mt-4 p-5 sm:p-6 rounded-2xl border border-blue-500/30 bg-black flex flex-col items-center justify-center text-center shadow-xl">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#5865F2]/25 border border-[#5865F2]/60 flex items-center justify-center mx-auto mb-3 text-white shadow-[0_0_20px_rgba(88,101,242,0.4)]">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg font-['Syne']">
                  Quer fechar um pedido ou tirar dúvidas?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1.5 max-w-md mx-auto leading-relaxed font-sans">
                  Fale direto comigo no Discord: abra o privado com <strong className="text-blue-400">@{discordTag}</strong> ({discordDisplayName}) para atendimento imediato e pacotes sob medida!
                </p>

                <div className="w-full max-w-md mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={onCopyDiscordTag}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer font-sans"
                  >
                    {copiedDiscord ? '✓ Copiado @walgny' : '📋 Copiar @walgny'}
                  </button>
                  <a
                    href={discordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(59,130,246,0.4)] font-sans"
                  >
                    <span>Entrar no Discord Oficial</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 2. CARD EDIÇÃO DE VÍDEO VSL - AMARELO */}
        <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black backdrop-blur-md shadow-2xl hover:border-yellow-500/60 transition-all">
          <div 
            onClick={() => onToggleCategory('video')}
            className="flex items-center justify-between p-4.5 sm:p-5 cursor-pointer hover:bg-amber-950/20 transition-colors"
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-amber-950/60 border border-yellow-500/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(234,179,8,0.25)]">
                <Clapperboard className="w-7 h-7 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-['Syne'] font-bold text-white text-base sm:text-xl leading-tight">
                  Edição de Vídeo VSL
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-snug break-words font-sans">
                  Edição profissional para vendas, anúncios e conteúdo
                </p>
              </div>
            </div>
            <div className={`w-9 h-9 rounded-full bg-amber-950/80 border border-yellow-500/40 flex items-center justify-center transition-transform duration-300 ml-3 flex-shrink-0 ${openCategory === 'video' ? 'rotate-90 bg-yellow-500 border-yellow-400' : ''}`}>
              <ChevronRight className={`w-5 h-5 transition-colors ${openCategory === 'video' ? 'text-black' : 'text-yellow-400'}`} />
            </div>
          </div>

          {openCategory === 'video' && (
            <div className="p-4 sm:p-6 pt-0 border-t border-zinc-800 animate-fadeIn space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                {[
                  {
                    title: "Edição de Vídeo Fly & VSL",
                    price: "A negociar",
                    priceNote: "Conforme duração e estilo",
                    desc: "Edição profissional para VSLs, Criativos de Anúncios e Vídeos Fly com foco em retenção máxima e sound design imersivo.",
                    badge: "Direct Response",
                    category: "Edição de Vídeo & IA",
                    iconNode: <Video className="w-5 h-5 text-yellow-400" />
                  },
                  {
                    title: "Anúncios com Modelos IA",
                    price: "A negociar",
                    priceNote: "Orçamento sob demanda",
                    desc: "Avatares e atores realistas gerados por IA, clonagem de voz e roteiros persuasivos para tráfego pago.",
                    badge: "Tecnologia IA",
                    category: "Edição de Vídeo & IA",
                    iconNode: <Bot className="w-5 h-5 text-yellow-400" />
                  }
                ].map((s, idx) => (
                  <div 
                    key={idx}
                    onClick={() => onServiceInquiry({ title: s.title, price: s.price, category: s.category, desc: s.desc })}
                    className="p-4 sm:p-5 rounded-2xl border border-zinc-800 bg-black hover:border-yellow-500/70 transition-all cursor-pointer flex flex-col justify-between group shadow-xl hover:scale-[1.02] active:scale-98"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-yellow-500/40 flex items-center justify-center shadow-md group-hover:border-yellow-400 transition-colors">
                          {s.iconNode}
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-950/80 text-yellow-300 border border-yellow-500/40 font-sans">
                          {s.badge}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-white text-base sm:text-lg font-['Syne'] leading-snug group-hover:text-yellow-300 transition-colors">
                        {s.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-white/90 mt-2 leading-relaxed font-sans font-normal">
                        {s.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-col gap-2.5">
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-[#e8256d] font-sans tracking-tight">
                          {s.price}
                        </div>
                        <span className="text-xs text-gray-400 block font-sans">{s.priceNote}</span>
                      </div>
                      
                      <button className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-300 border border-yellow-300/80 shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all cursor-pointer font-sans">
                        Contratar Serviço
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* BANNER CENTRALIZADO DO DISCORD & NEGOCIAÇÃO */}
              <div className="mt-4 p-5 sm:p-6 rounded-2xl border border-yellow-500/30 bg-black flex flex-col items-center justify-center text-center shadow-xl">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#5865F2]/25 border border-[#5865F2]/60 flex items-center justify-center mx-auto mb-3 text-white shadow-[0_0_20px_rgba(88,101,242,0.4)]">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg font-['Syne']">
                  Quer negociar um vídeo ou projeto de IA?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1.5 max-w-md mx-auto leading-relaxed font-sans">
                  Fale direto comigo no Discord: abra o privado com <strong className="text-yellow-400">@{discordTag}</strong> ({discordDisplayName}) para alinharmos roteiro, prazo e valores!
                </p>

                <div className="w-full max-w-md mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={onCopyDiscordTag}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer font-sans"
                  >
                    {copiedDiscord ? '✓ Copiado @walgny' : '📋 Copiar @walgny'}
                  </button>
                  <a
                    href={discordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(234,179,8,0.4)] font-sans"
                  >
                    <span>Entrar no Discord Oficial</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. CARD DESENHO - ROXO */}
        <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black backdrop-blur-md shadow-2xl hover:border-purple-500/60 transition-all">
          <div 
            onClick={() => onToggleCategory('art')}
            className="flex items-center justify-between p-4.5 sm:p-5 cursor-pointer hover:bg-purple-950/20 transition-colors"
          >
            <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                <Palette className="w-7 h-7 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
              </div>
              <div className="min-w-0">
                <h3 className="font-['Syne'] font-bold text-white text-base sm:text-xl leading-tight">
                  Desenho
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-snug break-words font-sans">
                  Digitalização de Sketch · Lineart · Design de Personagem
                </p>
              </div>
            </div>
            <div className={`w-9 h-9 rounded-full bg-purple-950/80 border border-purple-500/40 flex items-center justify-center transition-transform duration-300 ml-3 flex-shrink-0 ${openCategory === 'art' ? 'rotate-90 bg-purple-600 border-purple-400' : ''}`}>
              <ChevronRight className={`w-5 h-5 transition-colors ${openCategory === 'art' ? 'text-white' : 'text-purple-400'}`} />
            </div>
          </div>

          {openCategory === 'art' && (
            <div className="p-4 sm:p-6 pt-0 border-t border-zinc-800 animate-fadeIn space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                {[
                  {
                    title: "Passar Sketch & Traço para o Digital",
                    price: "R$ 10,00",
                    priceNote: "Por desenho / sketch",
                    desc: "Envie a foto ou rascunho do seu desenho: faço o traço limpo (lineart) e trago o seu sketch para a arte digital em alta resolução.",
                    badge: "R$ 10",
                    category: "Artes & Ilustrações",
                    iconNode: <PenTool className="w-5 h-5 text-purple-400" />
                  },
                  {
                    title: "Criação de Design de Personagem",
                    price: "A negociar",
                    priceNote: "Conforme complexidade",
                    desc: "Criação e desenvolvimento 2D de personagens originais (OCs), mascotes para marcas, fichas de pose e paleta de cores.",
                    badge: "A negociar",
                    category: "Artes & Ilustrações",
                    iconNode: <Sparkles className="w-5 h-5 text-purple-400" />
                  }
                ].map((s, idx) => (
                  <div 
                    key={idx}
                    onClick={() => onServiceInquiry({ title: s.title, price: s.price, category: s.category, desc: s.desc })}
                    className="p-4 sm:p-5 rounded-2xl border border-zinc-800 bg-black hover:border-purple-500/70 transition-all cursor-pointer flex flex-col justify-between group shadow-xl hover:scale-[1.02] active:scale-98"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center shadow-md group-hover:border-purple-400 transition-colors">
                          {s.iconNode}
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/40 font-sans">
                          {s.badge}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-white text-base sm:text-lg font-['Syne'] leading-snug group-hover:text-purple-300 transition-colors">
                        {s.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-white/90 mt-2 leading-relaxed font-sans font-normal">
                        {s.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-col gap-2.5">
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-[#e8256d] font-sans tracking-tight">
                          {s.price}
                        </div>
                        <span className="text-xs text-gray-400 block font-sans">{s.priceNote}</span>
                      </div>
                      
                      <button className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 border border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all cursor-pointer font-sans">
                        Contratar Serviço
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* BANNER CENTRALIZADO DO DISCORD & NEGOCIAÇÃO */}
              <div className="mt-4 p-5 sm:p-6 rounded-2xl border border-purple-500/30 bg-black flex flex-col items-center justify-center text-center shadow-xl">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#5865F2]/25 border border-[#5865F2]/60 flex items-center justify-center mx-auto mb-3 text-white shadow-[0_0_20px_rgba(88,101,242,0.4)]">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-white text-base sm:text-lg font-['Syne']">
                  Quer encomendar arte ou digitalizar sketch?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1.5 max-w-md mx-auto leading-relaxed font-sans">
                  Fale direto comigo no Discord: abra o privado com <strong className="text-purple-400">@{discordTag}</strong> ({discordDisplayName}) para enviar suas referências e rascunhos!
                </p>

                <div className="w-full max-w-md mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={onCopyDiscordTag}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs sm:text-sm font-bold text-white transition-all cursor-pointer font-sans"
                  >
                    {copiedDiscord ? '✓ Copiado @walgny' : '📋 Copiar @walgny'}
                  </button>
                  <a
                    href={discordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] font-sans"
                  >
                    <span>Entrar no Discord Oficial</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
