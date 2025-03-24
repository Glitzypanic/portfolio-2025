export default function Experience() {
  const projects = [
    {
      title: "BRUTALIST ECOMMERCE",
      year: "2024",
      description: "Redesign of an ecommerce platform using brutalist design principles",
      tags: ["Web Design", "UI/UX", "Development"],
    },
    {
      title: "TYPOGRAPHY MAGAZINE",
      year: "2023",
      description: "Editorial design for a print and digital typography magazine",
      tags: ["Print", "Editorial", "Typography"],
    },
    {
      title: "GRID SYSTEM IDENTITY",
      year: "2023",
      description: "Brand identity based on Swiss grid system for a design studio",
      tags: ["Branding", "Identity", "Print"],
    },
    {
      title: "MINIMAL PORTFOLIO",
      year: "2022",
      description: "Personal portfolio website with focus on minimalism and typography",
      tags: ["Web Design", "Development", "UI/UX"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-white">EXPERIENCE</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-12 border-b border-gray-900">
              <div className="md:col-span-2">
                <p className="font-mono text-sm text-gray-400">{project.year}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="md:col-span-4">
                <p className="font-mono text-gray-300">{project.description}</p>
              </div>
              <div className="md:col-span-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => {
                    // Cycle through different fluorescent colors
                    const colors = [
                      { text: "text-purple-400", border: "border-purple-500", bg: "bg-purple-500/10" },
                      { text: "text-pink-400", border: "border-pink-500", bg: "bg-pink-500/10" },
                      { text: "text-orange-400", border: "border-orange-500", bg: "bg-orange-500/10" },
                      { text: "text-blue-400", border: "border-blue-500", bg: "bg-blue-500/10" },
                    ]
                    const colorIndex = tagIndex % colors.length
                    const { text, border, bg } = colors[colorIndex]

                    return (
                      <span
                        key={tagIndex}
                        className={`text-xs font-mono ${text} ${border} ${bg} border px-2 py-1 hover:bg-opacity-20 transition-colors`}
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

