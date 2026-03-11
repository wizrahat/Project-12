import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Code2,
  GraduationCap,
  LifeBuoy,
  ArrowRightIcon,
  Zap,
} from "lucide-react";
import Link from "next/link";

const sections = [
  {
    icon: Zap,
    title: "Getting Started",
    description:
      "New here? Set up your account, enroll in your first course, and hit the ground running.",
    links: [
      { label: "Create an account", href: "#" },
      { label: "Browse courses", href: "/courses" },
      { label: "Enroll in a course", href: "#" },
      { label: "Track your progress", href: "#" },
    ],
  },
  {
    icon: GraduationCap,
    title: "For Students",
    description:
      "Everything you need to get the most out of your learning journey.",
    links: [
      { label: "Manage your profile", href: "/account" },
      { label: "View enrolled courses", href: "/account/enrolled-courses" },
      {
        label: "Download certificates",
        href: "/account/testimonials-certificates",
      },
      { label: "Leave a review", href: "#" },
    ],
  },
  {
    icon: BookOpen,
    title: "For Instructors",
    description:
      "Learn how to create, publish, and manage your courses on the platform.",
    links: [
      { label: "Become an instructor", href: "/register/instructor" },
      { label: "Create your first course", href: "#" },
      { label: "Manage your dashboard", href: "/dashboard" },
      { label: "Payout & earnings", href: "#" },
    ],
  },
  {
    icon: Code2,
    title: "Platform & API",
    description:
      "Technical docs for developers integrating or extending the platform.",
    links: [
      { label: "REST API overview", href: "#" },
      { label: "Authentication", href: "#" },
      { label: "Webhooks", href: "#" },
      { label: "Rate limits", href: "#" },
    ],
  },
  {
    icon: LifeBuoy,
    title: "Support & Policies",
    description: "Refund policies, community guidelines, and how to get help.",
    links: [
      { label: "Refund policy", href: "#" },
      { label: "Community guidelines", href: "#" },
      { label: "Contact support", href: "#" },
      { label: "Report an issue", href: "#" },
    ],
  },
];

export default function DocsPage() {
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
            Documentation
          </span>
          <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            How Can We Help?
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Everything you need to know about using the platform — for students,
            instructors, and developers.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              href="/courses"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Start Learning
            </Link>
            <Link
              href="/register/instructor"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Become an Instructor
            </Link>
          </div>
        </div>
      </section>

      {/* Doc Sections */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="flex flex-col items-center gap-2 text-center">
          <SectionTitle>Browse Documentation</SectionTitle>
          <p className="max-w-[36rem] text-muted-foreground sm:text-lg">
            Find guides, references, and everything in between.
          </p>
        </div>
        <div className="mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="rounded-lg border bg-background p-6 hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-muted">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-semibold">{section.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors group"
                      >
                        <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
