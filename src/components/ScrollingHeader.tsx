'use client'

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ScrollingHeader = () => {
  const items = [
    { text: 'GREAT TEAMS.', icon: '/assets/path.svg', color: 'var(--black)' },
    { text: 'GREATER', icon: '/assets/path2.svg', color: 'var(--black)' },
    { text: 'MEMBER EXPERIENCES', icon: '/assets/path3.svg', color: 'var(--black)' },
  ];

  return (
    <div className="overflow-hidden header">
      <div className="flex gap-8 whitespace-nowrap animate-scroll">
        {[...items, ...items, ...items].map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 text-2xl md:text-4xl font-bold flex-shrink-0">
            <span className={item.color}>{item.text}</span>
            <Image src={item.icon} alt={item.text} width={45} height={45} />
        </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingHeader;
