import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HabitTracker } from "./screens/HabitTracker";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HabitTracker />
  </StrictMode>,
);
