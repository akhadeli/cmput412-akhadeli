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
          <h1 className="text-4xl font-bold">
            CMPUT 412/503 - Abdullah Khadeli
          </h1>
          <h3 className="text-xl font-semibold">
            Experimental Mobile Robotics
          </h3>
        </div>
      </div>
      <hr className="my-4 mt-8" />
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Biography</h2>
      <p className="mb-4">
        I am a fourth-year undergraduate student at the University of Alberta
        studying Computer Science.
      </p>
      <h2 className="mb-2 mt-8 text-2xl font-semibold">
        Stuff I find interesting:
      </h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Computer Vision</li>
        <li>Robotics</li>
        <li>Generative AI (tinkering with LLMs for fun)</li>
        <li>Music</li>
      </ul>
    </main>
  );
}
