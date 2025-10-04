import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MascotAssistant({ backendUrl }) {
  const [messages, setMessages] = useState([{id:1, from:'bot', text:'Hello! I\'m here to help.'}]);

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[480px] bg-white rounded-lg shadow-lg p-4">
      <div className="font-bold mb-2">Mascot Assistant</div>
      <div className="overflow-auto h-80 border p-2 mb-2">
        {messages.map(m => (
          <div key={m.id} className={m.from==='bot'?'text-left':'text-right'}>{m.text}</div>
        ))}
      </div>
      <input type="text" placeholder="Type..." className="border w-full p-2 rounded"/>
    </div>
  );
}
