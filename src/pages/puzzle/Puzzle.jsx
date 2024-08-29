

import React, { useState } from 'react';
import DropZone from '../../components/dropZone/DropZone';
import DraggableBlock from '../../components/draggableBlock/DraggableBlock';

const puzzles = [
  {
    id: 1,
    question: "Declare a variable named `total` and set it to 10.",
    answer: "let total = 10;",
    blocks: [
      "let",
      "total",
      "=",
      "10",
      ";"
    ]
  },
  {
    id: 2,
    question: "Change the value of `total` to 15.",
    answer: "total = 15;",
    blocks: [
      "total",
      "=",
      "15",
      ";"
    ]
  }
  // More puzzles can be added here
];

function Puzzle({ level, onComplete }) {
  const [currentPuzzle, setCurrentPuzzle] = useState(puzzles[level - 1]);
  const [code, setCode] = useState([]);

  const handleDrop = (block) => {
    setCode([...code, block]);
  };

  const checkSolution = () => {
    if (code.join(' ') === currentPuzzle.answer) {
      alert('Correct!');
      onComplete();
    } else {
      alert('Try Again!');
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-4/5 max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">Level {level}</h2>
      <p className="text-lg mb-6">{currentPuzzle.question}</p>
      <div className="bg-gray-700 p-4 rounded mb-4">
        <DropZone onDrop={handleDrop} code={code} />
      </div>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2 mb-4">
        {currentPuzzle.blocks.map((block, index) => (
          <DraggableBlock key={index} block={block} />
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={checkSolution}
      >
        Submit
      </button>
    </div>
  );
}

export default Puzzle;

