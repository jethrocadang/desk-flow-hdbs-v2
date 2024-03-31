'use client';
import { Button } from "../../shadcn/button";

const Desk = () => {
  const shapes = ['desk1', 'desk2', 'desk3'];

  const handleShapeDragStart = (e: React.DragEvent, shape: string) => {
    e.dataTransfer.setData('shape', shape);
  };

  return (
    <div className="flex flex-col bg-white p-5 h-full w-[500px] items-center rounded-md drop-shadow-md">
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold mb-2 text-[#2F3783]">Add Desk</h2>
        <p className='text-[10px] text-black mb-4 '>Please add a desk by dragging it to the Desk Map.</p>
        <div className=' flex flex-row'>
          {shapes.map((shape, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleShapeDragStart(e, shape)}
              className="w-12 h-12 bg-[#2F3783] rounded-full m-2 cursor-grab"
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Desk;