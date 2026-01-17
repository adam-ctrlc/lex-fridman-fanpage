import React from 'react';
import { MdPlayArrow } from 'react-icons/md';
import { FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';
import { episodes } from '../../data/episodes';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Container } from '../../components/Container';
import { Navbar } from '../../components/Navbar';

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-sans selection:bg-neutral-700 selection:text-white pb-20">
      <Navbar />

      <main className="pt-24">
        <Container>
          {/* Header */}
          <div className="mb-12 flex flex-col gap-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Lex Fridman Podcast</h1>
            <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
              Conversations about the nature of intelligence, consciousness, love, and power. 
              From AI to history, physics to philosophy.
            </p>
            
            {/* Subscribe Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-transparent border border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white gap-2 shadow-none">
                <a href="https://www.youtube.com/lexfridman" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="text-red-500 text-lg" /> YouTube
                </a>
              </Button>
              <Button asChild className="bg-transparent border border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white gap-2 shadow-none">
                <a href="https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL" target="_blank" rel="noopener noreferrer">
                  <FaSpotify className="text-green-500 text-lg" /> Spotify
                </a>
              </Button>
              <Button asChild className="bg-transparent border border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white gap-2 shadow-none">
                <a href="https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584" target="_blank" rel="noopener noreferrer">
                  <FaApple className="text-white text-lg" /> Apple Podcasts
                </a>
              </Button>
            </div>
          </div>

          {/* Search / Filter */}
          <div className="mb-10">
            <div className="relative max-w-md">
              <Input 
                type="search" 
                placeholder="Search episodes..." 
                className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus-visible:ring-neutral-700"
              />
            </div>
          </div>

          {/* Episodes List */}
          <div className="flex flex-col gap-6">
            {episodes.map((episode) => (
              <Card key={episode.id} className="bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-colors overflow-hidden group">
                <CardContent className="p-0 flex flex-col md:flex-row">
                  {/* Thumbnail Section */}
                  <div className="relative w-full md:w-72 aspect-video md:aspect-[16/9] shrink-0 bg-black">
                    <img 
                      src={`https://img.youtube.com/vi/${episode.youtubeId}/hqdefault.jpg`} 
                      alt={episode.guest}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                      <MdPlayArrow className="text-white text-6xl drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">
                      EP #{episode.id}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {episode.guest}: {episode.title}
                      </h2>
                    </div>
                    
                    <p className="text-neutral-400 mb-6 font-medium">
                      {episode.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 mt-auto">
                      <Button asChild size="sm" className="gap-2 bg-white text-black hover:bg-neutral-200">
                        <a href={episode.links.youtube} target="_blank" rel="noopener noreferrer">
                          <MdPlayArrow className="text-lg" /> Watch
                        </a>
                      </Button>
                      
                      {episode.links.spotify && (
                        <Button asChild size="sm" variant="ghost" className="text-neutral-400 hover:text-green-400 hover:bg-green-400/10">
                          <a href={episode.links.spotify} target="_blank" rel="noopener noreferrer">
                            <FaSpotify className="text-lg" />
                          </a>
                        </Button>
                      )}
                      
                      {episode.links.apple && (
                        <Button asChild size="sm" variant="ghost" className="text-neutral-400 hover:text-white hover:bg-white/10">
                          <a href={episode.links.apple} target="_blank" rel="noopener noreferrer">
                            <FaApple className="text-lg" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}
