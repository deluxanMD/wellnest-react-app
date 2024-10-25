import type { Meta, StoryObj } from "@storybook/react";
import { PasswordField } from "./password-field.component";
import { withRHF } from "test-utils/storybook/with-rhf";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const meta: Meta<typeof PasswordField> = {
  component: PasswordField,
  decorators: [withRHF, withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const LAPasswordField: Story = {
  args: {
    label: "Password Field",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password Field",
    helperText: "Helper Text",
  },
};

export const WithError: Story = {
  args: {
    label: "Password Field",
    helperText: "Error Message",
    error: true,
  },
};
