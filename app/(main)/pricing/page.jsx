import { SectionTitle } from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with a handful of free courses.",
    badge: null,
    cta: "Get Started",
    ctaHref: "/register/student",
    variant: "outline",
    features: [
      "Access to free courses",
      "Community forum access",
      "Course completion certificates",
      "Mobile & desktop access",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Unlock the full library and accelerate your learning.",
    badge: "Most Popular",
    cta: "Start Pro",
    ctaHref: "/register/student?plan=pro",
    variant: "default",
    features: [
      "Everything in Free",
      "Unlimited course access",
      "Downloadable resources",
      "Priority support",
      "Early access to new courses",
      "Offline viewing",
    ],
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For teams that want to learn and grow together.",
    badge: null,
    cta: "Contact Us",
    ctaHref: "/contact",
    variant: "outline",
    features: [
      "Everything in Pro",
      "Up to 10 seats",
      "Team progress dashboard",
      "Custom learning paths",
      "Dedicated account manager",
      "Invoice billing",
    ],
  },
];

export default function PricingPage() {
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
            Pricing
          </span>
          <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Simple, Transparent Pricing
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Start free. Upgrade when you&apos;re ready. No hidden fees, no
            surprises.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="container py-12 md:py-20">
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-lg border bg-background p-8 transition-shadow hover:shadow-md",
                plan.badge && "border-primary shadow-md",
              )}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {plan.badge}
                </Badge>
              )}
              <div className="mb-6">
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="mb-1 text-sm text-muted-foreground">
                    / {plan.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={cn(
                  buttonVariants({ variant: plan.variant, size: "sm" }),
                  "w-full",
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container pb-20 max-w-2xl mx-auto space-y-6">
        <SectionTitle>FAQs</SectionTitle>
        <div className="divide-y rounded-lg border">
          {[
            {
              q: "Can I cancel anytime?",
              a: "Yes, you can cancel your subscription at any time. You'll retain access until the end of your billing period.",
            },
            {
              q: "Do you offer refunds?",
              a: "We offer a 7-day money-back guarantee on all paid plans, no questions asked.",
            },
            {
              q: "Can I switch plans later?",
              a: "Absolutely. You can upgrade or downgrade your plan at any time from your account settings.",
            },
            {
              q: "Is there a student discount?",
              a: "Yes! Students get 50% off the Pro plan. Reach out to us with your student email to claim it.",
            },
          ].map((faq) => (
            <div key={faq.q} className="px-6 py-4">
              <p className="font-medium text-sm">{faq.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
