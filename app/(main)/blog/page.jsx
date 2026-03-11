import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

// Replace with real query e.g. getPosts()
const posts = [
  {
    id: 1,
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    excerpt:
      "A beginner-friendly walkthrough of the App Router, server components, and everything you need to ship your first Next.js app.",
    category: "Development",
    author: "John Doe",
    date: "March 5, 2025",
    readTime: "6 min read",
  },
  {
    id: 2,
    slug: "design-systems-101",
    title: "Design Systems 101: Build Once, Use Everywhere",
    excerpt:
      "Learn how to build a robust, scalable design system that keeps your UI consistent across every project.",
    category: "Design",
    author: "Jane Smith",
    date: "February 20, 2025",
    readTime: "8 min read",
  },
  {
    id: 3,
    slug: "mastering-typescript",
    title: "Mastering TypeScript: Tips from the Trenches",
    excerpt:
      "Real-world TypeScript patterns that will make your codebase more predictable, maintainable, and a joy to work with.",
    category: "Development",
    author: "Alex Lee",
    date: "January 14, 2025",
    readTime: "10 min read",
  },
  {
    id: 4,
    slug: "freelancing-as-a-developer",
    title: "How to Land Your First Freelance Dev Client",
    excerpt:
      "Practical steps to go from zero to booked — building a portfolio, pitching, and closing your first client.",
    category: "Career",
    author: "John Doe",
    date: "December 30, 2024",
    readTime: "7 min read",
  },
];

const categories = ["All", "Development", "Design", "Career"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 grainy">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium border shadow-lg">
            Blog
          </span>
          <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Insights &amp; Tutorials
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Tips, tutorials, and stories from our instructors and community.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container pt-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={cat === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-1.5 text-sm"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container py-10 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-all duration-300 hover:scale-[1.02] flex flex-col"
            >
              {/* Thumbnail placeholder */}
              <div className="relative h-44 w-full overflow-hidden bg-muted flex items-center justify-center text-muted-foreground text-xs">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                {post.category}
              </div>

              <div className="flex flex-col flex-1 gap-3 p-5">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-semibold leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2 border-t">
                  <span className="text-xs text-muted-foreground">
                    {post.author} · {post.date}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
