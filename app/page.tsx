import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { Workflow } from '@/components/landing/workflow'
import { PreparePreview } from '@/components/landing/sections'
import { BedsidePreview } from '@/components/landing/sections'
import { ReviewPreview } from '@/components/landing/sections'
import { PresentationPreview } from '@/components/landing/sections'
import { Specialties } from '@/components/landing/specialties'
import { Philosophy } from '@/components/landing/philosophy'
import { FinalCta } from '@/components/landing/final-cta'
import { Footer } from '@/components/landing/footer'
import { FAQ } from '@/components/landing/sections'

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <Hero />
      <Workflow />
      <PreparePreview />
      <BedsidePreview />
      <ReviewPreview />
      <PresentationPreview />
      <Specialties />
      <Philosophy />
      <FinalCta />
      <Footer />
      <FAQ />
    </main>
  )
}
