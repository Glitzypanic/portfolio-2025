import Image from 'next/image';
import Jose from "@/public/Jose.jpeg";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 md:col-start-1">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-6 text-white">
              JOSE
              <br />
              FARIAS
              <br />
              CORDOVA.
            </h1>
            <p className="text-xl md:text-2xl font-mono max-w-2xl text-gray-400">Web & Graphic Design / 2025</p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="relative aspect-square w-full group">
              {/* Main frame */}
              <div className="absolute inset-0 border-2 border-gray-800 bg-black"></div>

              {/* Offset decorative elements */}
              <div className="absolute top-4 right-4 bottom-4 left-4 border border-gray-700 bg-gray-900">
                <Image src={Jose} alt="Hero" fill className="object-cover" />
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="border border-gray-800/20"></div>
                ))}
              </div>

              {/* Corner accents - white by default, colored on hover */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white group-hover:border-purple-500 transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white group-hover:border-pink-500 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white group-hover:border-orange-500 transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white group-hover:border-blue-500 transition-colors duration-300"></div>

              {/* Brutalist typography element */}
              <div className="absolute bottom-6 left-6 font-mono text-xs text-gray-600 group-hover:text-yellow-500 rotate-90 origin-bottom-left transition-colors duration-300">
                PORTFOLIO/2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

