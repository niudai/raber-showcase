import { Box, Comp } from '@raber/react';
import React, { useState, useRef, useEffect } from 'react';

interface UseCardReturnValue {
  cardRef: React.RefObject<HTMLDivElement>;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: () => void;
}

const useCard = (): UseCardReturnValue => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const cardWidth = rect.width;
      const cardHeight = rect.height;

      const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rotateY = (mouseX / cardWidth) * 20 - 5;
        const rotateX = (mouseY / cardHeight) * 20 - 5;

        card.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = '';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return {
    cardRef,
    handleMouseMove: handleCardClick,
    handleMouseLeave: () => {
        cardRef.current.style.transform = '';
    },
  };
};

export const NextJSCard = Comp(() => {
  const { cardRef, handleMouseMove, handleMouseLeave } = useCard();

  return (
    <div style={{ height: '100%'}} ref={cardRef} onClick={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Box name='main' style={{ height: '100%' }}></Box>
    </div>
  );
}, {
    name: 'NextJSCard',
    category: 'nextjs'   
});
