/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  PieChart as PieChartIcon, 
  AlertTriangle, 
  TrendingUp, 
  Download, 
  Filter, 
  ChevronRight, 
  ArrowUpRight, 
  ArrowDownRight,
  Target,
  Wallet,
  Activity,
  AlertCircle,
  Play,
  Pause,
  Bell,
  Globe,
  Zap,
  Info,
  Monitor,
  CheckCircle2,
  Trophy,
  Clock,
  Medal,
  Award,
  Sparkles,
  Zap as ZapIcon
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  Legend
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { DIRECTORATES, MONTHLY_TRENDS, SPENDING_TYPES, ACTIVITIES, BudgetData, ActivityData } from './types';

// Leaderboard Page Component
const LeaderboardPage = ({ directorates, activeType, setType }: any) => {
  const sortedData = useMemo(() => {
    return [...directorates].sort((a, b) => {
      const valA = activeType === 'absorption' ? a.percentage : activeType === 'ikpa' ? a.ikpa : activeType === 'physical' ? a.physicalProgress : a.earlyBirdScore;
      const valB = activeType === 'absorption' ? b.percentage : activeType === 'ikpa' ? b.ikpa : activeType === 'physical' ? b.physicalProgress : b.earlyBirdScore;
      return valB - valA;
    });
  }, [directorates, activeType]);

  const config = {
    absorption: { 
      title: 'REALISASI ANGGARAN', 
      subtitle: 'Peringkat Emas', 
      label: '% Serapan', 
      icon: <Wallet size={20} />, 
      unit: '%',
      brand: 'indigo'
    },
    ikpa: { 
      title: 'NILAI KUALITAS IKPA', 
      subtitle: 'Peringkat Kualitas', 
      label: 'Skor', 
      icon: <CheckCircle2 size={20} />, 
      unit: '',
      brand: 'indigo'
    },
    physical: { 
      title: 'PROGRES OUTPUT FISIK', 
      subtitle: 'Peringkat Substansi', 
      label: 'Progres', 
      icon: <Target size={20} />, 
      unit: '%',
      brand: 'emerald'
    },
    earlybird: { 
      title: 'PEMULA TERCEPAT', 
      subtitle: 'Peringkat Kecepatan', 
      label: 'Kecepatan', 
      icon: <Zap size={20} />, 
      unit: ' Pts',
      brand: 'rose'
    },
  };

  const current = config[activeType as keyof typeof config];
  const podium = [sortedData[1], sortedData[0], sortedData[2]]; // 2nd, 1st, 3rd

  return (
    <div className="flex flex-col gap-10 animate-in fade-in zoom-in-95 duration-1000 h-full relative overflow-hidden pb-12">
      {/* Dynamic Background Aura */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

      {/* Navigation Switcher - Elevated Design */}
      <div className="relative z-30 flex justify-center">
        <nav className="flex items-center gap-1 p-1.5 bg-slate-900/10 backdrop-blur-3xl rounded-[2rem] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          {(Object.keys(config) as Array<keyof typeof config>).map((type) => (
            <button
              key={type}
              onClick={() => setType(type)}
              className={`relative px-10 py-3.5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-500 flex items-center gap-3 overflow-hidden group ${
                activeType === type ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {activeType === type && (
                <motion.div 
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-slate-900 shadow-2xl"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.8 }}
                />
              )}
              <span className={`relative z-10 transition-transform duration-500 ${activeType === type ? 'scale-110' : 'group-hover:scale-110'}`}>
                {config[type].icon}
              </span>
              <span className="relative z-10 font-display">{config[type].title.split(' ')[0]}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-12 gap-12 flex-1 items-start relative z-10">
        {/* Cinematic Podium Stage */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center p-12 glass rounded-[4rem] relative overflow-hidden group min-h-[500px]">
           {/* Moving Spotlight */}
           <motion.div 
             animate={{ x: [-100, 100, -100], opacity: [0.1, 0.3, 0.1] }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="absolute top-[-20%] inset-x-0 h-[140%] bg-gradient-to-b from-white/30 via-transparent to-transparent rotate-12 pointer-events-none" 
           />
           
           <div className="flex items-end gap-3 w-full max-w-xl mb-10 perspective-1000">
              {/* Silver Medalist */}
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="flex-1 flex flex-col items-center gap-8"
              >
                  <div className="relative">
                    <div className="absolute inset-0 bg-slate-400/20 blur-2xl rounded-full animate-pulse" />
                    <div className="relative w-24 h-24 rounded-[2.2rem] bg-gradient-to-br from-slate-50 to-slate-200 border-2 border-white shadow-2xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                       <span className="text-3xl font-black text-slate-400 font-display">{podium[0]?.name.substring(0, 1)}</span>
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-400 rounded-2xl border-4 border-white flex items-center justify-center text-xs font-black text-white shadow-2xl">2</div>
                  </div>
                  
                  <div className="w-full h-44 bg-white/60 backdrop-blur-md rounded-t-[2.5rem] border-x-2 border-t-2 border-white/90 shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex flex-col items-center pt-8 relative overflow-hidden">
                     <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 px-4 text-center leading-tight">{podium[0]?.name}</span>
                     <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-slate-800 tracking-tighter">
                          {activeType === 'absorption' ? podium[0]?.percentage.toFixed(1) : activeType === 'ikpa' ? podium[0]?.ikpa : activeType === 'physical' ? podium[0]?.physicalProgress : podium[0]?.earlyBirdScore}
                        </span>
                        <span className="text-sm font-bold text-slate-400">{current.unit}</span>
                     </div>
                  </div>
              </motion.div>

              {/* Gold Winner */}
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.8, y: 150 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 15 }}
                className="flex-[1.5] flex flex-col items-center gap-10 relative z-20 group/winner"
              >
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-24 text-amber-500"
                  >
                    <Trophy size={80} strokeWidth={1} className="filter drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]" />
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full"
                    />
                  </motion.div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500/30 blur-3xl rounded-full scale-[2] animate-pulse" />
                    <div className="relative w-40 h-40 rounded-[3rem] bg-slate-900 border-4 border-amber-400/50 shadow-[0_0_80px_rgba(245,158,11,0.3)] flex items-center justify-center group-hover/winner:scale-110 transition-transform duration-700 overflow-hidden ring-8 ring-white/10">
                       <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-white/10" />
                       <span className="text-6xl font-black text-white italic font-display">{podium[1]?.name.substring(0, 1)}</span>
                    </div>
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-amber-300 via-amber-500 to-orange-600 rounded-[1.8rem] border-6 border-white shadow-2xl flex items-center justify-center text-2xl font-black text-white ring-8 ring-amber-500/10">1</div>
                  </div>

                  <div className="w-full h-64 bg-slate-900 rounded-t-[3.5rem] border-x-4 border-t-4 border-amber-400/20 shadow-[0_50px_100px_rgba(0,0,0,0.4)] flex flex-col items-center pt-12 relative overflow-hidden">
                     {/* Cyber Grid Pattern */}
                     <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                     
                     <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                     <span className="text-[12px] font-black text-amber-400 uppercase tracking-[0.3em] mb-4 px-6 text-center leading-tight drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] font-display">{podium[1]?.name}</span>
                     <div className="flex flex-col items-center">
                        <div className="flex items-baseline gap-2">
                           <span className="text-7xl font-black text-white tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                             {activeType === 'absorption' ? podium[1]?.percentage.toFixed(1) : activeType === 'ikpa' ? podium[1]?.ikpa : activeType === 'physical' ? podium[1]?.physicalProgress : podium[1]?.earlyBirdScore}
                           </span>
                           <span className="text-2xl font-black text-white/30">{current.unit}</span>
                        </div>
                        <div className="mt-4 px-4 py-1.5 bg-amber-400/10 rounded-full border border-amber-400/20 flex items-center gap-2">
                           <Medal size={16} className="text-amber-400" />
                           <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Juara Utama</span>
                        </div>
                     </div>
                  </div>
              </motion.div>

              {/* Bronze Medalist */}
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="flex-1 flex flex-col items-center gap-8"
              >
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-400/20 blur-2xl rounded-full animate-pulse" />
                    <div className="relative w-24 h-24 rounded-[2.2rem] bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-white shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                       <span className="text-3xl font-black text-orange-400 font-display">{podium[2]?.name.substring(0, 1)}</span>
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-orange-400 rounded-2xl border-4 border-white flex items-center justify-center text-xs font-black text-white shadow-2xl">3</div>
                  </div>

                  <div className="w-full h-36 bg-white/60 backdrop-blur-md rounded-t-[2.5rem] border-x-2 border-t-2 border-white/90 shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex flex-col items-center pt-8 relative overflow-hidden">
                     <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 px-4 text-center leading-tight">{podium[2]?.name}</span>
                     <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-slate-800 tracking-tighter">
                          {activeType === 'absorption' ? podium[2]?.percentage.toFixed(1) : activeType === 'ikpa' ? podium[2]?.ikpa : activeType === 'physical' ? podium[2]?.physicalProgress : podium[2]?.earlyBirdScore}
                        </span>
                        <span className="text-sm font-bold text-slate-400">{current.unit}</span>
                     </div>
                  </div>
              </motion.div>
           </div>
           
           {/* Global Achievement Indicator */}
           <div className="relative z-20 flex flex-col items-center gap-4">
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-indigo-200 to-transparent" />
              <div className="flex items-center gap-4 px-8 py-3 bg-white/40 rounded-full border border-white/60 shadow-lg group-hover:bg-white/60 transition-all duration-500">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                 <span className="text-[11px] font-black text-slate-900 tracking-[0.1em] uppercase font-display">Intensitas Kompetisi: <span className="text-indigo-600">TINGGI</span></span>
              </div>
           </div>
        </div>

        {/* High-Impact Rankings List */}
        <div className="col-span-12 lg:col-span-7 flex flex-col h-full bg-slate-900/5 backdrop-blur-2xl rounded-[3.5rem] border border-white/60 p-8 shadow-2xl">
           <header className="flex items-end justify-between mb-10 px-4">
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg transform rotate-3`}>
                      {current.icon}
                    </div>
                    <span className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.4em] font-display">{current.subtitle}</span>
                 </div>
                 <h3 className="text-4xl font-black text-slate-900 tracking-[-0.04em] uppercase italic leading-none font-display">{current.title}</h3>
              </div>
              <div className="flex flex-col items-end">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Tren Mingguan</span>
                 <div className="flex items-center gap-3 p-2 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                    <TrendingUp size={18} className="text-emerald-600" />
                    <span className="text-emerald-700 font-black text-lg tracking-tighter">+8.4%</span>
                 </div>
              </div>
           </header>

           <div className="space-y-4 custom-scrollbar overflow-y-auto pr-2 max-h-[600px]">
             <AnimatePresence mode="popLayout">
               {sortedData.map((dir, index) => (
                 <motion.div
                   key={dir.id}
                   layout
                   initial={{ opacity: 0, x: 100 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -100 }}
                   transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                   className={`group relative flex items-center gap-6 p-6 rounded-[2.5rem] border transition-all duration-700 ${
                     index === 0 
                     ? 'bg-slate-900 text-white border-transparent shadow-[0_30px_60px_rgba(0,0,0,0.3)] scale-[1.03] z-20' 
                     : 'bg-white/80 border-white hover:border-indigo-100 hover:shadow-xl hover:scale-[1.01]'
                   }`}
                 >
                   {/* Rank visualization */}
                   <div className="relative">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black italic text-xl transition-all duration-500 ${
                        index === 0 ? 'bg-amber-400 text-slate-900 rotate-12 group-hover:rotate-0' : 
                        index === 1 ? 'bg-slate-100 text-slate-800' : 
                        index === 2 ? 'bg-orange-50 text-orange-600' : 
                        'bg-slate-50 text-slate-300'
                      }`}>
                        {index + 1}
                      </div>
                      {index === 0 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center">
                          <CheckCircle2 size={10} className="text-white" />
                        </div>
                      )}
                   </div>

                   <div className="flex-1 min-w-0">
                      <div className="flex items-end justify-between mb-4">
                         <div className="flex flex-col gap-1.5 flex-1 min-w-0 pr-4">
                            <h4 className={`text-base font-black truncate uppercase tracking-tight font-display ${index === 0 ? 'text-white' : 'text-slate-900'}`}>
                              {dir.name}
                            </h4>
                            <div className="flex items-center gap-4">
                               <div className="flex items-center gap-1.5 bg-slate-500/5 px-3 py-1 rounded-full">
                                  <Activity size={10} className={index === 0 ? 'text-amber-400' : 'text-indigo-400'} />
                                  <span className={`text-[9px] font-black uppercase tracking-widest ${index === 0 ? 'text-white/40' : 'text-slate-400'}`}>Operasi Aktif</span>
                               </div>
                               <div className="flex items-center gap-1.5">
                                  <div className={`w-1.5 h-1.5 rounded-full ${index < 3 ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`} />
                                  <span className={`text-[9px] font-black uppercase ${index < 3 ? 'text-emerald-500' : 'text-amber-500'}`}>{index < 3 ? 'Reliabilitas Tinggi' : 'Dalam Tinjauan'}</span>
                               </div>
                            </div>
                         </div>
                         <div className="flex flex-col items-end">
                            <div className="flex items-baseline gap-1 bg-slate-500/5 px-4 py-1 rounded-2xl">
                               <span className={`text-3xl font-black tracking-tighter ${index === 0 ? 'text-amber-400' : 'text-slate-900'}`}>
                                 {activeType === 'absorption' ? dir.percentage.toFixed(1) : activeType === 'ikpa' ? dir.ikpa : activeType === 'physical' ? dir.physicalProgress : dir.earlyBirdScore}
                               </span>
                               <span className={`text-sm font-bold ${index === 0 ? 'text-white/30' : 'text-slate-300'}`}>{current.unit}</span>
                            </div>
                         </div>
                      </div>
                      
                      {/* Advanced Progress Bar with Neon Glow */}
                      <div className={`relative h-2.5 rounded-full overflow-hidden ${index === 0 ? 'bg-white/10' : 'bg-slate-100'}`}>
                         <motion.div
                           initial={{ width: 0 }}
                           animate={{ width: `${activeType === 'absorption' ? dir.percentage : activeType === 'ikpa' ? dir.ikpa : activeType === 'physical' ? dir.physicalProgress : dir.earlyBirdScore}%` }}
                           transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                           className={`h-full relative rounded-full ${
                             index === 0 ? 'bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.5)]' : 
                             index === 1 ? 'bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.2)]' : 
                             index === 2 ? 'bg-indigo-400' : 
                             'bg-slate-300'
                           }`}
                         >
                            {index === 0 && (
                              <div className="absolute inset-0 bg-shimmer opacity-50" style={{ transform: 'skewX(-20deg)' }} />
                            )}
                         </motion.div>
                      </div>
                   </div>

                   {/* Micro-interaction icon */}
                   <div className="w-14 h-14 flex items-center justify-center rounded-3xl bg-slate-500/5 group-hover:bg-indigo-500/10 transition-colors duration-500">
                      <ArrowUpRight size={20} className={`transition-all duration-500 ${index === 0 ? 'text-amber-400' : 'text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
                   </div>
                 </motion.div>
               ))}
             </AnimatePresence>
           </div>
           
           <footer className="mt-8 flex items-center justify-between px-4 pt-6 border-top border-white/20">
              <div className="flex items-center gap-2">
                 <Clock size={14} className="text-slate-400" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pembaruan Langsung: <span className="text-indigo-600">Setiap 10d</span></span>
              </div>
              <button className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] hover:text-indigo-800 transition-colors flex items-center gap-2">
                 Lihat Rincian Historis <ChevronRight size={14} />
              </button>
           </footer>
        </div>
      </div>
    </div>
  );
};

// Utils
const formatIDR = (val: number) => 
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

const StatCard = ({ title, value, subValue, icon: Icon, trend, color, active, percentage = 62.5, tooltip }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-1 relative transition-all duration-300 ${active ? 'ring-2 ring-indigo-200' : ''}`}
  >
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center gap-1.5 group relative">
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{title}</span>
        {tooltip && (
          <div className="relative">
            <Info size={12} className="text-slate-300 cursor-help" />
            <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-slate-900 text-white text-[9px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl leading-relaxed">
              {tooltip}
            </div>
          </div>
        )}
      </div>
      {trend && (
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ${trend > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
          {trend > 0 ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
          {Math.abs(trend)}%
        </span>
      )}
    </div>
    <h3 className={`text-xl font-black font-display tracking-tight ${active ? 'text-indigo-700' : 'text-slate-800'}`}>{value}</h3>
    <div className="mt-1 flex items-center gap-2">
      {active ? (
        <>
          <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden relative">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: `${percentage}%` }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="bg-indigo-600 h-full relative"
             >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
             </motion.div>
          </div>
          <span className="text-[10px] font-bold text-indigo-700">{percentage}%</span>
        </>
      ) : (
        <p className={`text-[10px] font-medium ${title === 'Skor IKPA' ? 'text-slate-500' : 'text-slate-400 italic'}`}>
          {title === 'Skor IKPA' ? 'Kategori: ' : ''}
          <span className={title === 'Skor IKPA' ? 'text-emerald-600 ml-1' : ''}>{subValue}</span>
        </p>
      )}
    </div>
  </motion.div>
);

export default function App() {
  const [selectedDirectorate, setSelectedDirectorate] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'overview' | 'detail' | 'leaderboard'>('overview');
  const [leaderboardType, setLeaderboardType] = useState<'absorption' | 'ikpa' | 'physical' | 'earlybird'>('absorption');
  const [isAutoSlide, setIsAutoSlide] = useState<boolean>(false);
  const [isTvMode, setIsTvMode] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastUpdateTime, setLastUpdateTime] = useState<string>(new Date().toLocaleTimeString());

  // Real-time Data Simulation
  const [realtimeDirectorates, setRealtimeDirectorates] = useState(DIRECTORATES);
  const [realtimeActivities, setRealtimeActivities] = useState(ACTIVITIES);

  // Update Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // TV Mode Auto Rotation Logic
  useEffect(() => {
    let interval: any;
    if (isTvMode) {
      interval = setInterval(() => {
        setActiveTab(prev => {
          if (prev === 'overview') return 'detail';
          if (prev === 'detail') return 'leaderboard';
          return 'overview';
        });
      }, 15000); // Rotate every 15 seconds for cinematic effect
    }
    return () => clearInterval(interval);
  }, [isTvMode]);

  // Auto Cycle Leaderboard
  useEffect(() => {
    let interval: any;
    if (activeTab === 'leaderboard') {
      interval = setInterval(() => {
        setLeaderboardType(prev => {
          if (prev === 'absorption') return 'ikpa';
          if (prev === 'ikpa') return 'physical';
          if (prev === 'physical') return 'earlybird';
          return 'absorption';
        });
      }, 10000); // Cycle every 10 seconds
    }
    return () => clearInterval(interval);
  }, [activeTab]);

  // Auto Slide Logic
  useEffect(() => {
    let interval: any;
    if (isAutoSlide) {
      interval = setInterval(() => {
        setSlideIndex(prev => {
          const totalDir = DIRECTORATES.length;
          const hasCritical = realtimeActivities.some(a => a.status === 'alert');
          const totalSlides = (totalDir * 2) + (hasCritical ? 2 : 1);
          const next = (prev + 1) % totalSlides;
          
          if (next === 0) {
            setSelectedDirectorate('all');
            setActiveTab('overview');
          } else if (hasCritical && next === totalSlides - 1) {
             setSelectedDirectorate('all');
             setActiveTab('detail');
          } else {
            const dirIndex = Math.floor((next - 1) / 2);
            const isDetail = (next - 1) % 2 === 1;
            if (dirIndex < totalDir) {
              setSelectedDirectorate(DIRECTORATES[dirIndex].id);
              setActiveTab(isDetail ? 'detail' : 'overview');
            } else {
               setSelectedDirectorate('all');
               setActiveTab('overview');
               return 0;
            }
          }
          return next;
        });
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isAutoSlide, realtimeActivities]);

  const handleManualSelection = (dir: string) => {
    setSelectedDirectorate(dir);
    if (!isAutoSlide) {
      if (dir === 'all') {
        setSlideIndex(0);
      } else {
        const idx = DIRECTORATES.findIndex(d => d.id === dir);
        if (idx !== -1) {
          setSlideIndex(activeTab === 'overview' ? idx * 2 + 1 : idx * 2 + 2);
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRealtimeDirectorates(prev => prev.map(dir => {
        const shouldUpdate = Math.random() > 0.8;
        if (shouldUpdate) {
          const increment = Math.floor(Math.random() * 20000000) + 5000000;
          const newRealization = Math.min(dir.realization + increment, dir.pagu);
          setLastUpdateTime(new Date().toLocaleTimeString());
          return { ...dir, realization: newRealization, percentage: (newRealization / dir.pagu) * 100 };
        }
        return dir;
      }));

      setRealtimeActivities(prev => prev.map(act => {
        const shouldUpdate = Math.random() > 0.8;
        if (shouldUpdate) {
          const increment = Math.floor(Math.random() * 5000000) + 1000000;
          const newRealization = Math.min(act.realization + increment, act.pagu);
          const physicalIncrement = Math.random() > 0.5 ? 1 : 0;
          const newVolumeActual = Math.min(act.volumeActual + physicalIncrement, act.volumeTarget);
          setLastUpdateTime(new Date().toLocaleTimeString());
          return { 
            ...act, 
            realization: newRealization, 
            percentage: (newRealization / act.pagu) * 100,
            volumeActual: newVolumeActual
          };
        }
        return act;
      }));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const stats = useMemo(() => {
    const totalPagu = realtimeDirectorates.reduce((acc, curr) => acc + curr.pagu, 0);
    const totalRealization = realtimeDirectorates.reduce((acc, curr) => acc + curr.realization, 0);
    const percentage = (totalRealization / totalPagu) * 100;
    return {
      totalPagu,
      totalRealization,
      percentage,
      remaining: totalPagu - totalRealization,
      ikpa: 94.8,
      deviation: 4.2
    };
  }, [realtimeDirectorates]);

  const filteredData = useMemo(() => {
    if (selectedDirectorate === 'all') return realtimeDirectorates;
    return realtimeDirectorates.filter(d => d.id === selectedDirectorate);
  }, [selectedDirectorate, realtimeDirectorates]);

  const filteredActivities = useMemo(() => {
    if (selectedDirectorate === 'all') return realtimeActivities;
    return realtimeActivities.filter(a => a.directorateId === selectedDirectorate);
  }, [selectedDirectorate, realtimeActivities]);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-[#1e293b] flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm px-6 py-3">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-8">
          {/* Logo & Brand */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-indigo-500/20 transform -rotate-3">
              O
            </div>
            <div>
              <h1 className="text-base font-black text-slate-900 uppercase tracking-tighter leading-none font-display">DASHBOARD MONITORING</h1>
              <p className="text-[10px] text-indigo-600 font-black uppercase mt-1 tracking-widest">DITJEN OTONOMI DAERAH</p>
            </div>
          </div>

          <nav className="flex items-center gap-1.5 bg-slate-100/50 p-1.5 rounded-2xl shrink-0 backdrop-blur-md border border-white/50">
            <button 
              onClick={() => { setActiveTab('overview'); setIsAutoSlide(false); }}
              className={`flex items-center gap-2.5 px-6 py-2 rounded-xl text-xs font-black transition-all duration-300 transform font-display ${activeTab === 'overview' ? 'bg-white text-indigo-700 shadow-xl scale-105' : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'}`}
            >
              <BarChart3 size={16} strokeWidth={2.5} />
              Summary Eksekutif
            </button>
            <button 
              onClick={() => { setActiveTab('detail'); setIsAutoSlide(false); }}
              className={`flex items-center gap-2.5 px-6 py-2 rounded-xl text-xs font-black transition-all duration-300 transform font-display ${activeTab === 'detail' ? 'bg-white text-indigo-700 shadow-xl scale-105' : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'}`}
            >
              <Activity size={16} strokeWidth={2.5} />
              Monitoring Detail
            </button>
            <button 
              onClick={() => { setActiveTab('leaderboard'); setIsAutoSlide(false); }}
              className={`flex items-center gap-2.5 px-6 py-2 rounded-xl text-xs font-black transition-all duration-300 transform font-display ${activeTab === 'leaderboard' ? 'bg-white text-indigo-700 shadow-xl scale-105' : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'}`}
            >
              <Trophy size={16} strokeWidth={2.5} />
              Leaderboard
            </button>
          </nav>

          {/* Auto-Slide Control */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl shrink-0">
            <button 
              onClick={() => { setIsTvMode(!isTvMode); if(!isTvMode) setActiveTab('overview'); }}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg text-[10px] font-black transition-all uppercase tracking-wider ${isTvMode ? 'bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-200' : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'}`}
            >
              <Monitor size={12} className={isTvMode ? 'animate-pulse' : ''} />
              {isTvMode ? 'TV MODE: ON' : 'TV MODE'}
            </button>
            <div className="w-[1px] h-4 bg-slate-200 mx-1" />
            <button 
              onClick={() => { setIsAutoSlide(!isAutoSlide); if(!isAutoSlide) setSlideIndex(0); }}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${isAutoSlide ? 'bg-amber-100 text-amber-700 shadow-sm ring-1 ring-amber-200' : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'}`}
            >
              {isAutoSlide ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
              {isAutoSlide ? 'BERHENTI MONITOR' : 'MULAI MODE MONITOR'}
            </button>
            {isAutoSlide && (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[9px] font-bold rounded-md animate-pulse">
                <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                {selectedDirectorate === 'all' && activeTab === 'detail' ? 'URGENT: HAMBATAN KRITIS' : `TAMPILAN: ${activeTab === 'overview' ? 'RINGKASAN' : 'DETAIL'} - ${selectedDirectorate === 'all' ? 'SEMUA' : DIRECTORATES.find(d => d.id === selectedDirectorate)?.name.split(' ')[0]}`}
              </div>
            )}
          </div>

          {/* Filters Section */}
          <div className="flex-1 flex items-center justify-center gap-4 hidden lg:flex">
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">TA:</span>
                <select className="bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-bold rounded-lg px-2 py-1.5 outline-none focus:ring-2 ring-indigo-100">
                  <option>2024</option>
                  <option>2023</option>
                </select>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Unit:</span>
                <select 
                  value={selectedDirectorate}
                  onChange={(e) => setSelectedDirectorate(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-bold rounded-lg px-2 py-1.5 outline-none focus:ring-2 ring-indigo-100 max-w-[200px]"
                >
                  <option value="all">Semua Direktorat</option>
                  {DIRECTORATES.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
             </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-[10px] font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-all border border-slate-200">
              <Download size={14} />
              EXCEL
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all shadow-md shadow-indigo-100">
              <Download size={14} />
              EXPORT PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 max-w-[1600px] mx-auto w-full">
        {/* Sub Header / Breadcrumb */}
        <div className="mb-6 flex justify-between items-end">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
               <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase font-display italic">
                {activeTab === 'overview' ? 'Summary Eksekutif' : activeTab === 'detail' ? 'Monitoring Detail' : 'Leaderboard Performa'}
              </h2>
              <div className="h-5 w-[1px] bg-slate-300 mx-1" />
              <span className="text-indigo-600 font-extrabold bg-indigo-50 px-4 py-1 rounded-xl border border-indigo-100 text-sm uppercase tracking-tighter">
                {selectedDirectorate === 'all' ? 'Seluruh Direktorat Ditjen Otda' : realtimeDirectorates.find(d => d.id === selectedDirectorate)?.name}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-bold uppercase mt-1">Sistem Pemantauan Terintegrasi • Kedeputian Bidang Otonomi Daerah • 2024</p>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold">
             <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 shadow-inner">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] text-slate-400 uppercase tracking-tighter">Jakarta (WIB)</span>
                  <span className="text-slate-800 font-black">{currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                </div>
                <div className="w-[1px] h-6 bg-slate-200" />
                <div className="flex flex-col items-center opacity-60">
                  <span className="text-[9px] text-slate-400 uppercase tracking-tighter">Jayapura (WIT)</span>
                  <span className="text-slate-800 font-black">{new Date(currentTime.getTime() + 2 * 3600000).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
             </div>
             <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5 uppercase tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-600">MONITORING LANGSUNG AKTIF</span>
              </div>
              <span className="text-[8px] text-slate-300 font-medium">UPDATE TERAKHIR: {lastUpdateTime}</span>
            </div>
          </div>
        </div>

        {/* Ticker Bar */}
        <div className="mb-6 bg-slate-900 text-white rounded-lg py-1.5 px-4 flex items-center gap-4 overflow-hidden shadow-lg border-y border-slate-700">
           <div className="flex items-center gap-2 shrink-0 bg-rose-600 px-3 py-0.5 rounded text-[10px] font-black uppercase italic animate-pulse">
              <Bell size={12} fill="white" /> Pesan Berjalan
           </div>
           <div className="flex-1 whitespace-nowrap overflow-hidden">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-12 text-[11px] font-bold uppercase tracking-wide"
              >
                 <span className="flex items-center gap-2"><Zap size={12} className="text-amber-400" /> Atensi: Serapan Direktorat Penataan Daerah perlu percepatan di komponen Verifikasi Lapangan (DOB).</span>
                 <span className="flex items-center gap-2 text-emerald-400"><CheckCircle2 size={12} /> Milestone: 95% Naskah Akademik Direktorat Otsus telah diselesaikan tepat waktu.</span>
                 <span className="flex items-center gap-2"><AlertCircle size={12} className="text-rose-400" /> Warning: Deviasi RPD &gt; 5% ditemukan pada 4 komponen belanja di Kedeputian Otda.</span>
                 <span className="flex items-center gap-2 text-sky-400"><Globe size={12} /> Update: Data Integrasi Pemerintah Provisi Papua Barat Daya telah masuk ke sistem monitoring.</span>
                 <span className="flex items-center gap-2 text-rose-400 font-black"><AlertCircle size={12} /> FKKPD ALERT: Validasi ABK di 5 Provinsi melampaui SLA 7 hari kerja.</span>
                 <span className="flex items-center gap-2 text-emerald-400"><CheckCircle2 size={12} /> FKKPD SUCCESS: Sistem e-Mutasi mencatat rekor akurasi data 99.8% bulan ini.</span>
                 <span className="flex items-center gap-2 text-amber-400"><Zap size={12} /> FKKPD: SLA e-Mutasi mencapai 98% di Kuartal I, peningkatan signifikan dari tahun lalu.</span>
                 <span className="flex items-center gap-2"><Target size={12} className="text-indigo-400" /> SOTK: Penataan Kelembagaan di DOB baru telah mencapai tahap evaluasi akhir.</span>
              </motion.div>
        </div>
        </div>

        {activeTab === 'overview' ? (
          <>
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
              <StatCard 
                title="Total Pagu (RM+H)" 
                value="Rp 1.25 T" 
                subValue="Alokasi Strategis"
                icon={TrendingUp}
                color="slate"
              />
              <StatCard 
                title="Realisasi" 
                value={formatIDR(stats.totalRealization)} 
                subValue={`Tercapai ${stats.percentage.toFixed(1)}%`}
                active={true}
                percentage={stats.percentage.toFixed(1)}
                icon={Wallet}
                color={stats.percentage > 40 ? "emerald" : "indigo"}
              />
              <StatCard 
                title="Sisa Anggaran" 
                value={formatIDR(stats.remaining)} 
                subValue="Tersisa untuk K3-K4"
                icon={Activity}
                color="slate"
              />
              <StatCard 
                title="Skor IKPA" 
                value={stats.ikpa} 
                subValue="Target: 95.00"
                icon={Target}
                color="emerald"
                tooltip="Indikator Kinerja Pelaksanaan Anggaran (IKPA) adalah alat ukur kualitas kinerja pelaksanaan anggaran berdasarkan kriteria: Akurasi RPD, Minim Revisi DIPA, dan Kecepatan Penerbitan SPM."
              />
              <StatCard 
                title="Status Deviasi" 
                value={`${stats.deviation}%`} 
                subValue={stats.deviation > 5 ? "Tindakan Diperlukan" : "Dalam Batas Aman"}
                icon={AlertTriangle}
                color={stats.deviation > 5 ? "rose" : "amber"}
              />
            </div>

            {selectedDirectorate === '6' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6"
              >
                <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 p-5 rounded-2xl shadow-xl border border-indigo-400/20 text-white flex flex-col justify-between">
                   <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[12px] font-black uppercase tracking-widest text-indigo-200">Pelacak Mutasi (e-Mutasi)</h4>
                        <div className="px-2 py-1 bg-emerald-500 rounded text-[9px] font-black uppercase animate-pulse">SLA AKTIF</div>
                      </div>
                      <div className="flex items-end gap-3 mb-4">
                         <span className="text-4xl font-black">3,500</span>
                         <span className="text-indigo-200 text-sm font-bold pb-1">SK Selesai / 5,000 Masuk</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold text-indigo-300">
                           <span>Kecepatan Proses</span>
                           <span>98.2% Akurasi</span>
                        </div>
                        <div className="h-2 bg-indigo-950 rounded-full overflow-hidden border border-indigo-500/20">
                           <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: '70.2%' }}
                             transition={{ duration: 2, delay: 0.5 }}
                             className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                           />
                        </div>
                      </div>
                   </div>
                   <p className="mt-4 text-[10px] text-indigo-200/60 font-medium italic">*Pemantauan real-time permohonan mutasi antar-daerah.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-200 flex flex-col justify-between">
                   <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-500">Regional Penataan SOTK</h4>
                        <Globe size={18} className="text-indigo-600" />
                      </div>
                      <div className="flex items-center gap-6">
                         <div className="text-center">
                            <span className="block text-3xl font-black text-slate-800">15</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">OPD Disetujui</span>
                         </div>
                         <div className="w-[1px] h-10 bg-slate-100" />
                         <div className="text-center">
                            <span className="block text-3xl font-black text-slate-800">23</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Dalam Evaluasi</span>
                         </div>
                      </div>
                   </div>
                   <div className="mt-6 flex gap-1 h-3">
                      {[...Array(38)].map((_, i) => (
                        <div key={i} className={`flex-1 rounded-sm ${i < 15 ? 'bg-emerald-500' : i < 23 ? 'bg-amber-400' : 'bg-slate-100'}`} />
                      ))}
                   </div>
                   <p className="mt-3 text-[10px] text-slate-400 font-bold uppercase tracking-tighter flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-500" /> Progres Nasional: 39%
                   </p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-200 overflow-hidden relative">
                   <div className="relative z-10">
                      <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-500 mb-6">Efisiensi Pelatihan</h4>
                      <div className="flex items-center gap-4">
                         <div className="relative w-24 h-24">
                            <svg className="w-full h-full transform -rotate-90">
                               <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                               <motion.circle 
                                 cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" 
                                 strokeDasharray={251.2}
                                 initial={{ strokeDashoffset: 251.2 }}
                                 animate={{ strokeDashoffset: 251.2 - (251.2 * 0.85) }}
                                 transition={{ duration: 2 }}
                                 className="text-indigo-600" 
                               />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                               <span className="text-lg font-black text-slate-800">85%</span>
                               <span className="text-[8px] font-black text-indigo-600 uppercase">Input</span>
                            </div>
                         </div>
                         <div className="flex-1 space-y-3">
                            <div>
                               <span className="text-[9px] font-black text-slate-400 uppercase block">Biaya Per Kapita</span>
                               <span className="text-sm font-black text-slate-800">Rp 1.250.000</span>
                            </div>
                            <div>
                               <span className="text-[9px] font-black text-slate-400 uppercase block">Skor Dampak</span>
                               <div className="flex gap-0.5">
                                 {[1,2,3,4,5].map(s => <Zap key={s} size={10} fill={s <= 4 ? "#4f46e5" : "#e2e8f0"} className={s <= 4 ? "text-indigo-600" : "text-slate-200"} />)}
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="absolute top-0 right-0 p-3 opacity-5">
                      <Trophy size={80} />
                   </div>
                </div>
              </motion.div>
            )}

            {/* Charts & Leaderboard Row */}
            <div className="grid grid-cols-12 gap-3 mb-6 h-[320px]">
              {/* Leaderboard Chart */}
              <div className="col-span-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col">
                <div className="flex items-center justify-between mb-4 border-b border-slate-50 pb-2">
                   <h3 className="text-[10px] font-black text-slate-700 uppercase tracking-tighter flex items-center gap-2">
                      <Trophy size={14} className="text-amber-500" /> UNIT DENGAN KINERJA TERBAIK
                   </h3>
                </div>
                <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                   {[...DIRECTORATES].sort((a, b) => b.ikpa - a.ikpa).map((d, index) => (
                     <motion.div 
                        key={d.id} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-50 rounded-lg p-2.5 border border-slate-100 flex items-center gap-3"
                      >
                       <div className={`w-6 h-6 rounded-md flex items-center justify-center font-black text-[10px] ${index === 0 ? 'bg-amber-100 text-amber-600' : index === 1 ? 'bg-slate-200 text-slate-600' : 'bg-orange-100 text-orange-600'}`}>
                         {index + 1}
                       </div>
                       <div className="flex-1 min-w-0">
                         <p className="text-[10px] font-bold text-slate-700 truncate uppercase mt-0.5">{d.name.replace('Direktorat ', 'Dir. ')}</p>
                         <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-200 h-1 rounded-full overflow-hidden relative">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 animate={{ width: `${(d.ikpa/100)*100}%` }}
                                 transition={{ duration: 2, ease: "easeInOut" }}
                                 className="bg-indigo-500 h-full relative"
                               >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                               </motion.div>
                            </div>
                            <span className="text-[9px] font-black text-indigo-600 italic">Skor: {d.ikpa}</span>
                         </div>
                       </div>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* S-Curve Chart (Main focus for monitor) */}
              <div className="col-span-6 bg-white p-4 rounded-xl shadow-sm border border-slate-200 relative">
                <div className="flex justify-between items-center mb-4">
                   <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">KONDISI REALISASI VS TARGET (S-CURVE)</h3>
                   <div className="flex gap-3 text-[9px] font-black">
                      <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-indigo-500" /> AKTUAL</div>
                      <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded border border-slate-400 border-dashed" /> TARGET</div>
                   </div>
                </div>
                <div className="h-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={MONTHLY_TRENDS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis 
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 9, fontWeight: 700}}
                        interval={0}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 9, fontWeight: 700}}
                      />
                      <Tooltip 
                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '10px' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="actual" 
                        stroke="#4f46e5" 
                        strokeWidth={4}
                        fill="url(#colorActual)" 
                        animationBegin={0}
                        animationDuration={1500}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="target" 
                        stroke="#94a3b8" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        fill="transparent"
                        animationBegin={1500}
                        animationDuration={1500}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="absolute top-20 right-8 bg-indigo-50/50 backdrop-blur-sm p-3 rounded-lg border border-indigo-100 flex flex-col items-center shadow-sm">
                   <span className="text-[9px] font-bold text-indigo-500 uppercase">Kinerja Saat Ini</span>
                   <span className="text-xl font-black text-indigo-700 tracking-tighter">BAIK</span>
                   <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 mt-0.5">
                      <ArrowUpRight size={10} /> +2.4% vs Bulan Lalu
                   </div>
                </div>
              </div>

              {/* Composition Pie */}
              <div className="col-span-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col">
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">KOMPOSISI ANGGARAN JENIS BELANJA</h3>
                <div className="flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={SPENDING_TYPES}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={75}
                        paddingAngle={5}
                        dataKey="value"
                        animationDuration={1500}
                      >
                        {SPENDING_TYPES.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-1 gap-2 mt-4 bg-slate-50 p-3 rounded-xl border border-slate-100 shadow-inner">
                  {SPENDING_TYPES.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-[10px] font-black">
                      <div className="flex items-center gap-2 text-slate-600">
                        <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                        <span className="uppercase tracking-tighter">{item.name}</span>
                      </div>
                      <span className="text-slate-900">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : activeTab === 'detail' ? (
          <div className="grid grid-cols-12 gap-3 h-[calc(100vh-280px)]">
            <div className="col-span-12 lg:col-span-9 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                 <div className="flex items-center gap-3">
                    <Activity size={18} className="text-indigo-600" />
                    <h3 className="text-[14px] font-bold text-slate-700 uppercase tracking-tight">MONITORING DETAIL KEGIATAN & OUTPUT SUBSTANSI</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-bold italic bg-slate-100 px-3 py-1 rounded-full">Sorted by Account Code</span>
              </div>
              <div className="flex-1 overflow-auto custom-scrollbar">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] font-bold tracking-wider sticky top-0 z-10">
                    <tr className="border-b border-slate-100">
                      <th className="px-5 py-4">Komponen Anggaran</th>
                      <th className="px-5 py-4">Akun</th>
                      <th className="px-5 py-4">Pagu</th>
                      <th className="px-5 py-4">Realisasi</th>
                      <th className="px-5 py-4 text-center">Progres Fisik</th>
                      <th className="px-5 py-4">Sisa Vol</th>
                      <th className="px-5 py-4">Status & Hasil</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-[12px] font-semibold">
                    {filteredActivities.map((d) => {
                      const physicalProgress = (d.volumeActual / d.volumeTarget) * 100;
                      const isBurnRateHigh = d.percentage > physicalProgress + 15;
                      const accountColor = d.accountCode.startsWith('524') ? 'bg-blue-100 text-blue-700' : d.accountCode.startsWith('522') ? 'bg-amber-100 text-amber-700' : d.accountCode.startsWith('521') ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-700';

                      return (
                        <tr key={d.id} className={`hover:bg-slate-50 group transition-colors ${d.status === 'alert' || isBurnRateHigh ? 'bg-rose-50/20' : d.status === 'warning' ? 'bg-amber-50/20' : ''}`}>
                          <td className="px-5 py-4 text-slate-700 max-w-sm font-bold leading-tight">{d.name}</td>
                          <td className="px-5 py-4">
                             <span className={`px-2.5 py-1 rounded text-[11px] font-bold ${accountColor}`}>
                               {d.accountCode}
                             </span>
                          </td>
                          <td className="px-5 py-4 text-slate-500">{(d.pagu / 1000000).toFixed(1)} jt</td>
                          <td className="px-5 py-4 text-indigo-600">{(d.realization / 1000000).toFixed(1)} jt</td>
                          <td className="px-5 py-4 text-center">
                             <div className="flex flex-col items-center gap-1.5">
                               <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${physicalProgress}%` }}
                                    className="bg-emerald-500 h-full" 
                                  />
                               </div>
                               <span className="text-[10px] text-slate-500 font-bold">{d.volumeActual} / {d.volumeTarget} {d.unit}</span>
                             </div>
                          </td>
                          <td className="px-5 py-4 text-slate-500 font-bold">
                            {d.volumeTarget - d.volumeActual} {d.unit}
                          </td>
                          <td className={`px-5 py-4 ${d.status === 'alert' || isBurnRateHigh ? 'text-rose-600' : d.status === 'warning' ? 'text-amber-500' : 'text-emerald-600'}`}>
                            <div className="flex flex-col">
                               <div 
                                 className="flex items-center gap-1.5 self-start cursor-help relative group"
                                  onClick={() => setActiveTooltip(activeTooltip === d.id ? null : d.id)}
                                >
                                 <span className="font-black uppercase text-[10px] tracking-wide border-b border-dotted border-current">
                                  {isBurnRateHigh ? '⚠ Serapan Tinggi' : d.status === 'alert' ? 'Kritis' : d.status === 'warning' ? 'Peringatan' : 'Terkendali'}
                                 </span>
                                 
                                 <AnimatePresence>
                                  {activeTooltip === d.id && (
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                      animate={{ opacity: 1, scale: 1, y: 0 }}
                                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                      className="absolute bottom-full left-0 mb-3 w-64 p-4 bg-slate-900 text-white rounded-2xl shadow-2xl z-50 pointer-events-none"
                                    >
                                      <div className="flex items-center gap-2 mb-2 text-indigo-400">
                                        <AlertCircle size={14} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Detail Status</span>
                                      </div>
                                      <p className="text-[11px] font-medium text-slate-300 leading-relaxed mb-3">
                                        {d.status === 'alert' || isBurnRateHigh 
                                          ? 'Kondisi memerlukan perhatian khusus dan langkah mitigasi segera untuk memastikan target tercapai.' 
                                          : d.status === 'warning' 
                                            ? 'Terdapat hambatan minor yang berpotensi mengganggu lini masa jika tidak segera ditangani.' 
                                            : 'Kinerja operasional dan keuangan berjalan selaras dengan rencana penyerahan output.'}
                                      </p>
                                      {d.bottleneck && (
                                        <div className="mt-3 pt-3 border-t border-slate-800">
                                          <span className="text-[9px] font-black text-rose-400 uppercase tracking-tighter block mb-1">Akar Masalah (Bottleneck):</span>
                                          <p className="text-[10px] text-slate-200 italic leading-snug">"{d.bottleneck}"</p>
                                        </div>
                                      )}
                                      <div className="absolute top-full left-4 w-3 h-3 bg-slate-900 rotate-45 -translate-y-1.5" />
                                    </motion.div>
                                  )}
                                 </AnimatePresence>
                               </div>
                               <span className="text-slate-400 font-medium normal-case text-[11px] mt-0.5">{d.outputStatus}</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3 flex flex-col gap-3">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-[12px] font-black text-slate-700 uppercase tracking-tighter mb-5 border-b border-slate-50 pb-3 flex items-center gap-2">
                   <AlertCircle size={16} className="text-amber-500" />
                   Sistem Peringatan Dini
                </h3>
                <div className="space-y-4">
                   <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-100 space-y-2">
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-black text-rose-800 uppercase">Risiko Keuangan</span>
                         <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      </div>
                      <p className="text-[11px] text-rose-700 font-bold leading-tight">Laju serapan terdeteksi tidak wajar pada komponen belanja perjalanan dinas.</p>
                   </div>
                   <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-100 space-y-2">
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-black text-amber-800 uppercase">Akselerasi Target</span>
                      </div>
                      <p className="text-[11px] text-amber-700 font-bold leading-tight">Progress fisik melambat &lt; RPD Bulanan di Direktorat FKDH.</p>
                   </div>
                </div>
              </div>

              <div className="bg-indigo-600 p-5 rounded-xl text-white shadow-lg shadow-indigo-100 flex-1 relative overflow-hidden group">
                 <div className="relative z-10">
                    <h4 className="text-[14px] font-black uppercase tracking-tighter mb-2">Insight AI Eksekutif</h4>
                    <p className="text-[11px] font-medium text-indigo-100 leading-relaxed mb-4">"Berdasarkan pola serapan, disarankan realokasi anggaran pada akun 524 ke akun 521 untuk mengoptimalkan output dokumen di akhir kuartal."</p>
                    <button className="w-full py-2.5 bg-white text-indigo-600 rounded-lg font-bold text-[11px] uppercase tracking-wide hover:bg-indigo-50 transition-all">Lihat Laporan Lengkap</button>
                 </div>
                 <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                    <Activity size={120} />
                 </div>
              </div>
            </div>
          </div>
        ) : (
          <LeaderboardPage 
            directorates={realtimeDirectorates} 
            activeType={leaderboardType} 
            setType={setLeaderboardType} 
          />
        )}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite linear;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}} />
    </div>
  );
}
