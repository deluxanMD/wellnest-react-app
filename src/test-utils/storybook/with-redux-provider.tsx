import { ReactRenderer } from "@storybook/react";
import { DecoratorFunction } from "@storybook/types";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "store";
import {
  StorybookThemeProvider,
  withThemeProvider,
} from "./with-theme-provider";

const StorybookReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export const withReduxProvider: DecoratorFunction<ReactRenderer> = (
  story,
  context
) => {
  context.args = {
    ...context.args,
    name: context.parameters?.withRHF?.name ?? "store",
  };

  return (
    <StorybookReduxProvider {...context.parameters?.withReduxProvider}>
      <StorybookThemeProvider {...withThemeProvider}>
        {story(context)}
      </StorybookThemeProvider>
    </StorybookReduxProvider>
  );
};
