export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 md:col-start-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 text-white">ABOUT</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl mb-6 font-mono leading-relaxed text-gray-300">
              I am a minimalist designer focused on creating impactful digital experiences through brutalist and
              Swiss-inspired design principles. My work emphasizes typography, grid systems, and raw aesthetics.
            </p>
            <p className="text-lg md:text-xl font-mono leading-relaxed text-gray-300">
              With over 5 years of experience in both web and graphic design, I bring concepts to life with a focus on
              functionality, usability, and visual impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

