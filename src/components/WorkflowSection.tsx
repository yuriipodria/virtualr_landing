import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

const WorkflowSection = () => {
  return (
    <section className="mt-20" id="workflow-section">
      <h2 className="heading-primary">
        Accelerate Your <span className="gradient-text">Coding flow</span>
      </h2>

      <div className="mt-10 flex flex-col gap-8 lg:flex-row">
        <img
          src="/src/assets/code.jpg"
          alt="code"
          className="w-full object-cover lg:w-1/2"
        />

        <ul className="mt-10 flex flex-col gap-12">
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
        </ul>
      </div>
    </section>
  );
};

export default WorkflowSection;
