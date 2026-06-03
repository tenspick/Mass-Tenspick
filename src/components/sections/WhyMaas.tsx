import React from 'react';
import HorizontalReveal from '../ui/HorizontalReveal';

// Custom inline SVG illustrations related to marketing & agencies

const AgencyIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-red-500 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Corporate building representing slow agency friction */}
    <rect x="25" y="15" width="50" height="70" rx="4" className="stroke-red-500 fill-red-500/5" />
    <line x1="37" y1="25" x2="43" y2="25" className="stroke-red-500/60" />
    <line x1="37" y1="35" x2="43" y2="35" className="stroke-red-500/60" />
    <line x1="37" y1="45" x2="43" y2="45" className="stroke-red-500/60" />
    <line x1="37" y1="55" x2="43" y2="55" className="stroke-red-500/60" />
    <line x1="57" y1="25" x2="63" y2="25" className="stroke-red-500/60" />
    <line x1="57" y1="35" x2="63" y2="35" className="stroke-red-500/60" />
    <line x1="57" y1="45" x2="63" y2="45" className="stroke-red-500/60" />
    <line x1="57" y1="55" x2="63" y2="55" className="stroke-red-500/60" />
    {/* Slow-running gears/clock */}
    <circle cx="50" cy="70" r="10" className="fill-red-500/10 stroke-red-600" />
    <polyline points="50,65 50,70 54,72" className="stroke-red-600" />
    {/* High overhead cost tag */}
    <path d="M12,45 L20,38 L28,45 L28,58 L12,58 Z" className="fill-red-500/10 stroke-red-500" />
    <circle cx="20" cy="45" r="1.5" className="fill-red-500 stroke-none" />
    <path d="M17,50 L23,50 M17,54 L23,54" className="stroke-red-600" />
  </svg>
);

const FreelancerIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-orange-500 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Disconnected freelancer nodes representing coordination headaches */}
    <circle cx="22" cy="28" r="8" className="fill-orange-500/5 stroke-orange-500" />
    <path d="M18,28 A4,4 0 0,0 26,28" className="stroke-orange-500" />
    <circle cx="22" cy="24" r="3" className="fill-orange-500/20 stroke-orange-500" />

    <circle cx="78" cy="28" r="8" className="fill-orange-500/5 stroke-orange-500" />
    <path d="M74,28 A4,4 0 0,0 82,28" className="stroke-orange-500" />
    <circle cx="78" cy="24" r="3" className="fill-orange-500/20 stroke-orange-500" />

    <circle cx="50" cy="72" r="8" className="fill-orange-500/5 stroke-orange-500" />
    <path d="M46,72 A4,4 0 0,0 54,72" className="stroke-orange-500" />
    <circle cx="50" cy="68" r="3" className="fill-orange-500/20 stroke-orange-500" />

    {/* Broken communication/coordination lines */}
    <path d="M32,32 L42,64" strokeDasharray="3,3" className="stroke-orange-400/80" />
    <path d="M68,32 L58,64" strokeDasharray="3,3" className="stroke-orange-400/80" />
    <path d="M32,28 L68,28" strokeDasharray="4,4" className="stroke-red-400" />
    
    {/* Warning caution mark in the center */}
    <path d="M50,38 L50,44" strokeWidth="1.8" className="stroke-orange-600" />
    <circle cx="50" cy="49" r="1.2" className="fill-orange-600 stroke-none" />
  </svg>
);

const InHouseIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-amber-500 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Desk workspace showing empty chair (skill gaps) & costly salary tag */}
    <line x1="15" y1="70" x2="85" y2="70" strokeWidth="2" className="stroke-amber-600" />
    
    {/* Empty chair frame */}
    <rect x="40" y="38" width="20" height="18" rx="2" className="fill-amber-500/5 stroke-amber-500" />
    <line x1="50" y1="56" x2="50" y2="70" className="stroke-amber-500" />
    <line x1="42" y1="70" x2="35" y2="82" className="stroke-amber-500" />
    <line x1="58" y1="70" x2="65" y2="82" className="stroke-amber-500" />

    {/* HIRE wanted sign tag */}
    <rect x="68" y="20" width="24" height="14" rx="2" className="fill-amber-500/10 stroke-amber-500" />
    <line x1="80" y1="15" x2="80" y2="20" className="stroke-amber-500" />
    <path d="M73,27 L77,27 M73,31 L87,31" className="stroke-amber-600" strokeWidth="1" />
    
    {/* Cash drain arrow */}
    <path d="M12,22 L22,12 L32,22" className="stroke-red-400" />
    <line x1="22" y1="12" x2="22" y2="35" className="stroke-red-400" />
    <text x="22" y="42" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#E11D48" stroke="none" className="font-mono">$$$</text>
  </svg>
);

const MaasIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-blue-500 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Unified digital dashboard and launching rocket representing speed & growth */}
    <rect x="15" y="25" width="70" height="50" rx="6" className="stroke-blue-500/40 fill-blue-500/5" />
    <line x1="15" y1="36" x2="85" y2="36" className="stroke-blue-500/30" />
    <circle cx="22" cy="30" r="1.5" className="fill-blue-500 stroke-none" />
    <circle cx="28" cy="30" r="1.5" className="fill-blue-500 stroke-none" />
    <circle cx="34" cy="30" r="1.5" className="fill-blue-500 stroke-none" />
    
    {/* Rocket ship blasting out from dashboard */}
    <path d="M50,15 C54,23 57,32 57,45 C57,54 54,58 50,58 C46,58 43,54 43,45 C43,32 46,23 50,15 Z" className="fill-blue-600/10 stroke-blue-600" />
    <path d="M43,49 C39,52 35,59 35,63 C38,63 43,60 45,54" className="stroke-blue-500" />
    <path d="M57,49 C61,52 65,59 65,63 C62,63 57,60 55,54" className="stroke-blue-500" />
    
    {/* Speed trails & flame */}
    <path d="M50,58 C48,64 46,68 46,72 C50,74 50,71 54,72 C54,68 52,64 50,58 Z" className="fill-amber-500/20 stroke-amber-500" />
    
    {/* Chart bars growing inside dashboard */}
    <rect x="22" y="48" width="6" height="18" rx="1" className="fill-blue-500/20 stroke-blue-500" />
    <rect x="32" y="54" width="6" height="12" rx="1" className="fill-blue-500/10 stroke-blue-500/50" />
    <rect x="62" y="51" width="6" height="15" rx="1" className="fill-blue-500/20 stroke-blue-500" />
    <rect x="72" y="44" width="6" height="22" rx="1" className="fill-blue-600/30 stroke-blue-600" />
  </svg>
);

export const WhyMaas = () => {
  const cards = [
    {
      num: "01",
      icon: AgencyIllustration,
      category: "Traditional Agencies",
      title: "Traditional Agencies",
      subtitle: "High overhead. Rigid contracts. Slow onboarding.",
      desc: "Markup on tools and ad placement. Account managers, not doers, are main contact. Slow execution cycles (weeks/months).",
      bg: "#FFF5F5",
      accent: "text-red-650"
    },
    {
      num: "02",
      icon: FreelancerIllustration,
      category: "Freelancers",
      title: "Freelancers",
      subtitle: "High variance. Lack of process. Unreliable.",
      desc: "Coordination headaches between vendors. Inconsistent delivery and code/design quality. Limited bandwidth and skill breadth.",
      bg: "#FFF9F2",
      accent: "text-orange-600"
    },
    {
      num: "03",
      icon: InHouseIllustration,
      category: "In-House Teams",
      title: "In-House Teams",
      subtitle: "Hiring headaches. Fixed salary overhead. Skill gaps.",
      desc: "High recruitment cost and equity expectations. Suffer from low capacity/idle time. Must hire 4-5 specialists to cover full scope.",
      bg: "#FFFDF0",
      accent: "text-amber-600"
    },
    {
      num: "04",
      icon: MaasIllustration,
      category: "TENSPICK MAAS",
      title: "TENSPICK MAAS",
      subtitle: "The Ultimate Marketing Model // RECOMMENDED",
      desc: "One Unified Team: Copywriters, developers, designers, and media buyers, working as one. One Unified Dashboard: Submit requests, check campaign progress, and view analytics in one hub. One Flat Subscription: No hiring overhead, hidden markups, or hourly billing. Predictable scale. Unlimited Speed & Growth: Move at startup velocity. Launch and optimize campaigns in hours, not weeks.",
      bg: "#F0F7FF",
      accent: "text-blue-600"
    }
  ];

  return (
    <HorizontalReveal 
      cards={cards}
      sectionTitle="Why MAAS?"
      sectionSubtitle="Choose Your Acquisition Engine"
      sectionDescription="Skip the overhead, hiring speedbumps, and coordination headaches. See how TENSPICK MAAS outperforms classic setups."
    />
  );
};

export default WhyMaas;

