export const fadeInContent = {
  initial: { opacity: 0, y: 50, scale: 0.6, originY: 1 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, ease: "easeInOut" as const },
  viewport: { once: true, amount: 0 },
};

export const fadeInHeading = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" as const },
  viewport: { once: true, amount: 0.2 },
};
