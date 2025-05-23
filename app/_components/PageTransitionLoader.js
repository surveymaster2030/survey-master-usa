"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function PageTransitionLoader() {
  const [showLoader, setShowLoader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowLoader(false); // يخفي الـ loader عند انتهاء التنقل
  }, [pathname]);

  useEffect(() => {
    const handleStart = () => setShowLoader(true);
    const handleStop = () => setShowLoader(false);

    // حماية إضافية لو بتستخدم router.events في النسخ القديمة (ليست ضرورية في app router)

    return () => {
      setShowLoader(false);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      {/* شكل مؤشر صوتيات */}
      <div className="flex items-end gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="animate-wave h-4 w-1 rounded bg-white"
            style={{ animationDelay: `${i * 0.1}s` }}
          ></span>
        ))}
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1.5);
          }
        }
        .animate-wave {
          animation: wave 1s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
