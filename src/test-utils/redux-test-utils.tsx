import { CssBaseline } from "@mui/material";
import ThemeWrapper from "helpers/theme/theme.wrapper";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "store";

type ReduxWrapperProps = {
  children: ReactNode;
};

export const ReduxWrapper = ({ children }: ReduxWrapperProps) => {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <CssBaseline />
        {children}
      </ThemeWrapper>
    </Provider>
  );
};
