import { render, screen } from "@testing-library/react";
import { PostCard } from ".";

// Mock
import { postCardPropsMock } from "./mock";

const post = postCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard post={post} />);

    expect(screen.getByRole("img", { name: /title 1/i })).toHaveAttribute("src", post.cover);
    expect(screen.getByRole("heading", { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByText("Body 1")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard post={post} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
