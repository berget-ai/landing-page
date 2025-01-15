import * as React from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps extends React.HTMLAttributes<HTMLDivElement> {
  words: string[];
  className?: string;
  speed?: number;
  delay?: number;
}

export function Typewriter({
  words,
  className,
  speed = 100,
  delay = 2000,
  ...props
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, speed, delay]);

  return (
    <div className={cn("relative inline-flex", className)} {...props}>
      <span className="relative">
        {currentText}
        <span className="absolute right-[-4px] top-0 h-full w-[2px] animate-blink bg-current" />
      </span>
    </div>
  );
}
