export const SLIDES = [
  {
    id: "slide-1",
    title: "DIGITAL",
    description:
      "We help organizations navigate digital transformation with comprehensive consulting and strategic planning that aligns technology with business objectives.",
    imageUrl:
      "https://images.unsplash.com/photo-1572509018340-1fc13b5df491?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",

    textColor: "#ffffff", // White text
  },
  {
    id: "slide-2",
    title: "DATA-ANALYTICS",
    description:
      "We help organizations modernize their data infrastructure to unlock insights, improve performance.",
    imageUrl:
      "https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670",

    textColor: "#ffffff", // White text
  },
  {
    id: "slide-6",
    title: "CLOUD",
    description:
      "We help organizations migrate to the cloud, optimize cloud usage, and build scalable cloud-native applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1754738381761-c3add5521373?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2128",
    color: "#ec4899", // Pink
    textColor: "#ffffff", // White text
  },
  {
    id: "slide-3",
    title: "BUSINESS-SERVICES",
    description:
      "We help organizations optimize their business processes, automate workflows, and improve efficiency.",
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
