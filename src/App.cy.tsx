import React from "react";
import App from "./App";
import { ReduxWrapper } from "test-utils/redux-test-utils";

describe("<App />", () => {
  it("should load the component", () => {
    cy.mount(
      <ReduxWrapper>
        <App />
      </ReduxWrapper>
    );
  });
});
