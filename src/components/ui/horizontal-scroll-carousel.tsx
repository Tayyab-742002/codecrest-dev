"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-5 sm:gap-6 px-6 sm:px-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

const Card = ({
  card,
}: {
  card: { id: number; title: string; url: string };
}) => {
  return (
    <div
      key={card.id}
      className="group relative h-[500px] w-[420px] sm:h-[600px] sm:w-[700px] md:h-[700px] md:w-[800px] lg:h-[800px] lg:w-[900px] overflow-hidden bg-neutral-800 transition-all duration-300 hover:bg-neutral-750"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105 opacity-40"
      ></div>
      {/* <div className="absolute inset-0 z-0 bg-linear-to-t from-neutral-900 via-neutral-900/70 to-transparent" /> */}

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-3 sm:mb-4">
          {card.title}
        </h3>
        <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-white transition-all duration-300 group-hover:w-24 sm:group-hover:w-32 md:group-hover:w-40"></div>
      </div>

      <div className="absolute inset-0 z-20 border border-transparent group-hover:border-white/10 transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "E-Commerce Platform",
    url: "https://images.unsplash.com/photo-1642052503083-bc49dd433478?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    url: "https://images.unsplash.com/photo-1616077168712-fc6c788db4af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    url: "https://images.unsplash.com/photo-1588511986632-592db3d6c81f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 4,
    title: "Healthcare Portal",
    url: "https://images.unsplash.com/photo-1642054220431-649c53b0d3de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 5,
    title: "FinTech Solution",
    url: "https://images.unsplash.com/photo-1726607424599-db0c41681494?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 6,
    title: "Design System",
    url: "https://images.unsplash.com/photo-1586780807983-950860a50ece?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 7,
    title: "Cloud Infrastructure",
    url: "https://images.unsplash.com/photo-1759752394755-1241472b589d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
];
