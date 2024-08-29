import React from 'react';

function DraggableBlock({ block }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', block);
  };

  return (
    <div
      className="bg-gray-600 text-white py-2 px-4 rounded cursor-pointer"
      draggable
      onDragStart={handleDragStart}
    >
      {block}
    </div>
  );
}

export default DraggableBlock;
