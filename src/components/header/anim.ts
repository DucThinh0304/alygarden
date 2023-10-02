export const buttonVariant = {
  hover: {
    transition: { duration: 0.5, type: "spring" },
  },
  initial: {},
};

export const spanVariantBefore = {
  hover: {
    scale: 1,
    transition: { duration: 0.5, type: "spring" },
  },
  initial: {
    scale: 0,
  },
};
export const spanVariantAfter = {
  hover: { scale: 0, transition: { duration: 0.9, type: "spring" } },
  initial: {
    scale: 1,
  },
};
export const spanVariantBurger = {
  hover: (isToggled: boolean) => ({
    backgroundColor: isToggled ? "#000" : "#fff",
  }),
};
export const spanVariantCross = {
  hover: (isToggled: boolean) => ({
    backgroundColor: isToggled ? "#000" : "#fff",
  }),
};
export const spanText = {
  hover: { marginLeft: "20px" },
};
export const translate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  initialImage: {
    y: "25%",
    opacity: 0,
  },
  enter: <T>(i: T[]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: <T>(i: T[]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
  enterImage: () => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  }),
};