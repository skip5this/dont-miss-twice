import React, { useState, useCallback, RefObject } from 'react';
import { HabitTitle } from './HabitTitle';
import { HabitSquareRow } from './HabitSquareRow';
import { HabitStreak } from './HabitStreak';

export interface HabitDay {
  completed: boolean;
  dot?: boolean;
  outline?: boolean;
}

export interface HabitProps {
  name: string;
  streak: number;
  days: HabitDay[];
  gradient: string;
  scrollRef: RefObject<HTMLDivElement>;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

export const Habit: React.FC<HabitProps> = ({ name, streak: initialStreak, days: initialDays, gradient, scrollRef, onScroll }) => {
  const [days, setDays] = useState<HabitDay[]>(initialDays);
  const [streak, setStreak] = useState(initialStreak);

  const recalculateStreak = useCallback((newDays: HabitDay[]) => {
    let currentStreak = 0;
    let maxStreak = 0;
    
    for (let i = newDays.length - 1; i >= 0; i--) {
      if (newDays[i].completed) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    }
    
    return maxStreak;
  }, []);

  const updateSquareStates = useCallback((newDays: HabitDay[]) => {
    return newDays.map((day, index) => {
      if (day.completed) {
        return { ...day, dot: false, outline: false };
      }

      const prevCompleted = index > 0 && newDays[index - 1].completed;
      const nextCompleted = index < newDays.length - 1 && newDays[index + 1].completed;
      const prevUncompleted = index > 0 && !newDays[index - 1].completed;
      const nextUncompleted = index < newDays.length - 1 && !newDays[index + 1].completed;

      // Check for broken streak (two or more uncompleted squares in a row)
      const isPartOfBrokenStreak = (prevUncompleted && !day.completed) || 
                                  (nextUncompleted && !day.completed);

      return {
        ...day,
        dot: isPartOfBrokenStreak,
        outline: !isPartOfBrokenStreak && (prevCompleted || nextCompleted)
      };
    });
  }, []);

  const handleSquareClick = useCallback((index: number) => {
    setDays(prevDays => {
      const newDays = [...prevDays];
      newDays[index] = {
        ...newDays[index],
        completed: !newDays[index].completed,
      };

      const updatedDays = updateSquareStates(newDays);
      const newStreak = recalculateStreak(updatedDays);
      setStreak(newStreak);

      return updatedDays;
    });
  }, [updateSquareStates, recalculateStreak]);

  return (
    <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
      <div className="relative w-full h-11">
        <HabitSquareRow days={days} onSquareClick={handleSquareClick} scrollRef={scrollRef} onScroll={onScroll} />
        <HabitTitle name={name} gradient={gradient} />
      </div>
      <HabitStreak streak={streak} />
    </div>
  );
};