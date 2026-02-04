import { useEffect, useRef, useState } from 'react';

interface UseOptimizedImageProps {
  src: string;
  alt: string;
  placeholder?: string;
}

export const useOptimizedImage = ({ src, alt, placeholder }: UseOptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder || src);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            
            const newImg = new Image();
            newImg.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            newImg.onerror = () => {
              console.error(`Failed to load image: ${src}`);
            };
            newImg.src = src;
            
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return { imageSrc, isLoaded, imgRef };
};
