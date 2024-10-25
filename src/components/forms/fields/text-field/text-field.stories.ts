import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./text-field.component";
import { withRHF } from "../../../../test-utils/storybook/with-rhf";
import { AccountCircle } from "@mui/icons-material";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const meta: Meta<typeof TextField> = {
  component: TextField,
  decorators: [withRHF, withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const LaTextField: Story = {
  args: {
    label: "TextField",
  },
};

export const PasswordField: Story = {
  args: {
    label: "Password Field",
    type: "password",
  },
};

export const ErrorMessage: Story = {
  args: {
    label: "With Error",
    helperText: "something went wrong!",
    error: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: "With Icon",
    Icon: AccountCircle,
    variant: "standard",
  },
};
