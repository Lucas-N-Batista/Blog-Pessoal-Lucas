import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  a: ({ href = "", ...props }) => {
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return <Link href={href} {...props} />;
    }

    return <a href={href} rel="noreferrer" target="_blank" {...props} />;
  },
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  p: (props) => <p {...props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  blockquote: (props) => <blockquote {...props} />,
  pre: (props) => <pre {...props} />,
};