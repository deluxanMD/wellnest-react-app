import React from "react";
import {
  Box,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export type TextFieldProps = {
  name: string;
  Icon?: any;
  "data-testid"?: string;
} & MuiTextFieldProps;

export const TextField = ({
  name,
  Icon,
  helperText,
  "data-testid": dataTestId = "TextField",
  ...rest
}: TextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: helperText || !!error ? "center" : "flex-end",
          }}
        >
          {!!Icon && (
            <Icon
              sx={{ color: "primary.main", mr: 1, my: 0.5 }}
              data-testid={`${dataTestId}.Icon`}
            />
          )}
          <MuiTextField
            fullWidth
            size="small"
            data-testid={dataTestId}
            error={!!error}
            helperText={
              <span data-testid={`${dataTestId}.HelperText`}>
                {!!error ? error.message : helperText}
              </span>
            }
            {...field}
            {...rest}
          />
        </Box>
      )}
    />
  );
};
