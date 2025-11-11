import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { fadeInContent, fadeInHeading } from "../constants/animations";

const TestimonialsSection = () => {
  return (
    <section id="testimonials-section" className="mt-20">
      <motion.h1 className="heading-primary" {...fadeInHeading}>
        What people are saying
      </motion.h1>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.text}
            className="h-fit rounded-md border border-neutral-800 p-6 text-base font-thin"
            {...fadeInContent}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
