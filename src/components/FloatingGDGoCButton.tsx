'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FloatingGDGoCButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Hover Dialog */}
      {isHovered && (
        <div className="absolute bottom-20 right-0 mb-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 whitespace-nowrap animate-fadeIn">
          <p className="text-sm font-semibold text-gray-900">View GDGoC Plan</p>
        </div>
      )}

      {/* Floating Button */}
      <Link href="/gdgoc-plan">
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(false)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer"
          aria-label="View GDGoC Plan"
          title="View GDGoC Plan"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1" />
            <path d="M12 1v6m0 6v6" />
            <path d="M4.22 4.22l4.24 4.24m3.08 3.08l4.24 4.24" />
            <path d="M1 12h6m6 0h6" />
            <path d="M4.22 19.78l4.24-4.24m3.08-3.08l4.24-4.24" />
          </svg>
        </button>
      </Link>
    </div>
  );
}
