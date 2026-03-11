import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  PlayCircle,
  Radio,
  ClipboardCheck,
  Award,
  LayoutDashboard,
  Users,
  Smartphone,
  TrendingUp,
  ArrowRightIcon,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: PlayCircle,
    title: "Video Courses",
    description:
      "Learn at your own pace with high-quality, on-demand video lessons crafted by expert instructors. Pause, rewind, and rewatch anytime.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Radio,
    title: "Live Sessions",
    description:
      "Join interactive live classes, ask questions in real time, and learn alongside a global community of students.",
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    icon: ClipboardCheck,
    title: "Quizzes & Assessments",
    description:
      "Reinforce your learning with end-of-module quizzes and graded assessments that test your real understanding.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: Award,
    title: "Certificates",
    description:
      "Earn verified certificates upon course completion. Download, share on LinkedIn, or verify with a unique credential ID.",
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    icon: LayoutDashboard,
    title: "Instructor Dashboard",
    description:
      "Instructors get a powerful dashboard to create courses, manage content, track student progress, and monitor earnings.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Users,
    title: "Community & Forums",
    description:
      "Connect with fellow learners, ask questions, share projects, and grow your network inside a vibrant learning community.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "Learn on the go with a fully responsive experience across mobile, tablet, and desktop — no app download required.",
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Stay motivated with visual progress indicators, completion streaks, and personalized learning insights.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
];

export default function FeaturesPage() {
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
            Features
          </span>
          <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Everything You Need to Learn &amp; Teach
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A platform built for serious learners and passionate instructors —
            with every tool you need to succeed.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              href="/courses"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Explore Courses
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

      {/* Features Grid */}
      <section
        id="features"
        className="container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <SectionTitle>Platform Features</SectionTitle>
          <p className="max-w-[36rem] text-muted-foreground sm:text-lg">
            Built to make learning engaging, flexible, and rewarding for
            everyone.
          </p>
        </div>

        <div className="mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02] flex flex-col gap-4"
              >
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-lg",
                    feature.color,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="rounded-lg border bg-muted/40 p-10 md:p-16 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl md:text-4xl">
            Ready to Start Learning?
          </h2>
          <p className="text-muted-foreground sm:text-lg max-w-xl mx-auto">
            Join thousands of students already leveling up their skills on our
            platform.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center pt-2">
            <Link
              href="/register/student"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-1.5",
              )}
            >
              View Pricing <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
