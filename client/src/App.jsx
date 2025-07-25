// App.jsx
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './index.css';
import './App.css';
import AnalysisPage from './components/AnalysisPage';
import HistoryPage from './components/HistoryPage';

function App() {
  const [activeTab, setActiveTab] = useState('live');

  // 🟣 Mouse background animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      <Toaster position="top-center" reverseOrder={false} />

      <nav className="tabs" role="tablist">
        <button
          className={activeTab === 'live' ? 'active' : ''}
          onClick={() => setActiveTab('live')}
          role="tab"
          aria-current={activeTab === 'live' ? 'page' : undefined}
        >
          Live Resume Analysis
        </button>
        <button
          className={activeTab === 'history' ? 'active' : ''}
          onClick={() => setActiveTab('history')}
          role="tab"
          aria-current={activeTab === 'history' ? 'page' : undefined}
        >
          History Viewer
        </button>
      </nav>

      <main>
        {activeTab === 'live' ? <AnalysisPage /> : <HistoryPage />}
      </main>
    </div>
  );
}

export default App;
