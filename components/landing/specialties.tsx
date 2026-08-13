import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./shared";
const specialties = [
  "Pediatrics",
  "Internal Medicine",
  "Surgery",
  "Obstetrics & Gynecology",
];
export function Specialties() {
  return (
    <section className="specialties-section section-wrap">
      <SectionLabel>One workflow, many wards</SectionLabel>
      <div className="specialty-list">
        {specialties.map((specialty, i) => (
          <a href="#start" key={specialty}>
            <span>0{i + 1}</span>
            {specialty}
            <ArrowRight size={16} />
          </a>
        ))}
      </div>
    </section>
  );
}
