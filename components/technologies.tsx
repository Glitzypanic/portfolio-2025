export default function Technologies() {
  const skills = [
    { name: "UI/UX Design", category: "Design" },
    { name: "Mockups", category: "Design" },

    { name: "Figma", category: "Software" },
    { name: "Trello", category: "Software" },
    { name: "Notion", category: "Software" },

    { name: "HTML/CSS", category: "Development" },
    { name: "JavaScript", category: "Development" },
    { name: "React", category: "Development" },
    { name: "Next.js", category: "Development" },
    { name: "Tailwind CSS", category: "Development" },
    { name: "Vite", category: "Development" },
    { name: "Astro", category: "Development" },
    { name: "React-Router", category: "Development" },
    
  ]

  const categories = ["Development", "Software", "Design"]

  return (
    <section id="technologies" className="py-16 md:py-24 border-t border-gray-800 bg-black text-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4 md:col-start-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">TECHNOLOGIES</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl font-mono leading-relaxed text-gray-300">
              A curated selection of design and development technologies that I specialize in, organized by category and
              expertise level.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="border-t-4 border-gray-800 pt-6">
              <h3 className="text-2xl font-bold mb-8 text-white">{category.toUpperCase()}</h3>

              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-lg text-gray-200">{skill.name}</span>
                        <span className="h-px w-12 bg-gray-700 group-hover:w-24 group-hover:bg-orange-500 transition-all duration-300"></span>
                      </div>
                      <div className="h-px w-full bg-gray-900"></div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

