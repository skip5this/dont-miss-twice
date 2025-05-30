import React from "react";
import { Button } from "../../components/ui/button";
import { Habit, HabitProps } from "../../components/Habit";

export const HabitTracker = (): JSX.Element => {
  // Calendar data
  const months = [
    { name: "May", position: "left" },
    { name: "Jun", position: "right" },
  ];

  const days = [
    { day: "Sun", date: "25" },
    { day: "Mon", date: "26" },
    { day: "Tue", date: "27" },
    { day: "Wed", date: "28" },
    { day: "Thur", date: "29" },
    { day: "Fri", date: "30" },
    { day: "Sat", date: "31" },
    { day: "Sun", date: "1" },
    { day: "Mon", date: "2", isActive: true },
  ];

  // Habit data
  const habits: HabitProps[] = [
    {
      name: "Meditate",
      streak: 200,
      days: Array(10).fill({ completed: true }),
      gradient: "from-purple-500/60 to-blue-500/60",
    },
    {
      name: "Walk 7500 Steps",
      streak: 200,
      days: [
        { completed: true },
        { completed: true },
        { completed: true },
        { completed: true },
        { completed: false, dot: true },
        { completed: false, dot: true },
        { completed: false, dot: true },
        { completed: true },
        { completed: false, outline: true },
        { completed: true },
      ],
      gradient: "from-purple-500/60 to-blue-500/60",
    },
    {
      name: "Stretch",
      streak: 200,
      days: [
        { completed: true },
        { completed: true },
        { completed: true },
        { completed: true },
        { completed: true },
        { completed: true },
        { completed: false, outline: true },
        { completed: true },
        { completed: true },
        { completed: true },
      ],
      gradient: "from-purple-500/60 to-blue-500/60",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] flex flex-row justify-center items-center w-full min-h-screen">
      <div className="bg-[#111111] overflow-hidden w-[390px] h-[844px] rounded-3xl">
        <div className="relative h-[850px]">
          <div className="flex flex-col w-[390px] h-[850px] items-end absolute top-0 left-0">
            {/* Status bar */}
            <header className="flex flex-col h-[50px] items-center relative self-stretch w-full bg-[#111112]">
              <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch w-full h-[50px]">
                  <div className="absolute w-[234px] h-8 top-0 left-[78px] bg-[url(/notch.svg)] bg-[100%_100%]" />

                  <div className="absolute w-[67px] h-[11px] top-[21px] left-[313px]">
                    <img
                      className="absolute w-6 h-[11px] top-0 left-[42px]"
                      alt="Battery"
                      src="/battery.png"
                    />

                    <img
                      className="absolute w-[15px] h-[11px] top-0 left-[22px]"
                      alt="Wifi"
                      src="/wifi.svg"
                    />

                    <img
                      className="absolute w-[17px] h-[11px] top-0 left-0"
                      alt="Mobile signal"
                      src="/mobile-signal.svg"
                    />
                  </div>

                  <div className="absolute w-[54px] h-[21px] top-4 left-4">
                    <div className="h-[21px]">
                      <div className="relative w-[54px] h-[21px] rounded-[32px]">
                        <div className="absolute w-[54px] top-0 left-0 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[#ffffff] text-base tracking-[-0.32px] leading-6">
                          11:10
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Main content */}
            <main className="inline-flex flex-col h-[800px] items-start gap-12 pt-12 pb-32 px-0 relative bg-[#111111]">
              <div className="flex flex-col w-[390px] items-start gap-12 relative flex-[0_0_auto]">
                {/* Header section */}
                <section className="flex flex-col items-start gap-12 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <h1 className="flex-1 mt-[-1.00px] text-[#ffffff] text-[32px] leading-9 relative [font-family:'ABC_Diatype-Medium',Helvetica] font-medium tracking-[0]">
                      Dont miss twice
                    </h1>

                    <p className="flex-1 mt-[-1.00px] text-darkfacetertiary text-[length:var(--subheadline-02-font-size)] leading-[var(--subheadline-02-line-height)] relative font-subheadline-02 font-[number:var(--subheadline-02-font-weight)] tracking-[var(--subheadline-02-letter-spacing)] [font-style:var(--subheadline-02-font-style)]">
                      A tool inspired by Atomic Habits. Build lasting habits by
                      never missing more than one day in a row.
                    </p>
                  </div>
                </section>

                {/* Calendar and habits section */}
                <section className="flex flex-col items-end gap-8 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
                    {/* Calendar header */}
                    <div className="flex flex-col items-end gap-1 self-stretch w-full relative flex-[0_0_auto]">
                      <div className="flex items-start justify-between self-stretch w-full relative flex-[0_0_auto]">
                        {months.map((month, index) => (
                          <div
                            key={index}
                            className={`inline-flex items-center gap-2 ${month.position === "left" ? "px-4" : ""} py-0 relative flex-[0_0_auto] ${month.position === "right" ? "w-[96.68px]" : "w-[52px]"}`}
                          >
                            <div className="mt-[-1.00px] font-caption font-[number:var(--caption-font-weight)] text-darkfacesecondary text-[length:var(--caption-font-size)] leading-[var(--caption-line-height)] relative tracking-[var(--caption-letter-spacing)] [font-style:var(--caption-font-style)]">
                              {month.name}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Calendar days */}
                      <div className="inline-flex items-center justify-end mb-[-1.00px] ml-[-43.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[#3d3d3d70] relative flex-[0_0_auto]">
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

                    {/* Habits */}
                    {habits.map((habit, index) => (
                      <Habit key={index} {...habit} />
                    ))}
                  </div>
                </section>
              </div>

              {/* Add habit button */}
              <Button className="flex w-56 items-center justify-center px-6 py-4 absolute top-[710px] left-[83px] bg-[#cce3ff] rounded-3xl hover:bg-[#bbdaff]">
                <span className="relative w-fit mt-[-1.00px] [font-family:'ABC_Diatype-Medium',Helvetica] font-medium text-dark-face-primaryalt text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Add habit
                </span>
              </Button>
            </main>
          </div>

          {/* Home indicator */}
          <div className="absolute w-[343px] h-8 top-[812px] left-4">
            <div className="relative w-[134px] h-[5px] top-[19px] left-[105px] bg-darkobjectprimary rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};