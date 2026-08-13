"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="mx-auto max-w-3xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-primary-foreground sm:text-5xl">
            Ready to Master Bedside History Taking?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Join medical students who are becoming more confident, organized,
            and thoughtful clinicians.
          </p>
        </div>
        <Button size="lg" variant="secondary" className="gap-2">
          Start Your Free Trial
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
