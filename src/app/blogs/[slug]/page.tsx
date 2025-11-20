import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/src/data/blog.data";
import BlogHero from "@/src/components/sections/blogs/BlogHero";
import BlogContent from "@/src/components/sections/blogs/BlogContent";
import BlogStats from "@/src/components/sections/blogs/BlogStats";
import BlogTakeaways from "@/src/components/sections/blogs/BlogTakeaways";
import BlogResources from "@/src/components/sections/blogs/BlogResources";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found | Codecrest",
    };
  }

  return {
    title: blog.metaTitle || `${blog.title} | Codecrest`,
    description: blog.metaDescription || blog.excerpt,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHero blog={blog} />
      <BlogContent blog={blog} />
      {blog.stats && blog.stats.length > 0 && <BlogStats stats={blog.stats} />}
      {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
        <BlogTakeaways takeaways={blog.keyTakeaways} />
      )}
      {/* {blog.relatedResources && blog.relatedResources.length > 0 && (
        <BlogResources resources={blog.relatedResources} />
      )} */}
    </div>
  );
}
