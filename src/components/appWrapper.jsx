import { ThemeSwitcherProvider } from "../context/switchtheme";

const AppWrapper = ({ children }) => {
  return <ThemeSwitcherProvider>{children}</ThemeSwitcherProvider>;
};

export default AppWrapper;
