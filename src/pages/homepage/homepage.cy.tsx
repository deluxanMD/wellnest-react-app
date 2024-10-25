import { HomePage } from "./homepage.component";

describe("<HomePage />", () => {
  it("should render the page", () => {
    cy.mount(<HomePage />);
    cy.findByTestId("HomePage.Container").should("exist");
  });
});
