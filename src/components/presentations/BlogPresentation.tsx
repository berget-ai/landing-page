import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

interface Slide {
  id: string;
  title?: string;
  content: React.ReactNode;
  center?: boolean;
  className?: string;
}

interface BlogPresentationProps {
  title: string;
  subtitle?: string;
  author?: string;
  slides: Slide[];
  theme?: 'white' | 'black' | 'league' | 'beige' | 'sky' | 'night' | 'serif' | 'simple' | 'solarized';
  transition?: 'slide' | 'fade' | 'convex' | 'concave' | 'zoom';
  showProgress?: boolean;
  showControls?: boolean;
  enableKeyboard?: boolean;
  enableTouch?: boolean;
  autoSlide?: number;
  loop?: boolean;
}

export const BlogPresentation: React.FC<BlogPresentationProps> = ({
  title,
  subtitle,
  author,
  slides,
  theme = 'white',
  transition = 'slide',
  showProgress = true,
  showControls = true,
  enableKeyboard = true,
  enableTouch = true,
  autoSlide = 0,
  loop = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch handling for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enableTouch) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!enableTouch) return;
    touchEndX.current = e.changedTouches[0].clientX;
    
    if (touchStartX.current && touchEndX.current) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          nextSlide(); // Swipe left
        } else {
          prevSlide(); // Swipe right
        }
      }
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (loop) {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (loop) {
      setCurrentSlide(slides.length - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!enableKeyboard) return;
      
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          if (isFullscreen) {
            setIsFullscreen(false);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, enableKeyboard, isFullscreen, loop]);

  useEffect(() => {
    if (autoSlide > 0) {
      const timer = setInterval(() => {
        nextSlide();
      }, autoSlide);
      return () => clearInterval(timer);
    }
  }, [currentSlide, autoSlide]);

  const getThemeClasses = () => {
    const themeMap = {
      white: 'bg-white text-gray-900',
      black: 'bg-black text-white',
      league: 'bg-gray-900 text-white',
      beige: 'bg-amber-50 text-gray-900',
      sky: 'bg-sky-100 text-gray-900',
      night: 'bg-indigo-950 text-white',
      serif: 'bg-white text-gray-900 serif-fonts',
      simple: 'bg-white text-gray-900',
      solarized: 'bg-yellow-50 text-gray-900',
    };
    return themeMap[theme] || themeMap.white;
  };

  const getTransitionClass = () => {
    return `transition-${transition}`;
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden ${getThemeClasses()} ${getTransitionClass()}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress bar */}
      {showProgress && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div 
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      )}

      {/* Slide counter */}
      <div className="absolute top-4 right-4 text-sm opacity-50 z-50">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Fullscreen toggle */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 left-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors z-50"
        title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
      </button>

      {/* Slides container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            } ${slide.center ? 'text-center' : 'text-left'} ${slide.className || ''}`}
          >
            <div className="max-w-6xl w-full">
              {slide.title && (
                <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${slide.center ? 'text-center' : 'text-left'}`}>
                  {slide.title}
                </h2>
              )}
              {slide.content}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-50 disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentSlide === 0 && !loop}
            title="Previous slide (←)"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-50 disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentSlide === slides.length - 1 && !loop}
            title="Next slide (→)"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Slide navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-blue-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Title slide overlay */}
      {currentSlide === 0 && (title || subtitle || author) && (
        <div className="absolute bottom-8 left-8 text-center">
          {subtitle && <p className="text-xl opacity-75 mb-2">{subtitle}</p>}
          {author && <p className="text-sm opacity-50">{author}</p>}
        </div>
      )}

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p>Loading presentation...</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper components for common slide content
export const SlideTitle: React.FC<{ 
  children: React.ReactNode; 
  center?: boolean;
  large?: boolean;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}> = ({ 
  children, 
  center = false,
  large = false,
  color
}) => {
  const sizeClass = large ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl';
  const alignClass = center ? 'text-center' : 'text-left';
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  };
  const colorClass = color ? colorMap[color] : '';

  return (
    <h1 className={`${sizeClass} ${alignClass} ${colorClass} font-bold mb-8`}>
      {children}
    </h1>
  );
};

export const SlideHeading: React.FC<{ 
  children: React.ReactNode; 
  center?: boolean;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}> = ({ 
  children, 
  center = false,
  color
}) => {
  const alignClass = center ? 'text-center' : 'text-left';
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  };
  const colorClass = color ? colorMap[color] : '';

  return (
    <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${alignClass} ${colorClass}`}>
      {children}
    </h2>
  );
};

export const SlideSubheading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-2xl md:text-3xl font-semibold mb-6">{children}</h3>
);

export const SlideText: React.FC<{ 
  children: React.ReactNode; 
  large?: boolean;
  center?: boolean;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}> = ({ 
  children, 
  large = false,
  center = false,
  color
}) => {
  const sizeClass = large ? 'text-xl md:text-2xl' : 'text-lg md:text-xl';
  const alignClass = center ? 'text-center' : '';
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  };
  const colorClass = color ? colorMap[color] : '';

  return (
    <p className={`${sizeClass} ${alignClass} ${colorClass} mb-4 leading-relaxed`}>
      {children}
    </p>
  );
};

export const SlideList: React.FC<{ 
  children: React.ReactNode; 
  ordered?: boolean;
  className?: string;
}> = ({ children, ordered = false, className = '' }) => {
  const ListTag = ordered ? 'ol' : 'ul';
  return (
    <ListTag className={`space-y-3 mb-6 ${ordered ? 'list-decimal list-inside' : 'list-disc list-inside'} ${className}`}>
      {children}
    </ListTag>
  );
};

export const SlideListItem: React.FC<{ 
  children: React.ReactNode;
  icon?: string;
  className?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}> = ({ children, icon, className = '', color }) => {
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600', 
    red: 'text-red-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  };

  return (
    <li className={`flex items-start ${className} ${color ? colorMap[color] : ''}`}>
      {icon && <span className="mr-3 text-xl">{icon}</span>}
      <span>{children}</span>
    </li>
  );
};

export const SlideCode: React.FC<{ 
  children: React.ReactNode;
  language?: string;
  className?: string;
}> = ({ children, language = 'text', className = '' }) => (
  <pre className={`bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm md:text-base mb-6 ${className}`}>
    <code className={`language-${language}`}>{children}</code>
  </pre>
);

export const SlideTable: React.FC<{ 
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
  className?: string;
}> = ({ headers, rows, className = '' }) => (
  <div className="overflow-x-auto mb-6">
    <table className={`min-w-full border-collapse border border-gray-300 ${className}`}>
      <thead>
        <tr className="bg-gray-100">
          {headers.map((header, index) => (
            <th key={index} className="border border-gray-300 px-4 py-2 text-left font-semibold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const SlideTwoColumn: React.FC<{ 
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: '50-50' | '60-40' | '40-60' | '70-30' | '30-70';
}> = ({ left, right, ratio = '50-50' }) => {
  const ratioMap = {
    '50-50': 'grid-cols-1 md:grid-cols-2',
    '60-40': 'grid-cols-1 md:grid-cols-[60%_40%]',
    '40-60': 'grid-cols-1 md:grid-cols-[40%_60%]',
    '70-30': 'grid-cols-1 md:grid-cols-[70%_30%]',
    '30-70': 'grid-cols-1 md:grid-cols-[30%_70%]',
  };

  return (
    <div className={`grid ${ratioMap[ratio]} gap-6 mb-6`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};



export const SlideHighlight: React.FC<{ 
  children: React.ReactNode; 
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}> = ({ children, color = 'blue' }) => {
  const colorMap = {
    blue: 'text-blue-600 font-bold',
    green: 'text-green-600 font-bold',
    red: 'text-red-600 font-bold',
    yellow: 'text-yellow-600 font-bold',
    purple: 'text-purple-600 font-bold',
  };

  return <span className={colorMap[color]}>{children}</span>;
};

export const SlideFragment: React.FC<{ children: React.ReactNode; delay?: number }> = ({ 
  children, 
  delay = 0 
}) => (
  <div 
    className="fragment opacity-0 animate-fade-in" 
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

export default BlogPresentation;