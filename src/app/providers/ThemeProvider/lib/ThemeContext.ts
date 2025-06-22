import { createContext } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

const LOCAL_STORAGE_THEME_KEY = "theme";

const ThemeContext = createContext<ThemeContextProps>({});

export { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext };
