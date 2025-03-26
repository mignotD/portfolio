import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Blog } from '@/components/blog'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
