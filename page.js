// app/page.js
'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>Next.js on Vercel</h1>
        <p style={styles.description}>
          상태 관리가 가능한 현대적인 웹페이지입니다.
        </p>
        
        <div style={styles.counterSection}>
          <h2>현재 카운트: {count}</h2>
          <button style={styles.button} onClick={() => setCount(count + 1)}>
            숫자 올리기
          </button>
          <button style={{...styles.button, backgroundColor: '#ff4d4f'}} onClick={() => setCount(0)}>
            초기화
          </button>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#fafafa',
  },
  card: {
    padding: '3rem',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
    textAlign: 'center',
  },
  title: { fontSize: '2rem', color: '#000' },
  description: { color: '#666', marginBottom: '2rem' },
  button: {
    margin: '0 5px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};
