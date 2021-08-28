import CustomInput from "./CustomInput";
import { render, screen } from "@testing-library/react";

describe("<Button />", () => {
  it("Primary variant should render proper classes", () => {
    render(<CustomInput placeholder="some test placeholder" />);

    const input = screen.getByTestId("input-id");

    expect(input.className).toContain("medium");

    const placeholderText = screen.queryByPlaceholderText(
      /some test placeholder/i
    );
    expect(placeholderText).toBeInTheDocument();
  });
});
