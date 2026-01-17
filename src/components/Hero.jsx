import Image from 'next/image';
import { SocialLinks } from './SocialLinks';

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start py-12 md:py-20">
      <div className="relative w-full md:w-1/3 aspect-[3/4] md:aspect-auto md:h-96 shrink-0 rounded-lg overflow-hidden bg-neutral-900 shadow-2xl ring-1 ring-white/10">
        <Image
          src="/lex.jpg"
          alt="Lex Fridman"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Lex Fridman</h1>
          <p className="text-lg text-neutral-400 font-medium">Research Scientist at MIT</p>
        </div>

        <div className="text-neutral-300 leading-relaxed flex flex-col gap-4">
          <p>
            Host of the <a href="https://lexfridman.com/podcast" className="text-white hover:underline underline-offset-4 decoration-neutral-600">Lex Fridman Podcast</a>.
          </p>
          <p>
            <span className="text-white font-medium">Research interests:</span> Human-AI interaction, robotics, and machine learning.
          </p>
          <p>
            <span className="text-white font-medium">Podcast interests:</span> History, philosophy, physics, biology, chemistry, engineering, AI, robotics, programming, music, film, art, sports, psychology, neuroscience, geopolitics, business, economics, religion, and astronomy.
          </p>
        </div>

        <div className="pt-2">
           <p className="text-neutral-400 mb-4 text-sm uppercase tracking-wider font-semibold">Connect</p>
           <SocialLinks />
        </div>
      </div>
    </div>
  );
}
