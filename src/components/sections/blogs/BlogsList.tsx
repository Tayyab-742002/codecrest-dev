"use client";

import Image from "next/image";
import Link from "next/link";
import { getAllBlogs } from "@/src/data/blog.data";

const blogs = getAllBlogs();

export default function BlogsList() {
  if (!blogs.length) {
    return null;
  }

  const [featured, ...rest] = blogs;
  const secondary = rest.slice(0, 2);

  return (
    <section className="w-full bg-[#050505] py-20 text-white sm:py-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Latest articles
          </h2>
          <p className="text-sm text-white/60">
            Field notes, playbooks, and shipping logs from the Codecrest team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="flex cursor-pointer flex-col gap-5 md:col-span-2">
            <Link
              href={`/blogs/${featured.slug}`}
              className="group flex flex-col gap-5"
            >
              <div className="relative aspect-video overflow-hidden  bg-white/5">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="pb-2 border-b border-purple-600  px-4 py-1 text-xs uppercase tracking-[0.4em]">
                  {featured.category}
                </span>
                <span>
                  {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>{featured.readTimeMinutes} min read</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-semibold tracking-tight">
                  {featured.title}
                </h3>
                <p className="text-base text-white/70">{featured.excerpt}</p>
              </div>
            </Link>
          </article>

          {secondary.map((post) => (
            <article key={post.id} className="flex flex-col gap-4">
              <Link
                href={`/blogs/${post.slug}`}
                className="group flex flex-col gap-4"
              >
                <div className="relative aspect-video overflow-hidden bg-white/5">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                  <span className="pb-2 border-b border-purple-600 px-4 py-1 text-xs uppercase tracking-[0.4em]">
                    {post.category}
                  </span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>{post.readTimeMinutes} min read</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl font-semibold tracking-tight">
                    {post.title}
                  </h4>
                  <p className="text-sm text-white/70">{post.subtitle}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
