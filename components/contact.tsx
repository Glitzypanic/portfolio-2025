import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 border-t border-gray-800 bg-black text-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4 md:col-start-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">CONTACT</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl font-mono leading-relaxed text-gray-300">
              Get in touch to discuss your next project or collaboration opportunity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 md:col-start-1">
            <div className="space-y-8">
              <div className="border-t border-gray-800 pt-4">
                <p className="text-xs font-mono text-gray-500 mb-1">EMAIL</p>
                <p className="font-mono text-gray-300">jose.fariasdv@gmail.com</p>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <p className="text-xs font-mono text-gray-500 mb-1">PHONE</p>
                <p className="font-mono text-gray-300">+1 (555) 123-4567</p>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <p className="text-xs font-mono text-gray-500 mb-1">LOCATION</p>
                <p className="font-mono text-gray-300">Vallenar, CL</p>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <p className="text-xs font-mono text-gray-500 mb-1">SOCIAL</p>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-300 hover:text-blue-400 font-mono text-sm">
                    IG
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 font-mono text-sm">
                    DR
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 font-mono text-sm">
                    BE
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 font-mono text-sm">
                    LI
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <form className="border border-gray-800 p-6">
              <div className="grid gap-6 mb-8">
                <div>
                  <label htmlFor="name" className="block mb-2 font-mono text-xs text-gray-500">
                    NAME
                  </label>
                  <Input
                    id="name"
                    className="bg-black border-gray-800 text-gray-100 font-mono h-12 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-mono text-xs text-gray-500">
                    EMAIL
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-black border-gray-800 text-gray-100 font-mono h-12 focus:border-blue-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-mono text-xs text-gray-500">
                    SUBJECT
                  </label>
                  <Input
                    id="subject"
                    className="bg-black border-gray-800 text-gray-100 font-mono h-12 focus:border-blue-500"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-mono text-xs text-gray-500">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    className="bg-black border-gray-800 text-gray-100 font-mono min-h-[150px] focus:border-blue-500"
                    placeholder="Your message"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xs font-mono text-gray-500">All fields are required</p>
                <Button className="bg-black hover:bg-gray-900 text-white border border-gray-800 hover:border-blue-500 font-mono px-8">
                  SEND
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

