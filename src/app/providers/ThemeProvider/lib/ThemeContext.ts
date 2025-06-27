import { createContext } from 'react';

enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

const LOCAL_STORAGE_THEME_KEY = 'theme';

const ThemeContext = createContext<ThemeContextProps>({});

export { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext };
