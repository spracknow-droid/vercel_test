'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, Github, LayoutGrid } from 'lucide-react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-slate-950 animate-gradient">
      {/* 배경 장식 (빛나는 구체) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-lg">
        {/* 상단 뱃지 */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-medium backdrop-blur-md">
            <Sparkles size={14} />
            <span>Powered by Vercel & Next.js</span>
          </div>
        </div>

        {/* 메인 카드 (Glassmorphism) */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-10 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            
            {/* 아이콘 섹션 */}
            <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-8 rotate-3">
              <LayoutGrid className="text-white w-10 h-10" />
            </div>

            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Interface</span>
            </h1>
            
            <p className="text-slate-400 leading-relaxed mb-10 max-w-[280px]">
              단순한 웹페이지를 넘어, <br/>당신의 아이디어를 시각화합니다.
            </p>

            {/* 인터랙티브 카운터 */}
            <div className="w-full bg-white/5 rounded-3xl p-6 border border-white/5 mb-8 group hover:border-blue-500/30 transition-all">
              <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Live Updates</div>
              <div className="text-6xl font-black text-white tracking-tighter mb-4">{count}</div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setCount(count + 1)}
                  className="flex-1 bg-white text-slate-950 h-14 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all active:scale-95"
                >
                  Get Started <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => setCount(0)}
                  className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <span className="text-xs">Reset</span>
                </button>
              </div>
            </div>

            {/* 하단 푸터 링크 */}
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                <Github size={16} /> GitHub
              </a>
              <div className="w-1 h-1 bg-slate-800 rounded-full" />
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
            </div>
          </div>
        </div>

        {/* 하단 쉐도우 효과 */}
        <p className="text-center mt-10 text-slate-600 text-xs font-medium tracking-widest uppercase">
          © 2026 Innovation Lab
        </p>
      </div>
    </main>
  );
}
