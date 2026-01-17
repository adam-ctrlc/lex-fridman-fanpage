import { MdPictureAsPdf, MdLink, MdFormatQuote } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { papers } from "@/data/research";

export function ResearchList() {
  return (
    <div className="flex flex-col gap-2">
      <div className="pb-4">
        <h2 className="text-2xl font-bold text-white">
          Selected Research & Publications
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {papers.map((paper, index) => (
          <div key={index} className="group">
            <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors mb-3">
              {paper.title}
            </h3>

            <div className="flex flex-wrap gap-4 mb-4">
              {paper.links.map((link, i) => (
                <Button
                  key={i}
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white hover:border-neutral-600 h-8 text-xs font-medium"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                  </a>
                </Button>
              ))}
            </div>

            <p className="text-neutral-400 leading-relaxed text-sm">
              {paper.summary}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-8 text-center">
        <Button
          asChild
          variant="link"
          className="text-neutral-500 hover:text-white"
        >
          <a
            href="https://scholar.google.com/citations?user=wZH_N7cAAAAJ&hl=en&oi=sra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            View all publications on Google Scholar <MdLink />
          </a>
        </Button>
      </div>
    </div>
  );
}
