import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("<Button />", () => {
  it("Primary variant should render proper classes", () => {
    render(<Button>Some mock text</Button>);

    const btn = screen.getByTestId("btn-id");

    expect(btn.className).toContain("primary");

    const btnText = screen.getByText(/Some mock text/i);
    expect(btnText).toBeInTheDocument();
  });

  it("Secondary variant should render proper classes", () => {
    render(<Button variant="secondary">Some mock text</Button>);

    const btn = screen.getByTestId("btn-id");
    expect(btn.className).toContain("secondary");
  });

  it("should render proper classes", () => {
    render(
      <Button variant="secondary">
        <div>Text in children</div>
      </Button>
    );

    const btn = screen.getByTestId("btn-id");
    expect(btn.className).toContain("secondary");

    const btnText = screen.getByText(/Text in children/i);
    expect(btnText).toBeInTheDocument();
  });
});
