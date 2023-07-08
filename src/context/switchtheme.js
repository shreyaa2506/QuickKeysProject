import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import DarkBg from "../assets/backgrounds/darkbg.png";
import LightBg from "../assets/backgrounds/lightbg.png";

const SwitchThemeContext = React.createContext();
SwitchThemeContext.displayName = "ThemeContext";

const types = {
  dark: "dark",
  light: "light",
};

const config = {
  typography: {
    button: {
      textTransform: "none",
    },
  },
  
};

const lTheme = createTheme({ palette: { mode: "light" }, ...config });
const dTheme = createTheme({ palette: { mode: "dark" }, ...config });

const ThemeSwitcherProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(types.dark);

  return (
    < SwitchThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme === types.dark ? dTheme : lTheme}>
        <CssBaseline enableColorScheme />
        <GlobalStyles
          styles={{
            body: {
              backgroundImage: `url(${
                theme === types.dark ? DarkBg : LightBg
              })`,
            },
          }}
        />
        {children}
      </ThemeProvider>
    </ SwitchThemeContext.Provider>
  );
};

const useThemeSwitcher = () => React.useContext( SwitchThemeContext);

export { ThemeSwitcherProvider, useThemeSwitcher, types };
