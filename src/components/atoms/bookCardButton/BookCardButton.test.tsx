import * as React from "react";
import { render, fireEvent ,screen} from "@testing-library/react";
import BookCardButton from "./BookCardButton";

describe("Testing Account Avatar", () => {
  it("should match the default snapshot", () => {
    const { container } = render(<BookCardButton btnText="Add to library" />);
    expect(container).toMatchSnapshot();
  });

  it('should call on click method of button', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <BookCardButton
        btnText="Add to library"
        onClick={handleClick}
      />,
    );
    fireEvent.click(screen.getByText('Add User Group'));
    expect(handleClick).toHaveBeenCalled();
  });
});


