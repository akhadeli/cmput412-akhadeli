import Report from "./report.mdx";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-4xl font-bold">CMPUT 412/503 - Exercise 2</h1>
        </div>
      </div>
      <hr className="my-4 mt-8" />
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Report</h2>
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
          "dark:prose-strong:text-gray-100"
        )}
      >
        <Report />
      </div>
    </main>
  );
}
