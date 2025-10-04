import React from 'react';
import MascotAssistant from './components/MascotAssistant.jsx';

function App() {
  return (
    <div className="App">
      <MascotAssistant backendUrl={import.meta.env.VITE_CHAT_BACKEND || '/api/chat'} />
    </div>
  );
}

export default App;
