import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { action } from "@storybook/addon-actions";
import { ReactRenderer } from "@storybook/react";
import { DecoratorFunction } from "@storybook/types";
import { FormProvider, useForm } from "react-hook-form";

type StorybookFormProviderProps = {
  name?: string;
  schema?: any;
  defaultValues?: any;
  showValue?: boolean;
  children: any;
};

const StorybookFormProvider = ({
  name,
  schema,
  defaultValues,
  showValue,
  children,
}: StorybookFormProviderProps) => {
  const methods = useForm(
    schema
      ? {
          resolver: yupResolver(schema),
          defaultValues: defaultValues ?? schema.cast({}),
        }
      : undefined
  );

  const value = methods.watch(name ?? "");

  return (
    <FormProvider {...methods}>
      <DevTool control={methods.control} />
      <form
        onSubmit={methods.handleSubmit(action("[React Hooks Form] Submit"))}
      >
        {children}
        {showValue && <div>{JSON.stringify(value)}</div>}
      </form>
    </FormProvider>
  );
};

export const withRHF: DecoratorFunction<ReactRenderer> = (story, context) => {
  context.args = {
    ...context.args,
    name: context.parameters?.withRHF?.name ?? "test",
  };

  return (
    <StorybookFormProvider {...context.parameters?.withRHF}>
      {story(context)}
      {context.parameters?.withRHF?.showSubmitButton && (
        <button type="submit" style={{ marginTop: "16px" }}>
          Submit
        </button>
      )}
    </StorybookFormProvider>
  );
};
