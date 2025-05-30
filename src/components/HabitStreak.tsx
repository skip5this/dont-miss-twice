import React from 'react';

interface HabitStreakProps {
  streak: number;
}

export const HabitStreak: React.FC<HabitStreakProps> = ({ streak }) => {
  return (
    <div className="inline-flex items-start pl-4 pr-0 pt-1 pb-0 relative flex-[0_0_auto]">
      <div className="relative w-fit mt-[-1.00px] font-subheadline-03 font-[number:var(--subheadline-03-font-weight)] text-darkfacetertiary text-[length:var(--subheadline-03-font-size)] tracking-[var(--subheadline-03-letter-spacing)] leading-[var(--subheadline-03-line-height)] whitespace-nowrap [font-style:var(--subheadline-03-font-style)]">
        Streak: {streak} Days
      </div>
    </div>
  );
}; 