import { useContext, createContext, useState } from "react";
import { LanguageContent, Languages } from "./useLanguage.interface"

const initialState = {
    lan: Languages.es,
};

type Props = {
  children: JSX.Element,
};

const LanguageContext = createContext<LanguageContent>(initialState);

export const useLanguage = () => useContext(LanguageContext);

export default function ThemeProvider({ children }: Props) {
  const [lan, setLan] = useState(Languages.es);

  const toggleLan = () => setLan(lan => lan === Languages.es ? Languages.en : Languages.es);

  return (
    <LanguageContext.Provider value={{ lan, toggleLan }}>
      {children}
    </LanguageContext.Provider>
  );
};
