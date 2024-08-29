import React, { useState } from 'react';
import Puzzle from './Puzzle';

function Container() {
  const [level, setLevel] = useState(1);

  const nextLevel = () => {
    setLevel(level + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">CodeQuest: The Variable Vaults</h1>
      <Puzzle level={level} onComplete={nextLevel} />
    </div>
  );
}

export default Container;
