import { describe, it, expect } from "vitest";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

describe("ColorSchemeToggle", () => {
  it("should render", () => {
    expect(<ColorSchemeToggle />).toMatchSnapshot();
  });
});
