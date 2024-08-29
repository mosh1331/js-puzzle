import React from 'react';

function DropZone({ onDrop, code }) {
  const handleDrop = (e) => {
    const block = e.dataTransfer.getData('text/plain');
    onDrop(block);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-[50px] p-2 bg-gray-800 rounded flex flex-wrap"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {code.map((block, index) => (
        <span key={index} className="text-white mr-2">
          {block}
        </span>
      ))}
    </div>
  );
}

export default DropZone;
