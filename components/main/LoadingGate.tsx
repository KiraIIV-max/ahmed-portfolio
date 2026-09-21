"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";

// ===== التوقيتات =====
const LOADING_DURATION = 2000; // إجمالي 1.5s
const LOADING_FADE_DURATION = 500; // 500ms للـ fade

export default function LoadingGate({ children }: { children: ReactNode }) {
  const [loadingState, setLoadingState] = useState<"loading" | "fading" | "done">(
    "loading",
  );

  useEffect(() => {
    const startedAt = Date.now();
    let timeoutId: number | undefined;

    const revealSite = () => {
      // الـ fade يبدأ عند 1000ms (1500 - 500)
      const remainingTime = Math.max(
        0,
        LOADING_DURATION - LOADING_FADE_DURATION - (Date.now() - startedAt),
      );

      timeoutId = window.setTimeout(() => {
        // ⚡ السطر الأهم: نطلق الحدث ونبدأ الـ fade في نفس اللحظة
        // عشان الـ Hero Intro يظهر تحت الـ Loading أثناء الـ crossfade
        setLoadingState("fading");
        window.dispatchEvent(new Event("portfolio-loading-complete"));

        timeoutId = window.setTimeout(() => {
          setLoadingState("done");
        }, LOADING_FADE_DURATION);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      revealSite();
    } else {
      window.addEventListener("load", revealSite, { once: true });
    }

    return () => {
      window.removeEventListener("load", revealSite);
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      {children}
      {loadingState !== "done" && (
        <main
          className={`loading-screen ${
            loadingState === "fading" ? "loading-screen--fading" : ""
          }`}
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="loading-content">
            <Image
              src="/logo2.svg"
              alt="Ahmed Mohamed logo"
              width={96}
              height={96}
              className="loading-logo"
              priority
            />
            <p className="loading-status">Loading portfolio</p>
          </div>
        </main>
      )}
    </>
  );
}