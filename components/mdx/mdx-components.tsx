import type { MDXComponents } from "mdx/types";

import { Callout } from "./callout";
import { CodeBlock } from "./code-block";
import { Figure } from "./figure";

export function getMDXComponents(extra?: MDXComponents): MDXComponents {
  return {
    Callout,
    CodeBlock,
    Figure,
    ...extra
  };
}
