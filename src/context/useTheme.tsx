import { useContext, createContext, useState } from 'react';

const initialState = {
  theme: true
};

interface ThemeContent {
  theme: boolean;
  toggleTheme?: () => void;
}

type Props = {
  children: JSX.Element;
};

const ThemeContext = createContext<ThemeContent>(initialState);

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
