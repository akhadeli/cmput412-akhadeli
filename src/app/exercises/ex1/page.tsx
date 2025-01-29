import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-4xl font-bold">CMPUT 412/503 - Exercise 1</h1>
          <p className="text-sm text-gray-500">
            In this first exercise you will learn the basic knowledge and skills
            you need to operate a Duckiebot. This exercise will be marked
            individually, although we encourage you to work together with your
            labmates. It’s to your benefit to read the whole lab, and keep an
            eye on the marking guide as you progress through the steps. Now,
            let’s get quacking! TIP: Read carefully. Most of the issues I
            encountered myself, and things I had a hard time finding, were
            because I was trying to rush through and skimming for commands to
            run.
          </p>
        </div>
      </div>
      <hr className="my-4 mt-8" />
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Report</h2>
      <Link
        href="https://github.com/akhadeli/cmput412-akhadeli-code/blob/main/exercise-1/report/CMPUT%20412%20-%20Exercise%201%20Report.pdf"
        className="text-blue-500 hover:text-blue-700"
      >
        Click here to view the report
      </Link>
      <p className="mt-4">
        The report is a PDF file that contains the report for Exercise 1.
      </p>
      <Link
        href="https://drive.google.com/drive/u/3/folders/1Oz8lvX-2B9IYTAy5Q_tjM3KNolGS6D4Q"
        className="text-blue-500 hover:text-blue-700"
      >
        Straight driving for 2 Meters demo
      </Link>
      <Link
        href="https://drive.google.com/file/d/1--Rvtb2ep4wPFSrrh2DS6eNG-1Z1K-zj/view?usp=sharing"
        className="text-blue-500 hover:text-blue-700"
      >
        Lane following demo
      </Link>
      <Link
        href="https://drive.google.com/drive/folders/1Oz8lvX-2B9IYTAy5Q_tjM3KNolGS6D4Q?usp=sharing"
        className="text-blue-500 hover:text-blue-700"
      >
        All Media (Images and Videos)
      </Link>
    </main>
  );
}
