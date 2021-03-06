import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./components/Home";
import Content from "./components/Content";
import Search from "./components/Search";
import Settings from "./components/Settings";
import About from "./components/About";
import { BurgerSettingsProvider } from "./contexts/BurgerSettingsContext";
import { ThemeSettingProvider } from "./contexts/ThemeSettingContext";

export default function App() {
  
  return (
    <div className="App">
      <ThemeSettingProvider>
      <BurgerSettingsProvider>
        <BurgerMenu />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content" element={<Content />} />
            <Route path="/searchA" element={<Search />} />
            <Route path="/searchB" element={<Search />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </BurgerSettingsProvider>
      </ThemeSettingProvider>
    </div>
  );
}
