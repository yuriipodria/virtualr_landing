import { testimonials } from "../constants";

const TestimonialsSection = () => {
  return (
    <section id="testimonials-section" className="mt-20">
      <h1 className="heading-primary">What people are saying</h1>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.text}
            className="h-fit rounded-md border border-neutral-800 p-6 text-base font-thin"
          >
            <p>{testimonial.text}</p>

            <div className="mt-8 flex gap-6">
              <img
                src={testimonial.image}
                alt={testimonial.user}
                className="h-12 w-12 rounded-full border border-neutral-300"
              />

              <div className="flex flex-col justify-between">
                <h6>{testimonial.user}</h6>

                <p className="text-sm font-normal text-neutral-600 italic">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
