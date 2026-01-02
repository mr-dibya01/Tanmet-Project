import { useEffect, useRef } from 'react';

export const ScrollAnimation = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'scale-in': 'opacity-0 scale-95',
    'slide-in-right': 'opacity-0 translate-x-8',
    'slide-in-left': 'opacity-0 -translate-x-8',
  }[animation];

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${animationClass} [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0 [&.animate-visible]:translate-x-0 [&.animate-visible]:scale-100 ${className}`}
    >
      {children}
    </div>
  );
};