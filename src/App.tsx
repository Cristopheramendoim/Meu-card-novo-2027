import React, { useEffect, useRef, useState, useCallback } from 'react';
import Confetti from 'react-confetti';

export default function App() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [drawingsOpen, setDrawingsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const [pollModalOpen, setPollModalOpen] = useState(false);
  const [pollStep, setPollStep] = useState(1);
  const [pollState, setPollState] = useState<'idle' | 'answered'>('idle');
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePollAnswer = () => {
    if (pollStep < 3) {
      setPollStep(pollStep + 1);
    } else {
      window.open("https://youtu.be/LACbVhgtx9I?si=5PJZ3QOYq8YO40Dp", "_blank");
      setPollModalOpen(false);
      setPollState('answered');
      setPollStep(1); // reset step for next time, though unlikely to be used again
    }
  };

  // Canvas Refs
  const waterBgRef = useRef<HTMLCanvasElement>(null);
  const introCanvasRef = useRef<HTMLCanvasElement>(null);
  const irisCanvasRef = useRef<HTMLCanvasElement>(null);

  const galleryImgs = [
    "/perfil/1769448335268~2.png", // Sua imagem carregada
    "/Artes/116 Sem TÃ­tulo_20260404030523.jpg",
    "/Artes/116 Sem TÃ­tulo_20260404143137.jpg",
    "/Artes/127 Sem TÃ­tulo.jpg",
    "/Artes/136 Sem TÃ­tulo_20260513182821.png",
    "/Artes/136 Sem TÃ­tulo_20260513183143.png",
    "/Artes/54 Sem TÃ­tulo_20260122211155~2.png",
    "/Artes/6 Sem TÃ­tulo_20251127150736.png",
    "/Artes/76 Sem TÃ­tulo_20260212214308.jpg",
    "/Artes/83 Sem TÃ­tulo_20260323193430.png",
    "/Artes/87 Sem TÃ­tulo_20260219210152.jpg",
    "/Artes/92 Sem TÃ­tulo_20260307010148.png",
    "/Artes/95 Sem TÃ­tulo_20260310002308.png",
    "/Artes/96 Sem TÃ­tulo_20260310160633.png",
    "/Artes/96 Sem TÃ­tulo_20260310160654.png",
    "/Artes/97 Sem TÃ­tulo_20260307012506.png",
    "/Artes/vectorink-0e37xk4ef_17571069841471918~3.png",
    "/Artes/vectorink-1omlh6iaa_1761431989050236534.png",
    "/Artes/vectorink-4dfe4bvuo_1761432778430435896.png",
    "/Artes/vectorink-4xc9lu81u_176143156513098890.png",
    "/Artes/vectorink-6hs0v9ejb_176557609323870945.png",
    "/Artes/vectorink-d554zlinl_1757029500636216306.png",
    "/Artes/vectorink-fdlxh5ywx_174226598135434389.jpg",
    "/Artes/vectorink-jkvp8oyup_176606977140762986.png",
    "/Artes/vectorink-l00ds7xu2_175063180333812189.png",
    "/Artes/vectorink-mklc18lb7_176040683630296117~2.png",
    "/Artes/vectorink-mrvofxryx_175063183413119587.png",
    "/Artes/vectorink-ob8kojv0t_17669584314014291.png",
    "/Artes/vectorink-p7wg15kc4_174278607886135125.png",
    "/Artes/vectorink-pnf7k2o6y_174095015064311958.png",
    "/Artes/vectorink-pq3lp8gtv_1761433196667557489.png",
    "/Artes/vectorink-wxja8wb10_17409500840462420.png",
    "/Artes/vectorink-wzfw22zhy_17420891507242273.png",
    "/Artes/vectorink-xgpfyubt5_176557602888962764.png",
    "/Artes/vectorink-xksp50pye_176557605733965952.png"
  ];

  const profileImg = "/perfil/1769448335268~2.png";

  const irisTransition = useCallback((onMidpoint: () => void) => {
    const canvas = irisCanvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2;
    const maxR = Math.sqrt(cx * cx + cy * cy) + 10;
    let r = maxR; 
    const speed = maxR / 18;
    
    function closeIris() {
      if(!ctx || !canvas) return;
      ctx.clearRect(0, 0, W, H); 
      ctx.fillStyle = '#0a0a0a'; 
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath(); 
      ctx.arc(cx, cy, Math.max(0, r), 0, Math.PI * 2); 
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      r -= speed;
      if (r > 0) { 
        requestAnimationFrame(closeIris); 
      } else {
        onMidpoint();
        r = 0;
        function openIris() {
          if(!ctx || !canvas) return;
          ctx.clearRect(0, 0, W, H); 
          ctx.fillStyle = '#0a0a0a'; 
          ctx.fillRect(0, 0, W, H);
          ctx.globalCompositeOperation = 'destination-out';
          ctx.beginPath(); 
          ctx.arc(cx, cy, r, 0, Math.PI * 2); 
          ctx.fill();
          ctx.globalCompositeOperation = 'source-over';
          r += speed * 1.4;
          if (r < maxR) { 
            requestAnimationFrame(openIris); 
          } else { 
            canvas.style.display = 'none'; 
          }
        }
        requestAnimationFrame(openIris);
      }
    }
    requestAnimationFrame(closeIris);
  }, []);

  const openPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    irisTransition(() => {
      setPortfolioOpen(true);
      window.scrollTo(0, 0);
    });
  };

  const closePortfolio = () => {
    irisTransition(() => {
      setPortfolioOpen(false);
    });
  };

  const handleExternalLink = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    irisTransition(() => {
      window.open(url, '_blank');
    });
  };

  // Water Background logic
  useEffect(() => {
    const canvas = waterBgRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W = 0, H = 0;
    let animationId: number;

    function resize() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    const layers = [
      { amp: 18, freq: 0.008, speed: 0.6, yBase: 0.55, color: 'rgba(120,0,255,0.18)', lw: 2 },
      { amp: 14, freq: 0.012, speed: 0.9, yBase: 0.60, color: 'rgba(0,200,255,0.14)', lw: 1.5 },
      { amp: 22, freq: 0.006, speed: 0.4, yBase: 0.65, color: 'rgba(160,0,255,0.20)', lw: 2.5 },
      { amp: 10, freq: 0.018, speed: 1.2, yBase: 0.70, color: 'rgba(0,150,255,0.12)', lw: 1 },
      { amp: 28, freq: 0.005, speed: 0.3, yBase: 0.75, color: 'rgba(200,0,255,0.15)', lw: 3 },
      { amp: 8, freq: 0.025, speed: 1.8, yBase: 0.80, color: 'rgba(80,0,200,0.10)', lw: 1 },
    ];
    function draw(t: number) {
      if(!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#05001a'); bg.addColorStop(0.5, '#0a0022'); bg.addColorStop(1, '#000010');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      layers.forEach(l => {
        const yMid = H * l.yBase;
        ctx.save(); ctx.shadowColor = l.color; ctx.shadowBlur = 20;
        ctx.beginPath(); ctx.moveTo(0, yMid);
        for (let x = 0; x <= W; x += 2) {
          const y = yMid + Math.sin(x * l.freq + t * l.speed) * l.amp + Math.sin(x * l.freq * 1.6 + t * l.speed * 0.7) * l.amp * 0.4;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
        const wg = ctx.createLinearGradient(0, yMid - l.amp, 0, yMid + l.amp + 60);
        wg.addColorStop(0, l.color); wg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = wg; ctx.fill(); ctx.restore();
        ctx.save(); ctx.shadowColor = l.color; ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.moveTo(0, yMid);
        for (let x = 0; x <= W; x += 2) {
          const y = yMid + Math.sin(x * l.freq + t * l.speed) * l.amp + Math.sin(x * l.freq * 1.6 + t * l.speed * 0.7) * l.amp * 0.4;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = l.color.replace(',0.', ',0.5'); ctx.lineWidth = l.lw; ctx.stroke(); ctx.restore();
      });
      if (Math.random() < 0.15) {
        const sx = Math.random() * W, waveY = H * 0.65 + Math.sin(sx * 0.006 + t * 0.4) * 22;
        ctx.save(); ctx.shadowColor = '#c77dff'; ctx.shadowBlur = 14;
        ctx.beginPath(); ctx.arc(sx, waveY, 1.5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(200,120,255,0.8)'; ctx.fill(); ctx.restore();
      }
    }
    let t = 0;
    function loop() {
      t += 0.016; draw(t); animationId = requestAnimationFrame(loop);
    }
    loop();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animationId); };
  }, []);

  // Intro Canvas logic
  useEffect(() => {
    const canvas = introCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = canvas.width = window.innerWidth, H = canvas.height = window.innerHeight;
    const N = 100, surf = new Float32Array(N), vel = new Float32Array(N);
    function disturbAt(pct: number, str: number) { const i = Math.floor(pct * N); vel[Math.min(N - 1, Math.max(0, i))] += str; }
    function stepWave() {
      for (let i = 0; i < N; i++) vel[i] += -0.035 * surf[i];
      for (let i = 1; i < N - 1; i++) vel[i] += 0.28 * (surf[i - 1] + surf[i + 1] - 2 * surf[i]);
      for (let i = 0; i < N; i++) { vel[i] *= 0.93; surf[i] += vel[i]; }
    }
    let phase = 0, phaseStart = performance.now();
    let animationId: number;
    let floodY = H;
    
    function loop(now: number) {
      if(!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const pt = (now - phaseStart) / 1000, segW = W / N;
      function drawWater(topY: number, alpha: number) {
        if (alpha <= 0 || !ctx) return;
        stepWave();
        if (Math.random() < 0.3) disturbAt(Math.random(), (Math.random() - 0.5) * 14);
        ctx.beginPath(); ctx.moveTo(0, topY + surf[0]);
        for (let i = 1; i < N; i++) ctx.lineTo(i * segW, topY + surf[i]);
        ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
        const g = ctx.createLinearGradient(0, topY - 40, 0, H);
        g.addColorStop(0, 'rgba(160,0,255,' + (alpha * 0.9) + ')');
        g.addColorStop(0.15, 'rgba(80,0,200,' + (alpha * 0.85) + ')');
        g.addColorStop(0.5, 'rgba(30,0,80,' + (alpha * 0.95) + ')');
        g.addColorStop(1, 'rgba(0,0,20,' + alpha + ')');
        ctx.fillStyle = g; ctx.fill();
        ctx.save(); ctx.shadowColor = '#b000ff'; ctx.shadowBlur = 18;
        ctx.beginPath(); ctx.moveTo(0, topY + surf[0]);
        for (let i = 1; i < N; i++) ctx.lineTo(i * segW, topY + surf[i]);
        ctx.strokeStyle = 'rgba(180,0,255,' + Math.min(1, alpha * 1.2) + ')'; ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
      }
      if (phase === 0) {
        const p = Math.min(1, pt / 1.4), ease = 1 - Math.pow(1 - p, 3);
        floodY = H * (1 - ease); drawWater(floodY, 0.92); if (p >= 1) { phase = 1; phaseStart = now; }
      } else if (phase === 1) {
        drawWater(0, 0.92); if (pt >= 1.0) { phase = 2; phaseStart = now; }
      } else if (phase === 2) {
        const p = Math.min(1, pt / 1.4), ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        drawWater(H * ease, 0.92 * (1 - ease * 0.4)); if (p >= 1) { phase = 3; }
      } else {
        if(canvas) {
          canvas.style.transition = 'opacity 0.5s'; canvas.style.opacity = '0';
          setTimeout(() => { if(canvas) canvas.style.display = 'none'; }, 600);
        }
        return;
      }
      animationId = requestAnimationFrame(loop);
    }
    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      <div id="waterBg"><canvas ref={waterBgRef}></canvas></div>
      <canvas ref={introCanvasRef} id="introCanvas"></canvas>
      <canvas ref={irisCanvasRef} id="irisCanvas"></canvas>

      <div className="bg-blobs">
        <div className="blob blob-1"></div><div className="blob blob-2"></div>
        <div className="blob blob-3"></div><div className="blob blob-4"></div>
      </div>

      {lightboxIndex >= 0 && (
        <div className="lightbox open" onClick={(e) => { if (e.target === e.currentTarget) setLightboxIndex(-1); }}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(-1)}>&#10005;</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => {
            e.stopPropagation();
            setLightboxIndex((prev) => (prev - 1 + galleryImgs.length) % galleryImgs.length);
          }}>&#8249;</button>
          <img src={galleryImgs[lightboxIndex]} alt="Arte expandida" />
          <button className="lightbox-nav lightbox-next" onClick={(e) => {
            e.stopPropagation();
            setLightboxIndex((prev) => (prev + 1) % galleryImgs.length);
          }}>&#8250;</button>
        </div>
      )}

      {pollModalOpen && (
        <div className="modal-overlay exclusive-modal open" onClick={(e) => { if (e.target === e.currentTarget) setPollModalOpen(false); }}>
          <div className="modal">
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{pollStep === 1 ? '👀' : pollStep === 2 ? '❤️' : '🔥'}</div>
            <h2>Conteúdo Exclusivo - Enquete</h2>
            <p className="text-gray-300 text-sm mb-6">
              {pollStep === 1 && "Passo 1: O que mais te atrai em mim?"}
              {pollStep === 2 && "Passo 2: Se fôssemos sair, qual seria o encontro perfeito?"}
              {pollStep === 3 && "Passo 3: E o que você está esperando encontrar no meu lado mais exclusivo?"}
            </p>
            
            {pollStep === 1 && (
              <>
                <button className="btn-apoiar w-full mb-3" onClick={handlePollAnswer}>O seu sorrisinho lindo e olharzinho marcante</button>
                <button className="btn-apoiar w-full mb-3" style={{ background: 'linear-gradient(135deg,#00b4d8,#4d96ff)' }} onClick={handlePollAnswer}>A sua vozinha bem suave e docinha</button>
                <button className="btn-apoiar w-full mb-3" style={{ background: 'linear-gradient(135deg,#6bcb77,#00b4d8)' }} onClick={handlePollAnswer}>O seu jeitinho talentoso e criativo</button>
                <button className="btn-apoiar w-full mb-5" style={{ background: 'linear-gradient(135deg,#ffd93d,#ff9f43)' }} onClick={handlePollAnswer}>A sua personalidade divertidinha e charmosinha</button>
              </>
            )}

            {pollStep === 2 && (
              <>
                <button className="btn-apoiar w-full mb-3" onClick={handlePollAnswer}>Um jantarzinho à luz de velas bem romântico</button>
                <button className="btn-apoiar w-full mb-3" style={{ background: 'linear-gradient(135deg,#00b4d8,#4d96ff)' }} onClick={handlePollAnswer}>Assistir a um filminho coladinhos no sofá</button>
                <button className="btn-apoiar w-full mb-3" style={{ background: 'linear-gradient(135deg,#6bcb77,#00b4d8)' }} onClick={handlePollAnswer}>Uma aventurazinha bem divertida e cheia de risadas</button>
                <button className="btn-apoiar w-full mb-5" style={{ background: 'linear-gradient(135deg,#ffd93d,#ff9f43)' }} onClick={handlePollAnswer}>Um passeinho tranquilo em um lindo parque</button>
              </>
            )}

            {pollStep === 3 && (
              <>
                <button className="btn-apoiar w-full mb-3" onClick={handlePollAnswer}>Um ladinho meu muito carinhoso e fofinho</button>
                <button className="btn-apoiar w-full mb-3" style={{ background: 'linear-gradient(135deg,#00b4d8,#4d96ff)' }} onClick={handlePollAnswer}>Muito romance e momentinhos gostosos juntos</button>
                <button className="btn-apoiar w-full mb-3" style={{ background: 'linear-gradient(135deg,#6bcb77,#00b4d8)' }} onClick={handlePollAnswer}>Segredinhos só nossos e muita intimidade</button>
                <button className="btn-apoiar w-full mb-5" style={{ background: 'linear-gradient(135deg,#ffd93d,#ff9f43)' }} onClick={handlePollAnswer}>Uma amizadezinha cheia de flertes e brincadeiras</button>
              </>
            )}
            
            <button className="modal-close" onClick={() => setPollModalOpen(false)}>Cancelar</button>
          </div>
        </div>
      )}

      {/* PORTFOLIO PAGE */}
      <div id="portfolioPage" style={{ display: portfolioOpen ? 'block' : 'none', opacity: portfolioOpen ? 1 : 0, transition: 'opacity 0.3s' }}>
        <button className="back-btn portfolio-btn-red" onClick={closePortfolio}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12l7 7M5 12l7-7" /></svg>
          Voltar
        </button>
        <div className="bg-[#111] min-h-screen font-sans text-[#D4D4D4]">
          <div className="w-full h-48 md:h-64 overflow-hidden relative">
            <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop" 
                alt="Professional Video Editing Timeline" 
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111]"></div>
          </div>

          <main className="max-w-3xl mx-auto px-6 pb-20 -mt-12 relative z-10">
            <div className="text-7xl mb-6 animate-float drop-shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                🎬
            </div>

            <h1 className="text-5xl font-bold text-white mb-8 tracking-tight">
                Portfólio
            </h1>

            <div className="space-y-6 text-[17px] leading-relaxed text-gray-300">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-2 mt-10 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>
                    Editor de VSL's
                </h2>

                <p>
                    <strong className="text-white font-semibold">Olá, sou Crishfly</strong> — editor de vídeos especializado em marketing digital a 1 ano e focado em Direct Response.
                </p>

                <p>
                    Transformo ideias em vídeos estratégicos que capturam atenção, engajam e convertem. Com expertise em criativos para anúncios e VSLs, ajudo empresas a se destacarem no mercado digital.
                </p>

                <p>
                    Neste portfólio, você encontrará exemplos dos meus trabalhos que impulsionaram resultados reais para diversos negócios. Se você busca vídeos que realmente performam, está no lugar certo.
                </p>

                <div className="py-6 space-y-3 border-y border-[#333] my-10 text-base">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                        <span>| Clonagem de voz | LipSync | ChatGPT | HeyGen |</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                        <span>| 🇧🇷 Português |</span>
                    </div>
                </div>
            </div>

            {/* Galeria */}
            <div className="mt-14">
                <div className="flex items-center gap-2 mb-8">
                    <div className="p-1.5 bg-[#333] rounded">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                        Galeria: VSL
                    </h3>
                </div>
                
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-8 sm:overflow-visible sm:pb-0 no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0">
                    <div className="flex-none w-[75%] sm:w-auto snap-center flex flex-col gap-3">
                        <div className="aspect-[9/16] bg-[#252525] rounded-lg overflow-hidden border border-[#333] shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all hover:border-red-600">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nQrvuRuhTkM" title="VSL" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <p className="text-sm text-gray-400 font-medium px-1">VSL</p>
                    </div>

                    <div className="flex-none w-[75%] sm:w-auto snap-center flex flex-col gap-3">
                        <div className="aspect-[9/16] bg-[#252525] rounded-lg overflow-hidden border border-[#333] shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all hover:border-red-600">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/W8jEWcYiEas" title="Foco na marca" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <p className="text-sm text-gray-400 font-medium px-1">Foco na marca</p>
                    </div>

                    <div className="flex-none w-[75%] sm:w-auto snap-center flex flex-col gap-3">
                        <div className="aspect-[9/16] bg-[#252525] rounded-lg overflow-hidden border border-[#333] shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all hover:border-red-600">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PapLMtXJJhw" title="VSL" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <p className="text-sm text-gray-400 font-medium px-1">VSL</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-10 border-t border-[#333]">
                <h3 className="text-2xl font-semibold text-white mb-6">
                    Vamos trabalhar juntos?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a href="mailto:crishflycriatives@gmail.com" className="inline-flex items-center justify-center gap-2 bg-[#222] text-white border border-[#333] px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-[#333] hover:border-red-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] active:scale-95">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-500"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        crishflycriatives@gmail.com
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://www.instagram.com/crishfly?igsh=b3U0dmdjbjE3dWto" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#222] border border-[#333] rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#333] hover:border-red-600 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,0,0,0.2)] active:scale-95">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="https://youtube.com/@crishfly?si=c5z-oSr8YrPyq9Zp" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#222] border border-[#333] rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#333] hover:border-red-600 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,0,0,0.2)] active:scale-95">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                    </a>
                    <a href="https://www.tiktok.com/@crishfly?_r=1&_t=ZS-95HGEpf8sS4" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#222] border border-[#333] rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-[#333] hover:border-red-600 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,0,0,0.2)] active:scale-95">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                    </a>
                </div>
            </div>
          </main>
        </div>
      </div>

      <div id="siteWrap">
        <div className="container-main">

          <div className="profile">
            <div className="avatar-wrap">
              <div className="avatar-ring">
                <div className="avatar-inner">
                  <img src={profileImg} alt="Crishfly" />
                </div>
              </div>
            </div>
            <h1>Crishfly</h1>
            <p className="tagline">arte &#8226; moda &#8226; conteúdo &#10022;</p>
            <div className="badges">
              <span className="badge badge-art">&#9999;&#65039; Artista</span>
              <span className="badge badge-content">&#128242; Creator</span>
              <span className="badge badge-fashion">&#128247; Moda</span>
            </div>
          </div>

          <div className="section-label">Venha Produzir Comigo!</div>
          <a href="https://crishflyrecruta.netlify.app/" className="link-card card-exclusive" style={{ borderLeftColor: '#6bcb77' }} onClick={(e) => handleExternalLink(e, "https://crishflyrecruta.netlify.app/")}>
            <div className="card-icon icon-exclusive" style={{ background: 'rgba(107, 203, 119, 0.2)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#6bcb77" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div className="card-info">
              <div className="card-title" style={{ color: '#6bcb77' }}>Participe dos meus Vídeos!</div>
              <div className="card-sub">Procuro Fandubbers, Editores e Artistas ✨</div>
            </div>
            <span className="card-arrow">&#8594;</span>
          </a>

          <div className="section-label">Redes Sociais</div>

          <a href="https://www.instagram.com/crishfly?igsh=b3U0dmdjbjE3dWto" className="link-card card-insta" onClick={(e) => handleExternalLink(e, "https://www.instagram.com/crishfly?igsh=b3U0dmdjbjE3dWto")}>
            <div className="card-icon icon-insta"><svg viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></div>
            <div className="card-info"><div className="card-title">Instagram</div><div className="card-sub">@crishfly</div></div>
            <span className="card-arrow">&#8594;</span>
          </a>

          <a href="https://www.tiktok.com/@crishfly" className="link-card card-tiktok" onClick={(e) => handleExternalLink(e, "https://www.tiktok.com/@crishfly?_r=1&_t=ZS-94zekC2FemW")}>
            <div className="card-icon icon-tiktok"><svg viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" /></svg></div>
            <div className="card-info"><div className="card-title">TikTok</div><div className="card-sub">@crishfly</div></div>
            <span className="card-arrow">&#8594;</span>
          </a>

          <a href="https://youtube.com/@crishfly" className="link-card card-youtube" onClick={(e) => handleExternalLink(e, "https://youtube.com/@crishfly?si=RAapc5TWZBrcoM3H")}>
            <div className="card-icon icon-youtube"><svg viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></div>
            <div className="card-info"><div className="card-title">YouTube</div><div className="card-sub">Canal Crishfly</div></div>
            <span className="card-arrow">&#8594;</span>
          </a>

          <a href="https://discord.gg/KxEYfFnpcW" className="link-card card-discord" onClick={(e) => handleExternalLink(e, "https://discord.gg/KxEYfFnpcW")}>
            <div className="card-icon icon-discord"><svg viewBox="0 0 24 24" fill="white"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg></div>
            <div className="card-info"><div className="card-title">Discord</div><div className="card-sub">Entra na comunidade!</div></div>
            <span className="card-arrow">&#8594;</span>
          </a>

          <div className="section-label">Portfólio & Desenhos</div>

          <a href="#" className="link-card card-portfolio-btn" onClick={openPortfolio}>
            <div className="card-icon icon-portfolio"><svg viewBox="0 0 24 24" fill="none" stroke="#c77dff" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
            <div className="card-info">
              <div className="card-title" style={{ background: 'linear-gradient(135deg,#c77dff,#4d96ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Meu Portfólio</div>
              <div className="card-sub">Ver meu portfólio completo ✨</div>
            </div>
            <span className="card-arrow" style={{ color: '#c77dff' }}>&#8594;</span>
          </a>

          <button className={`drawings-btn ${drawingsOpen ? 'open' : ''}`} onClick={() => setDrawingsOpen(!drawingsOpen)}>
            <div className="db-icon">&#127912;</div>
            <div className="db-info"><div className="db-title">Meus Desenhos & Arte</div><div className="db-sub">Toque para ver todas as criações ✨</div></div>
            <span className="db-arrow">&#8250;</span>
          </button>

          <div className={`drawings-panel ${drawingsOpen ? 'open' : ''}`}>
            <a href="https://pin.it/3QqCs85Fo" target="_blank" rel="noreferrer" className="cta-banner">
              <div className="cta-icon">&#128204;</div>
              <div className="cta-text"><strong>Ver todos no Pinterest &#8594;</strong><span>Arte original • Personagens • Ilustrações</span></div>
            </a>
            <div className="gallery-grid">
              {galleryImgs.map((img, i) => (
                <div className="gallery-item" key={i} onClick={() => setLightboxIndex(i)}>
                  <img src={img} alt={`Arte ${i + 1}`} loading="lazy" />
                  <div className="overlay"><span className="overlay-icon">&#128269;</span></div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-label">Apoio & Loja</div>
          <a href="https://umapenca.com/crishfly/" className="link-card card-loja" onClick={(e) => handleExternalLink(e, "https://umapenca.com/crishfly/")}>
            <div className="card-icon icon-loja"><svg viewBox="0 0 24 24" fill="none" stroke="#ffd93d" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg></div>
            <div className="card-info"><div className="card-title">Loja de Roupas</div><div className="card-sub">Confira os meus lançamentos ✨</div></div>
            <span className="card-arrow">&#8594;</span>
          </a>
          
          <a href="https://livepix.gg/crishfly" className="link-card card-pix" onClick={(e) => handleExternalLink(e, "https://livepix.gg/crishfly")}>
            <div className="card-icon icon-pix"><svg viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg></div>
            <div className="card-info"><div className="card-title">Live Pix <span className="live-badge">LIVE</span></div><div className="card-sub">Manda comentário ou dúvida!</div></div>
            <span className="card-arrow">&#8594;</span>
          </a>
          
          <a href="#" className="link-card card-exclusive" onClick={(e) => { e.preventDefault(); setPollModalOpen(true); }}>
            <div className="card-icon icon-exclusive"><svg viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg></div>
            <div className="card-info">
              <div className="card-title" style={{ background: 'linear-gradient(135deg,var(--c1),var(--c5))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Conteúdo Exclusivo &#10022;</div>
              <div className="card-sub">Área especial para apoiadores &#128064;</div>
            </div>
            <span className="card-arrow">&#8594;</span>
          </a>

          <footer><p>feito com &#128156; por <span>Crishfly</span></p></footer>
        </div>
      </div>

      {pollState === 'answered' && (
        <div className="fixed inset-0 min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden font-sans text-center" style={{ zIndex: 9999 }}>
          <Confetti width={windowSize.width} height={windowSize.height} />
          
          <div className="absolute inset-0 pointer-events-none perspective-[1200px] flex items-center justify-center">
            <div className="w-[80vmin] h-[80vmin] border-[8px] border-pink-500 rounded-full animate-[spin_4s_linear_infinite] absolute mix-blend-screen opacity-70" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }}></div>
            <div className="w-[100vmin] h-[100vmin] border-[8px] border-cyan-500 animate-[spin_5s_linear_infinite_reverse] absolute mix-blend-screen opacity-70" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(70deg) rotateZ(20deg)' }}></div>
            <div className="w-[60vmin] h-[60vmin] border-[8px] border-yellow-500 rounded-lg animate-[spin_3s_linear_infinite] absolute mix-blend-screen opacity-70" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(30deg) rotateY(40deg)' }}></div>
          </div>

          <div className="text-5xl md:text-8xl lg:text-9xl mb-6 z-10 animate-[bounce_2s_ease-in-out_infinite]">
            🥺🐰💖
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 animate-pulse drop-shadow-[0_0_30px_rgba(255,0,0,1)] z-10 p-4 px-8 leading-tight" style={{ WebkitTextStroke: '2px white' }}>
            POR FAVORZINHO, NÃO ME COMA!
          </h1>
          
          <p className="text-xl md:text-3xl lg:text-4xl text-white font-bold z-10 mt-4 drop-shadow-[0_0_10px_rgba(255,105,180,0.8)] animate-pulse px-6">
            Eu sou muito pequenininha e docinha pra virar lanchinho! 😭🍓🎀
          </p>
          
          <button className="mt-8 px-6 py-3 md:px-8 md:py-4 md:text-xl bg-pink-500 font-bold text-white rounded-full hover:bg-pink-600 transition z-20 cursor-pointer shadow-[0_0_20px_rgba(255,105,180,0.8)] border-2 border-white/50" onClick={() => setPollState('idle')}>Vou ser bonzinha e te perdoarzinho 🌸</button>
        </div>
      )}
    </>
  );
}
