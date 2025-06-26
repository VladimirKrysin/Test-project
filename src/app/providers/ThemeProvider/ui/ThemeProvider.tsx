import { useState, useMemo, FC } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../lib/ThemeContext';

const DEFAULT_THEME = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
}
const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || DEFAULT_THEME);

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);
  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
