import React from 'react';
import { HabitSquare } from './HabitSquare';
import { HabitDay } from './Habit';

interface HabitSquareRowProps {
  days: HabitDay[];
  onSquareClick: (index: number) => void;
}

export const HabitSquareRow: React.FC<HabitSquareRowProps> = ({ days, onSquareClick }) => {
  return (
    <div className="inline-flex items-center justify-end gap-1 pl-0 pr-0.5 py-0 relative ml-[-88.00px] self-stretch flex-[0_0_auto] rounded-[0px_32px_32px_0px]">
      {days.map((day, index) => (
        <HabitSquare
          key={index}
          completed={day.completed}
          dot={day.dot}
          outline={day.outline}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}; 