"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Item {
  name: string;
  // Add other properties as needed
}

interface InfiniteMovingCardsProps {
  items: Item[];
  direction: 'left' | 'right';
  speed: 'slow' | 'normal' | 'fast';
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction,
  speed,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 50;
      case 'normal':
        return 100;
      case 'fast':
        return 150;
    }
  };

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}
    >
      <motion.div
        className="flex"
        animate={{
          x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ width: 'fit-content' }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-80 p-2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              {/* Add more content as needed */}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};