import { DevTool } from "@hookform/devtools";
import { Box, BoxProps } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";

type FormProps = {
  children: React.ReactNode;
  formMethods: any;
  "data-testid"?: string;
  devTool?: boolean;
} & BoxProps &
  React.HTMLProps<HTMLFormElement>;

const Form = ({
  children,
  formMethods,
  "data-testid": dataTestId = "Form",
  devTool,
  ...rest
}: FormProps) => {
  return (
    <FormProvider {...formMethods}>
      <Box component="form" data-testid={dataTestId} {...rest}>
        {devTool && <DevTool control={formMethods.control} />}
        {children}
      </Box>
    </FormProvider>
  );
};

export default Form;
