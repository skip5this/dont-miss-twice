import React from 'react';

interface HabitSquareProps {
  completed: boolean;
  dot?: boolean;
  outline?: boolean;
  onClick: () => void;
}

export const HabitSquare: React.FC<HabitSquareProps> = ({ completed, dot, outline, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-11 h-11 min-w-[44px] min-h-[44px] transition-all duration-200 ${
        completed 
          ? "bg-teal rounded hover:bg-teal/90" 
          : outline 
            ? "rounded border border-solid border-[#ffffffa3] hover:border-[#ffffff]" 
            : "hover:bg-white/5"
      }`}
    >
      {completed ? (
        <div className="h-11 bg-teal rounded-[22px]" />
      ) : dot ? (
        <div className="relative w-2 h-2 top-[18px] left-[18px] bg-darkfacetertiarydisabled rounded" />
      ) : null}
    </button>
  );
};