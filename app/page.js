'use client';

import { useState } from 'react';
import { Rocket, ChevronRight, Zap } from 'lucide-react'; // 아이콘

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-50">
      {/* 카드 컨테이너 */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 transition-all hover:shadow-2xl">
        
        {/* 상단 이미지 영역 대체 (그라데이션) */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
          <Rocket className="text-white w-12 h-12 animate-bounce" />
        </div>

        {/* 본문 영역 */}
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Next.js + Tailwind</h1>
          <p className="text-slate-500 mb-8">Vercel에서 가장 세련되게 작동하는 조합입니다.</p>

          {/* 카운터 섹션 */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Current Status</span>
            <div className="text-5xl font-black text-slate-900 my-2">{count}</div>
            
            <div className="flex gap-2 justify-center mt-4">
              <button 
                onClick={() => setCount(count + 1)}
                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95"
              >
                <Zap size={18} /> 증가하기
              </button>
              <button 
                onClick={() => setCount(0)}
                className="px-6 py-3 text-slate-400 hover:text-slate-600 font-medium transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* 하단 링크 안내 */}
          <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:underline decoration-2 underline-offset-4">
            더 많은 기능 알아보기 <ChevronRight size={20} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-slate-400 text-sm">Deployed on Vercel with ✨ Tailwind CSS</p>
    </main>
  );
}
