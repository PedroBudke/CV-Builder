import React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-700 flex items-center justify-center text-white">
      <div className="text-center p-8 rounded-lg bg-black bg-opacity-30 backdrop-blur-sm">
        <h1 className="text-5xl font-black mb-4">CV Builder</h1>
        <p className="text-xl opacity-90">FrontEdn iniciou com sucesso!</p>
        <p className="mt-2 text-sm opacity-75">Backend: http://localhost:3001</p>
      </div>
    </div>
  );
}

const root = document.getElementById('root');
createRoot(root).render(<App />);