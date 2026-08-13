"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  FileText,
  Lightbulb,
  MessageSquare,
  BookOpen,
  Presentation,
} from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "History Preparation",
    description:
      "Structured templates guide you through comprehensive history taking systematically.",
  },
  {
    icon: FileText,
    title: "Bedside Checklist",
    description:
      "Never forget critical questions. Stay organized during patient encounters.",
  },
  {
    icon: Lightbulb,
    title: "Structured History Writing",
    description:
      "Transform raw notes into organized clinical histories with intelligent formatting.",
  },
  {
    icon: MessageSquare,
    title: "AI Review and Feedback",
    description:
      "Get intelligent suggestions to strengthen clinical reasoning and completeness.",
  },
  {
    icon: BookOpen,
    title: "Clinical Reasoning Support",
    description:
      "Explore connections between findings and diagnoses to deepen understanding.",
  },
  {
    icon: Presentation,
    title: "Presentation Preparation",
    description:
      "Practice presenting cases clearly and confidently to attendings and colleagues.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Comprehensive Clinical Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master bedside history taking and strengthen
            your clinical skills.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="border-border hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
