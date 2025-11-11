import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10">
      <div className="grid grid-cols-2 gap-12 px-8 text-center sm:grid-cols-3 sm:gap-4 sm:text-left">
        <div>
          <h4 className="text-md font-semibold">Resources</h4>

          <div className="mt-4 space-y-2">
            {resourcesLinks.map((item) => (
              <div key={item.text}>
                <a
                  href={item.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-md font-semibold">Platform</h4>

          <div className="mt-4 space-y-2">
            {platformLinks.map((item) => (
              <div key={item.text}>
                <a
                  href={item.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h4 className="text-md font-semibold">Community</h4>

          <div className="mt-4 space-y-2">
            {communityLinks.map((item) => (
              <div key={item.text}>
                <a
                  href={item.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
