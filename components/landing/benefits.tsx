"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Brain, Clock, Zap } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Better Organized Histories",
    description:
      "Systematically structure patient information for clarity and completeness.",
  },
  {
    icon: Brain,
    title: "Never Forget Important Questions",
    description:
      "AI-powered checklists ensure you cover all critical clinical elements.",
  },
  {
    icon: Zap,
    title: "Learn Clinical Reasoning",
    description:
      "Understand the connections between patient findings and clinical decision-making.",
  },
  {
    icon: CheckCircle,
    title: "Feel More Prepared",
    description:
      "Walk into bedside sessions confident that you&apos;re well-organized and thorough.",
  },
  {
    icon: Clock,
    title: "Save Time While Studying",
    description:
      "Focus on learning, not formatting. Automated structure saves hours each week.",
  },
  {
    icon: Brain,
    title: "Build Confidence",
    description:
      "Present clearly and handle questions with the knowledge that comes from preparation.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Why Students Choose Clinical Case Companion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real benefits that help you excel in your clinical training.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card key={benefit.title} className="border-border">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
