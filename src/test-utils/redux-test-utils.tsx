import { CssBaseline } from "@mui/material";
import { render, RenderOptions } from "@testing-library/react";
import ThemeWrapper from "helpers/theme/theme.wrapper";
import { PropsWithChildren, ReactNode } from "react";
import { Provider } from "react-redux";
import { AppStore, RootState, setupStore, store } from "store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

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

export const renderForJest = (
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) => {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};
