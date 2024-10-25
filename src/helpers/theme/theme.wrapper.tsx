import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "helpers/theme/theme";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

type ThemeWrapperProps = {
  children: ReactNode;
};

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme.mode === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
