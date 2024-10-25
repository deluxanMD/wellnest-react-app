import { render } from "@testing-library/react";
import App from "./App";
import { ReduxWrapper } from "test-utils/redux-test-utils";

test("renders learn react link", () => {
  render(
    <ReduxWrapper>
      <App />
    </ReduxWrapper>
  );
});
