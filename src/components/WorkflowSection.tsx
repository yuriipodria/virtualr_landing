import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import { fadeInContent, fadeInHeading } from "../constants/animations";
import { motion } from "framer-motion";
import codeImage from "../assets/code.jpg";

const WorkflowSection = () => {
  return (
    <section className="mt-20" id="workflow-section">
      <motion.h2 className="heading-primary" {...fadeInHeading}>
        Accelerate Your <span className="gradient-text">Coding flow</span>
      </motion.h2>

      <div className="mt-10 flex flex-col gap-8 lg:flex-row">
        <motion.img
          src={codeImage}
          alt="code"
          className="w-full object-cover lg:w-1/2"
          {...fadeInContent}
        />

        <motion.ul className="mt-10 flex flex-col gap-12" {...fadeInContent}>
          {checklistItems.map((item) => (
            <li key={item.title} className="flex justify-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-green-400 bg-neutral-900 p-2 text-green-400">
                <CheckCircle2 />
              </div>

              <div>
                <h3 className="text-xl">{item.title}</h3>

                <p className="text-md mt-3 text-neutral-500">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default WorkflowSection;
