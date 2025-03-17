"use client"

import React, { useState, useRef, useEffect } from 'react';
import Badge from './Bagde';

interface DynamicTagContainerProps {
  tags: string[];
  bgVariant?: string;
  bgModifier?: string;
  textVariant?: string;
  textModifier?: string;
}

const DynamicTagContainer = ({ 
  tags = [], 
  bgVariant,
  bgModifier,
  textVariant,
  textModifier 
}: DynamicTagContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleTags, setVisibleTags] = useState<string[]>(tags);

  useEffect(() => {
    const calculateVisibleTags = () => {
      const container = containerRef.current;
      const measure = measureRef.current;
      if (!container || !measure) return;

      const containerWidth = container.offsetWidth;
      
      // Create temporary badges in the hidden measure div
      const tempTags = tags.map((tag, index) => {
        const tempBadge = document.createElement('span');
        tempBadge.className = measure.children[0]?.className || '';
        tempBadge.textContent = tag;
        measure.appendChild(tempBadge);
        return tempBadge;
      });

      let currentWidth = 0;
      let visibleCount = 0;

      // Measure each tag
      for (let tag of tempTags) {
        const tagWidth = tag.offsetWidth + 10; // 8px for gap
        if (currentWidth + tagWidth <= containerWidth) {
          currentWidth += tagWidth;
          visibleCount++;
        } else {
          break;
        }
      }

      // Clean up temporary elements
      measure.innerHTML = '';

      setVisibleTags(tags.slice(0, visibleCount));
    };

    // Initial calculation
    calculateVisibleTags();
    
    // Setup ResizeObserver
    const resizeObserver = new ResizeObserver(calculateVisibleTags);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [tags]);

  return (
    <>
      <div 
        ref={containerRef}
        className="flex items-center flex-nowrap gap-2 overflow-hidden"
      >
        {visibleTags.map((tag, index) => (
          <Badge
            key={index}
            text={tag}
            bgVariant={bgVariant}
            bgModifier={bgModifier}
            textVariant={textVariant}
            textModifier={textModifier}
          />
        ))}
      </div>
      {/* Hidden measurement container */}
      <div 
        ref={measureRef} 
        className="absolute -left-full overflow-hidden invisible"
        aria-hidden="true"
      >
        <Badge text="" /> {/* Template for measurements */}
      </div>
    </>
  );
};

export default DynamicTagContainer;