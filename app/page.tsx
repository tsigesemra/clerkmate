"use client"
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
import { AuthModal } from '@/components/auth/auth-modal'
import { useState } from 'react'

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false)
  return (
    <main className="site-shell">
       <Navbar onStartCase={() => setAuthOpen(true)} />
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
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />

    </main>
  
  )
}
