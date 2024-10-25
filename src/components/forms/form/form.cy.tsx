import { useForm } from "react-hook-form";
import Form from "./form.component";

const Testcomponent = ({ devTool = false }: { devTool?: boolean }) => {
  const form = useForm();

  return (
    <Form formMethods={form} devTool={devTool}>
      <input />
    </Form>
  );
};

describe("<TLForm />", () => {
  it("should load the form", () => {
    cy.mount(<Testcomponent />);
    cy.findByTestId("Form").should("exist");
  });

  it("should load dev tools", () => {
    cy.mount(<Testcomponent devTool={true} />);
    cy.get('button[title="Show dev panel"]').should("exist");
  });
});
