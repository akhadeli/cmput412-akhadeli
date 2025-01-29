import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="flex justify-center items-center gap-4">
        <img
          src="/cmput412-akhadeli/images/profile.jpeg"
          alt="Abdullah Khadeli"
          className="rounded-full w-24 h-24 object-cover"
        />
        <div className="flex flex-col gap-0.5">
          <h1 className="text-4xl font-bold">CMPUT 412/503 - Exercise 1</h1>
        </div>
      </div>
      <hr className="my-4 mt-8" />
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Report</h2>
      <Link
        href="https://github.com/akhadeli/cmput412-akhadeli-code/blob/main/exercise-1/report/CMPUT%20412%20-%20Exercise%201%20Report.pdf"
        className="text-blue-500 hover:text-blue-700"
      >
        Report
      </Link>
    </main>
  );
}
