import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 md:col-start-1">
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
              CORDOVA.
            </Link>
          </div>

          <div className="md:col-span-4 md:col-start-5">
            <div className="flex flex-col space-y-2 font-mono text-sm">
              <Link href="#about" className="hover:text-blue-400 text-gray-300">
                About
              </Link>
              <Link href="#technologies" className="hover:text-blue-400 text-gray-300">
                Technologies
              </Link>
              <Link href="#experience" className="hover:text-blue-400 text-gray-300">
                Experience
              </Link>
              <Link href="#contact" className="hover:text-blue-400 text-gray-300">
                Contact
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <div className="flex flex-col space-y-2 font-mono text-sm">
              <Link href="#" className="hover:text-blue-400 text-gray-300">
                Instagram
              </Link>
              <Link href="#" className="hover:text-blue-400 text-gray-300">
                Dribbble
              </Link>
              <Link href="#" className="hover:text-blue-400 text-gray-300">
                Behance
              </Link>
              <Link href="#" className="hover:text-blue-400 text-gray-300">
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="md:col-span-12 pt-8 mt-8 border-t border-gray-900 text-sm font-mono text-gray-400">
            <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

