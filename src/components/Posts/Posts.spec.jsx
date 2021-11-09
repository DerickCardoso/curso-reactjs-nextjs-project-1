import { render, screen } from "@testing-library/react";

import { Posts } from ".";

const posts = [
  {
    id: 1,
    title: "title 1",
    body: "body 1",
    cover: "img/img1.png"
  },
  {
    id: 2,
    title: "title 2",
    body: "body 2",
    cover: "img/img2.png"
  },
  {
    id: 3,
    title: "title 3",
    body: "body 3",
    cover: "img/img3.png"
  }
];

describe("<Posts />", () => {
  it("should render Posts", () => {
    render(<Posts posts={posts} />);

    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole("img", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/title/i)).toHaveLength(3);
    expect(screen.getByRole("img", { name: /title 3/i })).toHaveAttribute("src", "img/img3.png");
  });

  it("should not render Posts", () => {
    render(<Posts />);

    expect(screen.queryAllByRole("heading", { name: /title/i })).toHaveLength(0);
  });

  it("should match snapshot", () => {
    const { container } = render(<Posts posts={posts} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
