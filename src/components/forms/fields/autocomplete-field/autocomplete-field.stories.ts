import type { Meta, StoryObj } from "@storybook/react";
import { Option, AutocompleteField } from "./autocomplete-field.component";
import { withRHF } from "test-utils/storybook/with-rhf";
import { AccountCircle } from "@mui/icons-material";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const options: Option[] = [
  { id: "one", label: "One" },
  { id: "two", label: "Two" },
];

const meta: Meta<typeof AutocompleteField> = {
  component: AutocompleteField,
  decorators: [withRHF, withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof AutocompleteField>;

export const SingleValue: Story = {
  args: {
    label: "Single Value Field",
    options,
  },
};

export const MultipleValue: Story = {
  args: {
    label: "Multiple Value Field",
    options,
    multiple: true,
  },
};

export const StandardVariant: Story = {
  args: {
    label: "Standard Variant",
    options,
    variant: "standard",
  },
};

export const HelperText: Story = {
  args: {
    label: "Helper Text",
    options,
    helperText: "sample helper text",
  },
};

export const WithIcon: Story = {
  args: {
    label: "With Icon",
    options,
    Icon: AccountCircle,
    variant: "standard",
  },
};
