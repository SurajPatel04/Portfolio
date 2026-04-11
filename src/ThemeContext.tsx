import { createContext, useContext, useState, useCallback } from 'react';
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
  const [theme, setTheme] = useState<Theme>('modern');

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
