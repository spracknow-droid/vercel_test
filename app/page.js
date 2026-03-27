'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Next.js Web Page</h1>
      <p>Vercel 배포 테스트 중입니다.</p>
      <div style={{ marginTop: '20px' }}>
        <p>현재 숫자: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)} style={buttonStyle}>증가</button>
        <button onClick={() => setCount(0)} style={{...buttonStyle, backgroundColor: '#ccc'}}>초기화</button>
      </div>
    </main>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  margin: '5px',
  cursor: 'pointer',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  border-radius: '5px'
};
