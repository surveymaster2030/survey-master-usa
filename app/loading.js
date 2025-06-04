"use client";
export default function Loading() {
  return (
    <div className="bg-opacity-10 fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50">
      <div className="flex h-16 items-end space-x-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`animate-wave bg-primary block w-2 rounded`}
            style={{ animationDelay: `${i * 0.15}s`, height: "20px" }}
          ></span>
        ))}
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: scaleY(0.4);
          }
          50% {
            transform: scaleY(1);
          }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
          transform-origin: bottom;
        }
      `}</style>
    </div>
  );
}
