import { useEffect, useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Calendar, Play, Volume2, VolumeX, Layers, TrendingUp, Users, Target, Activity } from "lucide-react";
import { Button } from "../ui/button";
import { ContainerScroll } from "../ui/ContainerScroll";

// We import ContainerScroll as export const ContainerScroll, so we can reference it.
// Let's resolve the import of ContainerScroll:
// import { ContainerScroll } from "../ui/ContainerScroll";
// Yes!

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const titles = useMemo(
    () => [
      "Marketing",
      "Automation",
      "META Ads",
      "Google Ads",
      "SEO",
      "Influence",
      "AI",
      "Branding"
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative w-full overflow-hidden bg-[#050505] pt-16">
      {/* Background Gradients & Mesh */}
      <div className="absolute inset-0 bg-mesh opacity-80 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-grid-lines pointer-events-none z-0" />
      
      {/* Radial Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] rounded-full bg-secondary/10 blur-[120px] pointer-events-none z-0" />

      {/* Floating Particles/3D Elements */}
      <div className="absolute top-1/4 left-[8%] w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent opacity-20 blur-sm animate-float pointer-events-none z-0" />
      <div className="absolute top-1/3 right-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary opacity-20 blur-md animate-float pointer-events-none z-0 [animation-delay:2s]" />

      <ContainerScroll
        titleComponent={
          <div className="flex gap-6 items-center justify-center flex-col px-4">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-accent border border-accent/20 rounded-full bg-accent/5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                MARKETING AS A SERVICE (MAAS)
              </span>
            </motion.div>

            <div className="flex flex-col gap-4 max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-5xl md:text-7xl tracking-tight text-center font-extrabold text-white leading-tight max-w-5xl mx-auto flex flex-col gap-2">
                <span>From First Click To Lasting Success.</span>
                <span className="block text-xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-primary mt-2">
                  You Build The Business. We Build The Momentum.
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-4 text-base sm:text-lg md:text-xl font-medium text-slate-800">
                <span>Your Complete Growth Ecosystem:</span>
                <div className="relative flex overflow-hidden h-[1.8rem] sm:h-[2.2rem] md:h-[2.5rem] min-w-[150px] sm:min-w-[180px] text-center sm:text-left justify-center sm:justify-start">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute w-full sm:w-auto left-0 right-0 sm:right-auto font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
                      initial={{ opacity: 0, y: "100%" }}
                      transition={{ type: "spring", stiffness: 70, damping: 14 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? "-150%" : "150%",
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 mt-4 z-30">
              <Button 
                variant="primary" 
                size="lg"
                className="gap-2 shadow-primary/20"
                onClick={() => window.location.hash = '#/contact'}
              >
                Start Growing <MoveRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="gap-2 bg-white/5 border border-white/10 hover:bg-white/10"
                onClick={() => window.location.hash = '#/contact'}
              >
                Book Call <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        }
      >
        {/* Mock Analytics Dashboard Content Inside the 3D scroll Card */}
        <div className="dashboard-container w-full h-full text-white grid grid-cols-5 bg-[#050505]/95">
          {/* Sidebar */}
          <div className="col-span-1 border-r border-white/5 bg-[#0a0a0a] p-4 hidden md:flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 px-2 justify-center py-2">
                <img 
                  src="/tenspick maas logo.png" 
                  alt="TENSPICK MAAS" 
                  className="h-7 w-auto object-contain" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                {[
                  { name: 'Overview', icon: Activity, active: true },
                  { name: 'Campaigns', icon: Target },
                  { name: 'SEO Engine', icon: TrendingUp },
                  { name: 'AI Automations', icon: Layers },
                  { name: 'Client Database', icon: Users },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all ${
                      item.active
                        ? 'bg-gradient-to-r from-secondary/15 to-primary/5 text-primary border border-primary/20'
                        : 'text-muted-text hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
              <span className="block text-[10px] text-muted-text uppercase tracking-widest mb-1">Your Team Status</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-accent font-semibold">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                12 Experts Active
              </span>
            </div>
          </div>

          {/* Main Dashboard Space */}
          <div className="col-span-5 md:col-span-4 p-4 sm:p-6 flex flex-col gap-6 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <h3 className="text-base font-bold text-white">Performance Overview</h3>
                <p className="text-xs text-muted-text">Real-time metrics for TENSPICK MAAS active campaigns</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-semibold">
                  LIVE TRACKER
                </span>
              </div>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { name: 'Total Impressions', val: '12.4M', change: '+241%', color: 'text-primary' },
                { name: 'Budget Managed', val: '$1.2M+', change: 'Optimized', color: 'text-secondary' },
                { name: 'Leads Generated', val: '43,290', change: '+412%', color: 'text-accent' },
                { name: 'ROI Influenced', val: '5.2x', change: 'Avg ROAS', color: 'text-white' },
              ].map((card) => (
                <div key={card.name} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                  <span className="text-[10px] text-muted-text uppercase tracking-wider block mb-2">{card.name}</span>
                  <div className="flex items-baseline justify-between gap-1">
                    <span className="text-lg sm:text-2xl font-bold text-white">{card.val}</span>
                    <span className={`text-[10px] font-bold ${card.change.includes('+') ? 'text-accent' : 'text-primary'}`}>
                      {card.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Graphs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Campaign Video Player widget */}
              <div className="lg:col-span-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between gap-3 relative overflow-hidden group">
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Interactive Campaign Video Player
                  </span>
                  
                  <button 
                    onClick={() => {
                      setIsMuted(!isMuted);
                      if (videoRef.current) {
                        videoRef.current.muted = !isMuted;
                      }
                    }} 
                    className="text-[10px] bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full text-white font-bold transition-all cursor-pointer flex items-center gap-1 z-20"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5" /> Sound Off (Muted)
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5" /> Sound On
                      </>
                    )}
                  </button>
                </div>
                
                <div className="h-40 sm:h-52 w-full rounded-xl overflow-hidden bg-black/60 relative border border-white/5 flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src="/maas video.mp4"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => {
                      if (videoRef.current) {
                        if (isPlaying) {
                          videoRef.current.pause();
                          setIsPlaying(false);
                        } else {
                          videoRef.current.play();
                          setIsPlaying(true);
                        }
                      }
                    }}
                  />
                  
                  {/* Floating click indicator overlay */}
                  <div 
                    onClick={() => {
                      if (videoRef.current) {
                        if (isPlaying) {
                          videoRef.current.pause();
                          setIsPlaying(false);
                        } else {
                          videoRef.current.play();
                          setIsPlaying(true);
                        }
                      }
                    }}
                    className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-10"
                  >
                    <div className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-xs font-bold text-white">
                      {isPlaying ? "Pause Video" : "Play Video"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Automation Trigger Logs */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                <span className="text-xs font-semibold text-white">AI Automation Queue</span>
                <div className="flex flex-col gap-2.5">
                  {[
                    { action: 'WhatsApp Chatbot Qualified', time: '1m ago', color: 'bg-accent' },
                    { action: 'Meta Ad Form Synced to CRM', time: '4m ago', color: 'bg-primary' },
                    { action: 'SEO Keyword Rank Boosted (+4)', time: '12m ago', color: 'bg-secondary' },
                    { action: 'Smart Email Follow-up Sent', time: '30m ago', color: 'bg-primary' },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${log.color}`} />
                        <span className="text-[10px] font-medium text-white truncate max-w-[120px] sm:max-w-none">{log.action}</span>
                      </div>
                      <span className="text-[9px] text-muted-text">{log.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
export default Hero;
