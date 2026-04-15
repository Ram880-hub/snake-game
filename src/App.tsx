/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import SnakeGame from './components/SnakeGame';
import MusicPlayer from './components/MusicPlayer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/5 blur-[150px] rounded-full" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 h-screen flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* Left Side: Info / Branding */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden xl:flex flex-col gap-4 max-w-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              <span className="text-2xl font-black text-black">N</span>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none">
              Neon<br/><span className="text-cyan-400">Groove</span>
            </h1>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Experience the ultimate fusion of classic arcade gaming and synthwave vibes. 
            Play Snake while diving into AI-generated beats.
          </p>
          <div className="flex flex-col gap-2 mt-4">
            <div className="h-[1px] w-full bg-white/10" />
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/30 font-mono">
              <span>System Status</span>
              <span className="text-cyan-400">Online</span>
            </div>
          </div>
        </motion.div>

        {/* Center: Snake Game */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <SnakeGame />
        </motion.div>

        {/* Right: Music Player */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <MusicPlayer />
        </motion.div>

      </main>

      {/* Footer Branding */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-white/20 font-mono pointer-events-none">
        Neon Groove OS v1.0.4 • 2024
      </div>
    </div>
  );
}

