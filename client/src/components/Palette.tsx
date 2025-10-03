import React from 'react';

interface ColorCircle {
  id: string;
  tailwindClass: string;
}

const WeddingColorPalette: React.FC = () => {
  const weddingColors: ColorCircle[] = [
    {
      id: '1',
      tailwindClass: 'bg-[#d3bfa6]'
    },
    {
      id: '2',
      tailwindClass: 'bg-[#e3beb5]'
    },
    {
      id: '4',
      tailwindClass: 'bg-[#A3BDD3]'
    },
    {
      id: '3',
      tailwindClass: 'bg-[#96a480]'
    },
    {
      id: '6',
      tailwindClass: 'bg-[#65653f]'
    },
    {
      id: '5',
      tailwindClass: 'bg-[#7a5946]'
    },
    {
      id: '7',
      tailwindClass: 'bg-[#4a4138]'
    }
  ];

  return (
    <div className="flex gap-2 mt-4 flex-wrap">
      {weddingColors.map((color) => (
        <div
          key={color.id}
          className="flex flex-col items-center group cursor-pointer"
        >
          <div
            className={`
                w-8 h-8
                rounded-full 
                shadow-lg 
                duration-300 
                flex 
                items-center 
                justify-center
                ${color.tailwindClass}
              `}
          >
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeddingColorPalette;