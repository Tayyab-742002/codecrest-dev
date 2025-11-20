"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

export default function ContactHero() {
  const textControls = useAnimation();

  useEffect(() => {
    textControls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + 0.2,
        duration: 0.7,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }));
  }, [textControls]);

  const title = "Let's build something extraordinary together.";

  return (
    <section className="minimal-root">
      <style>{`
@import url('https://fonts.cdnfonts.com/css/hubot-sans');

.minimal-root, .minimal-root * {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.minimal-root {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  --bg: #0a0a0a;
  --fg: #fafafa;
  --muted: #a1a1aa;
  --border: #27272a;
  --accent: #e5e7eb;

  background: var(--bg);
  color: var(--fg);
  font-family: 'Hubot Sans', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
}

.video-background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.8));
  z-index: 1;
}

/* header */
.header {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  z-index: 10;
}
.brand {
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
}
.cta {
  height: 36px;
  padding: 0 14px;
  border-radius: 10px;
  background: #111;
  color: var(--fg);
  border: 1px solid var(--border);
  font-size: 13px;
  line-height: 36px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}
.cta:hover { background: #0d0d0d; }

/* hero center */
.hero {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  text-align: center;
  pointer-events: none;
  z-index: 2;
}
.kicker {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 14px;
}
.title {
  font-weight: 600;
  font-size: clamp(32px, 8vw, 88px);
  line-height: 0.95;
  margin: 0;
  color: var(--fg);
  text-shadow: none;
}
.subtitle {
  margin-top: 18px;
  font-size: clamp(14px, 2.2vw, 18px);
  color: var(--muted);
}

/* footer section (copy) */
.content {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 32px 24px;
  border-top: 1px solid var(--border);
  display: grid;
  place-items: center;
  text-align: center;
  gap: 6px;
  z-index: 2;
}
.content .tag {
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.content .heading {
  font-size: 22px;
  font-weight: 600;
  color: var(--fg);
}
.content .desc {
  font-size: 14px;
  color: var(--muted);
  max-width: 680px;
}
      `}</style>

      {/* Video Background */}
      <div className="pointer-events-none absolute inset-0">
        <video
          className="video-background"
          src="/background-video-2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="video-overlay" />
      </div>

      {/* Header */}
      <header className="header">
        <Link className="brand" href="/">
          CODECREST
        </Link>
        <Link className="cta" href="/contact">
          Contact
        </Link>
      </header>

      {/* Hero */}
      <main className="hero">
        <div>
          <motion.div
            custom={0}
            initial={{ opacity: 0, y: 30 }}
            animate={textControls}
            className="kicker"
          >
            Get In Touch
          </motion.div>
          <h1 className="title">
            {title.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                custom={index}
                initial={{ opacity: 0, y: 60 }}
                animate={textControls}
                className="inline-block"
                style={{ whiteSpace: "pre" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          <motion.p
            custom={title.length}
            initial={{ opacity: 0, y: 30 }}
            animate={textControls}
            className="subtitle"
          >
            Ready to transform your ideas into reality? Get in touch and
            let&apos;s discuss how we can help you achieve your goals.
          </motion.p>
        </div>
      </main>

      {/* Bottom content */}
      <section className="content">
        <motion.div
          custom={title.length + 10}
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}
          className="tag"
        >
          Designed for success
        </motion.div>
        <motion.div
          custom={title.length + 15}
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}
          className="heading"
        >
          Professional. Reliable. Results-driven.
        </motion.div>
        <motion.p
          custom={title.length + 20}
          initial={{ opacity: 0, y: 20 }}
          animate={textControls}
          className="desc"
        >
          Start your journey with us today. We&apos;re here to help you turn
          your vision into a reality. Get in touch and let&apos;s make it
          happen.
        </motion.p>
      </section>
    </section>
  );
}
