import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type PasswordFieldProps = {
  name: string;
  "data-testid"?: string;
} & TextFieldProps;

export const PasswordField = ({
  name,
  "data-testid": dataTestId = "PasswordField",
  ...rest
}: PasswordFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          type="password"
          size="small"
          data-testid={dataTestId}
          error={!!error}
          helperText={error?.message}
          {...field}
          {...rest}
        />
      )}
    />
  );
};
