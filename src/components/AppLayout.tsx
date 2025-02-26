
import React, { useEffect } from "react";
import { ExpandableChatDemo } from "@/components/ui/expandable-chat-demo";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";
import { useLocation } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  // Fix for scrolling to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen h-full bg-background text-foreground">
      <div className="relative w-full">
        {children}
        <ScrollToTopButton className="left-24" />
        <ExpandableChatDemo />
      </div>
    </div>
  );
}
