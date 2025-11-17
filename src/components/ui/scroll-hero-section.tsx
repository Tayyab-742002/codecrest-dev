"use client";

import { type CSSProperties } from "react";
import styles from "./scroll-hero-section.module.css";

type CSSVariableStyles = CSSProperties & {
  "--count": string;
  "--start": string;
  "--space": string;
  "--accent": string;
  "--foreground-colored": string;
};

export type AboutScrollSectionProps = {
  /** Words that cycle within the sticky heading */
  highlights?: string[];
  /** Upper eyebrow label above the heading */
  eyebrow?: string;
  /** Prefix sentence shown before the highlight words */
  headingPrefix?: string;
  /** Primary about copy */
  description?: string;
  /** Supporting paragraph beneath the main copy */
  secondaryDescription?: string;
  /** Optional CTA label; omit to hide */
  ctaLabel?: string;
  /** Optional CTA href; omit to hide */
  ctaHref?: string;
  /** Accent hue used for gradients */
  accentHue?: number;
  /** Where the highlight band starts (vh) */
  startOffsetVh?: number;
  /** Space (vh) below the sticky header block */
  stackSpacingVh?: number;
};

const DEFAULT_HIGHLIGHTS = [
  "clarity.",
  "momentum.",
  "confidence.",
  "products.",
];

function buildAccent(hue: number) {
  return `oklch(0.68 0.18 ${hue})`;
}

function ensureHighlights(highlights: string[]) {
  return highlights.length > 0 ? highlights : DEFAULT_HIGHLIGHTS;
}

export function AboutScrollSection({
  highlights = DEFAULT_HIGHLIGHTS,
  eyebrow = "About CodeCrest",
  headingPrefix = "We help teams unlock",
  accentHue = 266,
  startOffsetVh = 48,
  stackSpacingVh = 24,
}: AboutScrollSectionProps) {
  const highlightWords = ensureHighlights(highlights);
  const styleVars: CSSVariableStyles = {
    "--count": String(highlightWords.length),
    "--start": `${startOffsetVh}vh`,
    "--space": `${stackSpacingVh}vh`,
    "--accent": buildAccent(accentHue),
    "--foreground-colored": "oklch(0.97 0.02 260)",
  };

  return (
    <section
      className={`${styles.wrapper} relative isolate flex min-h-screen w-full flex-col overflow-hidden text-foreground`}
      style={styleVars}
      aria-labelledby="about-scroll-heading"
    >
      <header className={styles.stickyHeader}>
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-12">
          <div className={styles.stickyContent}>
            <div
              className={`${styles.headline} flex flex-col items-center gap-6 text-center sm:gap-8`}
            >
              <span
                className={`${styles.eyebrow} text-[clamp(1rem,3vw,1.75rem)] font-bold uppercase tracking-[0.5em] sm:tracking-[0.6em]`}
              >
                {eyebrow}
              </span>
              <h2 id="about-scroll-heading" className="sr-only">
                {headingPrefix} {highlightWords[0]}
              </h2>
              <span
                className={`${styles.headingPrefix} text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight sm:text-[clamp(2.25rem,6vw,4.5rem)]`}
              >
                {headingPrefix}
              </span>
              <ul
                aria-hidden="true"
                className={`${styles.wordList} font-semibold leading-[0.82]`}
              >
                {highlightWords.map((word, index) => (
                  <li
                    key={`${word}-${index}`}
                    className={`${styles.word}`}
                    style={{ "--i": String(index) } as CSSProperties}
                  >
                {word}
              </li>
            ))}
          </ul>
            </div>
          </div>
        </div>
      </header>

      {/* <main className={styles.main}>
        <div
          className={`${styles.panel} flex flex-col gap-8 text-left text-foreground/90 sm:gap-10`}
        >
          <div className="flex flex-col gap-5 text-balance text-lg leading-relaxed sm:text-[1.35rem]">
            <p className="font-medium text-foreground">{description}</p>
            <p className="text-base text-foreground/65 sm:text-lg">
              {secondaryDescription}
            </p>
    </div>

          {showCta ? (
            <div>
              <a
                href={ctaHref}
                className="inline-flex w-fit items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.38em] text-foreground transition hover:border-foreground/30 hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {ctaLabel}
              </a>
            </div>
          ) : null}
        </div>
      </main> */}
    </section>
  );
}

export { AboutScrollSection as WordHeroPage };
