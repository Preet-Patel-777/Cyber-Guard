"use client"

import Link from "next/link"
import {
  Shield,
  ArrowRight,
  AlertTriangle,
  FileSearch,
  ClipboardList,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Shield className="size-3.5" />
            <span>Trusted Cyber Incident Advisory for India</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Report Cyber Attacks.{" "}
            <span className="text-primary">Get Expert Guidance.</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Been scammed online? Noticed suspicious activity? CyberGuard walks
            you through identifying the threat, taking immediate action, and
            filing official reports with Indian authorities.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-base px-8 h-12 font-semibold shadow-[0_0_20px_rgba(0,212,255,0.15)]">
              <Link href="/report">
                Start Report
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 font-semibold"
            >
              <Link href="/resources">View Resources</Link>
            </Button>
          </div>

          {/* Emergency Helpline */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-2.5 text-sm">
            <AlertTriangle className="size-4 text-destructive" />
            <span className="text-muted-foreground">
              For financial fraud emergencies, call{" "}
              <a href="tel:1930" className="font-bold text-foreground">
                1930
              </a>{" "}
              immediately
            </span>
          </div>
        </div>

        {/* Stats / Steps Cards */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-4 md:grid-cols-3 lg:mt-20">
          {[
            {
              icon: AlertTriangle,
              title: "Identify the Threat",
              description:
                "Answer guided questions to determine the type of cyber attack you experienced.",
              step: "01",
            },
            {
              icon: FileSearch,
              title: "Get Action Plan",
              description:
                "Receive a personalized recovery plan with steps to secure your accounts and data.",
              step: "02",
            },
            {
              icon: ClipboardList,
              title: "File Official Report",
              description:
                "Access direct links and instructions for reporting to CERT-In, police, and RBI.",
              step: "03",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="group relative rounded-xl border border-border/60 bg-card/80 p-6 transition-all hover:border-primary/30 hover:bg-card"
            >
              <div className="absolute right-4 top-4 font-mono text-xs text-muted-foreground/40">
                {item.step}
              </div>
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20 text-primary group-hover:bg-primary/15 transition-colors">
                <item.icon className="size-5" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
