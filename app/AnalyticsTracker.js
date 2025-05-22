"use client"; // ← مهم جدًا لأنه كومبوننت متصفح

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
