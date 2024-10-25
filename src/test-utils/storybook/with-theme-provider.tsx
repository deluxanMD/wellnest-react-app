import { ReactRenderer } from "@storybook/react";
import { DecoratorFunction } from "@storybook/types";
import ThemeWrapper from "helpers/theme/theme.wrapper";
import { ReactNode } from "react";

export const StorybookThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <ThemeWrapper>{children}</ThemeWrapper>;
};

export const withThemeProvider: DecoratorFunction<ReactRenderer> = (
  story,
  context
) => {
  context.args = {
    ...context.args,
    name: context.parameters?.withRHF?.name ?? "theme",
  };

  return (
    <StorybookThemeProvider {...context.parameters?.withRHF}>
      {story(context)}
    </StorybookThemeProvider>
  );
};
