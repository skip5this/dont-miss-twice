import React from 'react';

interface HabitTitleProps {
  name: string;
  gradient: string;
}

export const HabitTitle: React.FC<HabitTitleProps> = ({ name, gradient }) => {
  return (
    <div className="flex flex-col w-[310px] h-11 items-start justify-center gap-[3px] px-4 py-0 absolute top-0 left-0 z-10 pointer-events-none">
      <div className={`w-fit text-[#ffffff] text-[length:var(--title-04-font-size)] leading-[var(--title-04-line-height)] whitespace-nowrap relative font-title-04 font-[number:var(--title-04-font-weight)] tracking-[var(--title-04-letter-spacing)] [font-style:var(--title-04-font-style)] bg-gradient-to-r ${gradient} px-3 py-1 rounded-lg`}>
        {name}
      </div>
    </div>
  );
}; 