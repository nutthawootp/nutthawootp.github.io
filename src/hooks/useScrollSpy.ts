import { useState, useEffect } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

const useScrollSpy = ({ sectionIds, offset = 0 }: UseScrollSpyOptions) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let currentActive: string | null = null;
        for (let i = entries.length - 1; i >= 0; i--) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            currentActive = entry.target.id;
            break;
          }
        }
        setActiveSection(currentActive);
      },
      {
        rootMargin: `${-offset}px 0px 0px 0px`,
        threshold: 0.5,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;
