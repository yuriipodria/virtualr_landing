import { Check } from "lucide-react";
import { pricingOptions } from "../constants";

const PricingSection = () => {
  return (
    <section className="mt-20 lg:mt-10" id="pricing-section">
      <h1 className="heading-primary">Pricing</h1>

      <div className="mt-8 flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-4">
        {pricingOptions.map((item) => (
          <div
            key={item.title}
            className="w-3/4 flex-1 rounded-xl border border-neutral-700 p-10 lg:w-auto lg:whitespace-nowrap"
          >
            <h2 className="text-4xl">
              {item.title}

              {item.title === "Pro" && (
                <span className="gradient-text text-xl"> (Most popular)</span>
              )}
            </h2>

            <h2 className="mt-8 text-5xl">
              <span className="mr-2">{item.price}</span>

              <span className="text-sm tracking-tight text-neutral-400">
                /Month
              </span>
            </h2>

            <ul className="mt-8 flex flex-col gap-8">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <div className="flex h-4 w-4 items-center justify-center">
                    <Check />
                  </div>

                  {feature}
                </li>
              ))}
            </ul>

            <button
              className="mt-20 w-full cursor-pointer rounded-lg border border-orange-900 p-4 text-xl transition hover:bg-orange-900"
              onClick={() => {
                alert("You’re being redirected to the subscription page");
              }}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
