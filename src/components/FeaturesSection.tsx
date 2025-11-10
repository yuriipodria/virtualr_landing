import { features } from "../constants";
const FeaturesSection = () => {
  return (
    <section className="relative mt-20">
      <div className="text-center">
        <span className="rounded-full bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-500 uppercase">
          Features
        </span>

        <h2 className="mt-10 text-3xl tracking-wide sm:text-5xl lg:mt-20 lg:text-6xl">
          Easily build <span className="gradient-text">your code</span>
        </h2>
      </div>

      <div className="mt-10 mb-20 grid grid-cols-1 gap-x-4 gap-y-20 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.text} className="flex">
            <div className="mx-8 my-2 h-max rounded-full bg-neutral-900 p-2 text-orange-700">
              {feature.icon}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xl">{feature.text}</p>

              <p className="text-md p-2 text-neutral-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
