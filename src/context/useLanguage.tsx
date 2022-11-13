import { useContext, createContext, useState } from 'react';

export enum Languages {
  en = 'en',
  es = 'es'
}

export interface LanguageContent {
  lan: Languages;
  toggleLan?: () => void;
}

const initialState = {
  lan: Languages.es
};

type Props = {
  children: JSX.Element;
};

const LanguageContext = createContext<LanguageContent>(initialState);

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({ children }: Props) {
  const [lan, setLan] = useState(Languages.es);

  const toggleLan = () => {
    setLan((lan) => (lan === Languages.es ? Languages.en : Languages.es));
  };

  return <LanguageContext.Provider value={{ lan, toggleLan }}>{children}</LanguageContext.Provider>;
}
