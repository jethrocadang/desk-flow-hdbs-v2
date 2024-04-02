'use client';
import React, { useState } from 'react'
import Bgimage from '@/public/img/bg-footer.png';
import { IoIosClose } from "react-icons/io";
import Image from 'next/image'

interface Desk {
  id: number;
  shape: string;
  position: { left: number; top: number };
}

const Floor = ({
  children
}: {
children: React.ReactNode
}) => {
  // these where the desk store
  const [desks, setDesks] = useState<Desk[]>([]);
  // lets check in console
  console.log(desks);
  
  const [contextMenu, setContextMenu] = useState<{ visible: boolean; id?: number }>({
    visible: false,
    id: undefined,
  });

  const handleDeskDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const shape = e.dataTransfer.getData('shape');
    const newPosition = {
      left: e.clientX - e.currentTarget.getBoundingClientRect().left - 25,
      top: e.clientY - e.currentTarget.getBoundingClientRect().top - 25,
    };

    const newDesk: Desk = {
      id: Date.now(),
      shape,
      position: newPosition,
    };

    setDesks((prevDesks) => [...prevDesks, newDesk]);
  };

  const handleDeskDelete = () => {
    if (contextMenu.id !== undefined) {
      setDesks((prevDesks) => prevDesks.filter((desk) => desk.id !== contextMenu.id));
      setContextMenu({ visible: false, id: undefined });
    }
  };

  const handleContextMenu = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setContextMenu({ visible: true, id });
  };

  const handleDeskContextMenuClose = () => {
    setContextMenu({ visible: false, id: undefined });
  };

  const getDeskPosition = (id: number) => {
    const desk = desks.find((desk) => desk.id === id);
    return desk ? desk.position : { left: 0, top: 0 };
  };

  const isContextMenuVisible = contextMenu.visible && contextMenu.id !== undefined;

  return (
    <div className="relative">
      <div
        onDrop={handleDeskDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full h-full border border-gray-400 relative"
      >
        
        {children}
        {desks.map((desk) => (
          <div
            key={desk.id}
            className="absolute w-7 h-7 bg-[#2F3783] rounded-full flex flex-col"
            style={{ left: `${desk.position.left}px`, top: `${desk.position.top}px` }}
            onContextMenu={(e) => handleContextMenu(e, desk.id)}
          >
            {/* can picture of desk */}
          </div>
        ))}
      </div>
      {isContextMenuVisible && contextMenu.id !== undefined && (
        <div
          className="absolute bg-white border p-2"
          style={{
            left: `${getDeskPosition(contextMenu.id).left + 25}px`,
            top: `${getDeskPosition(contextMenu.id).top + 25}px`,
          }}
        >
          <div className='flex items-center'>
            <button onClick={handleDeskDelete} className="bg-red-500 text-white p-1">
              Delete
            </button>
            <div className='h-full'> 
                <IoIosClose onClick={handleDeskContextMenuClose} className='text-black text-2xl font-bold text-end'/>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Floor;