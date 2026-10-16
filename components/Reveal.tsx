import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  blur?: boolean;
}

const Reveal: React.FC<RevealProps> = ({ 
    children, 
    delay = 0, 
    className = "", 
    direction = "up",
    duration = 1.2,
    blur = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } 
    );
    
    if (ref.current) {
        observer.observe(ref.current);
    }

    return () => {
        if (ref.current) observer.unobserve(ref.current); 
    };
  }, []);

  const getInitialTransform = () => {
      const distance = '20px'; 
      
      let transform = '';

      switch(direction) {
          case 'up': transform = `translateY(${distance})`; break;
          case 'down': transform = `translateY(-${distance})`; break;
          case 'left': transform = `translateX(${distance})`; break;
          case 'right': transform = `translateX(-${distance})`; break;
          case 'none': break;
      }
      
      return transform;
  };

  return (
    <div 
        ref={ref} 
        className={className}
        style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate(0, 0)' : getInitialTransform(),
            transition: `
                opacity ${duration}s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s, 
                transform ${duration}s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s
            `,
            willChange: 'opacity, transform'
        }}
    >
      {children}
    </div>
  );
};

export default Reveal;