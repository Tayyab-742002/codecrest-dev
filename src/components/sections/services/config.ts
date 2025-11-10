export const SLIDES = [
  {
    id: "slide-1",
    title: "frontend dev",
    description:
      "Building beautiful, responsive, and performant user interfaces that users love",
    imageUrl:
      "https://images.unsplash.com/photo-1572509018340-1fc13b5df491?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",

    textColor: "#ffffff", // White text
  },
  {
    id: "slide-2",
    title: "backend dev",
    description:
      "Scalable server solutions and APIs that power your applications",
    imageUrl:
      "https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670",

    textColor: "#ffffff", // White text
  },
  {
    id: "slide-6",
    title: "UI UX design",
    description:
      "Creating intuitive and engaging experiences that resonate with your audience",
    imageUrl:
      "https://images.unsplash.com/photo-1754738381761-c3add5521373?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2128",
    color: "#ec4899", // Pink
    textColor: "#ffffff", // White text
  },
  {
    id: "slide-3",
    title: "video editing",
    description:
      "Professional video production and editing that tells your story",
    imageUrl:
      "https://images.unsplash.com/photo-1651122555286-ffab5a04131a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    color: "#f59e0b", // Amber
    textColor: "#ffffff", // White text
  },
];

// Extract colors array for the HoverSlider component
export const SERVICE_COLORS = SLIDES.map((slide) => slide.color).filter(
  (color): color is string => color !== undefined
);
