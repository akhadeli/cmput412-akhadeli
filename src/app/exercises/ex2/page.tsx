import Report from "./report.mdx";
import { cn } from "@/lib/utils";
import "katex/dist/katex.min.css";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <div
        className={cn(
          "prose prose-headings:mt-8",
          "prose-headings:font-semibold prose-headings:text-black",
          "prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg",
          "dark:prose-headings:text-white prose-md",
          "prose-p:text-lg prose-p:leading-relaxed prose-p:text-gray-800",
          "dark:prose-p:text-gray-100",
          "prose-table:w-full prose-table:border-collapse prose-table:border-gray-300 prose-table:dark:border-gray-600",
          "dark:prose-table:text-gray-100",
          "prose-table:text-left",
          "prose-table:text-sm",
          "prose-table:text-gray-800",
          "dark:prose-table:text-gray-100",
          "prose-ul:text-gray-800",
          "dark:prose-ul:text-gray-100",
          "prose-li:text-gray-800",
          "dark:prose-li:text-gray-100",
          "prose-strong:text-gray-800 prose-strong:font-bold",
          "dark:prose-strong:text-gray-100",
          "prose-img:w-full prose-img:rounded-lg prose-img:border prose-img:border-border prose-img:dark:border-border",
          "prose-video:w-full prose-video:rounded-lg prose-video:border prose-video:border-border prose-video:dark:border-border",
          "prose-iframe:w-full prose-iframe:rounded-lg prose-iframe:border prose-iframe:border-border prose-iframe:dark:border-border",
          "prose-span:text-gray-800 prose-span:dark:text-gray-100"
        )}
      >
        <Report />
      </div>
    </main>
  );
}
