import React, { RefObject, useEffect } from 'react';

interface Day {
  day: string;
  date: string;
  isActive?: boolean;
  fullDate: Date;
}

interface DateHeaderProps {
  days: Day[];
  scrollRef: RefObject<HTMLDivElement>;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

export const DateHeader: React.FC<DateHeaderProps> = ({ days, scrollRef, onScroll }) => {
  // Scroll to today (active day) on mount
  useEffect(() => {
    const activeIndex = days.findIndex(day => day.isActive);
    if (activeIndex === -1 || !scrollRef.current) return;

    const dayWidth = 48; // w-12 = 3rem = 48px
    const containerWidth = scrollRef.current.clientWidth;
    const scrollLeft = Math.max(0, (activeIndex + 1) * dayWidth - containerWidth);
    
    scrollRef.current.scrollLeft = scrollLeft;
  }, [days]);

  return (
    <div ref={scrollRef} className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing" onScroll={onScroll}>
      <div className="inline-flex items-center justify-end mb-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[#3d3d3d70] relative flex-[0_0_auto]">
        {days.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col w-12 h-11 items-start justify-center px-0 py-1 relative border-r-[0.5px] [border-right-style:solid] border-l-[0.5px] [border-left-style:solid] border-[#3d3d3d70] ${day.isActive ? "bg-darklayersecondary" : ""}`}
          >
            <div
              className={`relative self-stretch font-caption font-[number:var(--caption-font-weight)] ${day.isActive ? "text-darkfaceprimary" : "text-darkfacesecondary"} text-[length:var(--caption-font-size)] text-center tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]`}
            >
              {day.day}
            </div>
            <div
              className={`self-stretch font-subheadline-02 font-[number:var(--subheadline-02-font-weight)] ${day.isActive ? "text-darkfaceprimary" : "text-darkfacesecondary"} text-[length:var(--subheadline-02-font-size)] text-center leading-[var(--subheadline-02-line-height)] relative tracking-[var(--subheadline-02-letter-spacing)] [font-style:var(--subheadline-02-font-style)]`}
            >
              {day.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 