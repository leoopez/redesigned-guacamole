import LanguageProvider from "../context/useLanguage";
import ThemeProvider from "../context/useTheme";
import Body from "./Body";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Body />
      </ThemeProvider>
    </LanguageProvider>
  )
};


export default App;
