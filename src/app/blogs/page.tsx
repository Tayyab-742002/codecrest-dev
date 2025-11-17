import BlogsHero from "@/src/components/sections/blogs/BlogsHero";
import BlogsList from "@/src/components/sections/blogs/BlogsList";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <BlogsHero />
      <BlogsList />
    </main>
  );
}
