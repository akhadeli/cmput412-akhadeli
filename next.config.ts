import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { Pluggable } from "unified";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/cmput412-akhadeli",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [["remark-gfm", {}] as Pluggable],
  },
});

export default withMDX(nextConfig);
