import { describe, it, expect } from "vitest";
import { GenericError } from "./GenericError";

describe("GenericError", () => {
  it("should render", () => {
    expect(<GenericError />).toMatchSnapshot();
  });
});
