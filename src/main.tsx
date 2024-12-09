import "@/index.css";
import "@/styles/reset.less";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { ProfileSidebar } from "./components/ProfileSidebar.tsx";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <ProfileSidebar />
      <SidebarTrigger />
      <App />
    </SidebarProvider>
  </StrictMode>
);
