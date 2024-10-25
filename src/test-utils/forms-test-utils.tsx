import React from "react";
import Form from "../components/forms/form/form.component";
import { Button } from "@mui/material";

type FormWrapperProps = {
  children: React.ReactNode;
  formMethods: any;
};

export const FormWrapper = ({ children, formMethods }: FormWrapperProps) => {
  return (
    <Form
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(() => null)}
      data-testid="TestForm"
    >
      {children}
      <Button type="submit" data-testid="TestForm.Button">
        Submit
      </Button>
    </Form>
  );
};
