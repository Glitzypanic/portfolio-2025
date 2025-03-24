import { Github, Code } from "lucide-react"

export default function Certifications() {
  const credentials = [
    {
      title: "JAVASCRIPT CHILE EVENT",
      date: "2023",
      organization: "JavaScript Chile",
      description:
        "Participated in the annual JavaScript Chile conference, exploring modern web development techniques and networking with industry professionals.",
      icon: <Code className="h-6 w-6 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" />,
    },
    {
      title: "GITHUB FOUNDATIONS",
      date: "2022",
      organization: "GitHub",
      description:
        "Certified in GitHub Foundations, demonstrating proficiency in version control, collaboration workflows, and modern development practices.",
      icon: <Github className="h-6 w-6 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" />,
    },
  ]

  return (
    <section id="certifications" className="py-16 md:py-24 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4 md:col-start-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">CREDENTIALS</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl font-mono leading-relaxed text-gray-300">
              Professional certifications and community event participation that demonstrate ongoing learning and
              industry engagement.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="border border-gray-800 p-6 group hover:border-white transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{credential.title}</h3>
                  <p className="font-mono text-sm text-gray-400">
                    {credential.organization} / {credential.date}
                  </p>
                </div>
                <div className="mt-1">{credential.icon}</div>
              </div>

              <p className="font-mono text-gray-300 text-sm">{credential.description}</p>

              <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center">
                <span className="text-xs font-mono text-gray-500 group-hover:text-yellow-500 transition-colors duration-300">
                  CREDENTIAL
                </span>
                <div className="h-px w-12 bg-gray-800 group-hover:w-24 group-hover:bg-yellow-500 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

