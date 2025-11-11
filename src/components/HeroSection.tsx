const HeroSection = () => {
  return (
    <section className="mt-6 flex flex-col items-center gap-10 lg:mt-20">
      <h1 className="heading-primary">
        VirtualR build tools{" "}
        <span className="gradient-text">for developers</span>
      </h1>

      <p className="max-w-4xl text-center text-lg text-neutral-500">
        Empower your craetivity and bring your VR app ideas to life with our
        initiative development tools.Get started today and turn your imagination
        into impressive reality
      </p>

      <div className="flex justify-center gap-6">
        <button
          className="cursor-pointer rounded-md bg-linear-to-r from-orange-500 to-orange-800 px-4 py-3"
          onClick={() => {
            alert("You’re being redirected to the 'Get Started' page");
          }}
        >
          Start for free
        </button>

        <button
          className="cursor-pointer rounded-md border px-4 py-3"
          onClick={() => {
            alert("You're being redirected to the documentation page");
          }}
        >
          Documentation
        </button>
      </div>

      <div className="mt-8 flex justify-center">
        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 w-1/2 rounded-lg border border-orange-700 shadow-orange-400"
        >
          <source src="/src/assets/video1.mp4" type="video/mp4" />
          Your browser doesn't support the video tag
        </video>

        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 w-1/2 rounded-lg border border-orange-700 shadow-orange-400"
        >
          <source src="/src/assets/video2.mp4" type="video/mp4" />
          Your browser doesn't support the video tag
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
