import React, { useRef, useState, RefObject } from 'react';
import { HabitSquare } from './HabitSquare';
import { HabitDay } from './Habit';

interface HabitSquareRowProps {
  days: HabitDay[];
  onSquareClick: (index: number) => void;
  scrollRef: RefObject<HTMLDivElement>;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

export const HabitSquareRow: React.FC<HabitSquareRowProps> = ({ days, onSquareClick, scrollRef, onScroll }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    const slider = scrollRef.current;
    if (!slider) return;
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => setIsMouseDown(false);
  const handleMouseUp = () => setIsMouseDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const slider = scrollRef.current;
    if (!slider) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing w-full"
      onScroll={onScroll}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="inline-flex items-center gap-1">
        {days.map((day, index) => (
          <HabitSquare
            key={index}
            completed={day.completed}
            dot={day.dot}
            outline={day.outline}
            onClick={() => !isMouseDown && onSquareClick(index)}
          />
        ))}
      </div>
    </div>
  );
}; 