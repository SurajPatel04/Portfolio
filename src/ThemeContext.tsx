import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';

type Theme = 'modern' | 'terminal';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'modern',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === '/terminal' ? 'terminal' : 'modern';
    }
    return 'modern';
  });

  useEffect(() => {
    const targetPath = theme === 'terminal' ? '/terminal' : '/';
    
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath + window.location.search + window.location.hash);
    }
  }, [theme]);

  useEffect(() => {
    const handlePopState = () => {
      setTheme(window.location.pathname === '/terminal' ? 'terminal' : 'modern');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'modern' ? 'terminal' : 'modern'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
