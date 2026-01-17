import React from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Container } from '../../components/Container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import { MdEmail, MdForum, MdCoffee, MdWork, MdMic } from 'react-icons/md';
import { FaQuoteLeft } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-sans selection:bg-neutral-700 selection:text-white pb-20">
      <Navbar />

      <main className="pt-24">
        <Container>
          <div className="flex flex-col gap-12 max-w-3xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Contact Lex</h1>
              <p className="text-lg text-neutral-400 leading-relaxed">
                I’m very fortunate to receive a lot of messages from amazing people, but I can no longer read all of them directly. 
                An assistant now helps select a handful of messages for me to look at.
              </p>
              
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-3">Please follow these rules:</h3>
                <ol className="list-decimal list-inside flex flex-col gap-2 text-neutral-400">
                  <li><strong className="text-neutral-300">Pick most relevant option:</strong> Only use one and best contact method.</li>
                  <li><strong className="text-neutral-300">One message:</strong> Only send one message, to one place.</li>
                  <li><strong className="text-neutral-300">Forms are preferred:</strong> Filling out a form is better than email.</li>
                </ol>
              </div>
            </div>

            {/* Forms Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-white">Forms (Strongly Preferred)</h2>
              <Separator className="bg-neutral-800" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg flex items-center gap-2">
                      <MdForum /> General Updates
                    </CardTitle>
                    <CardDescription className="text-neutral-400">
                      Get updates, give suggestions, or send a note.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="secondary" className="w-full">
                      <a href="https://lexfridman.com/updates-topics-suggestions" target="_blank" rel="noopener noreferrer">
                        Open Form
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg flex items-center gap-2">
                      <MdMic /> AMA Questions
                    </CardTitle>
                    <CardDescription className="text-neutral-400">
                      Submit questions for Lex to answer on podcast.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="secondary" className="w-full">
                      <a href="https://form.jotform.com/lexfridman/lex-ama" target="_blank" rel="noopener noreferrer">
                        Open Form
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg flex items-center gap-2">
                      <MdWork /> Hiring
                    </CardTitle>
                    <CardDescription className="text-neutral-400">
                      If you would like to join our amazing team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="secondary" className="w-full">
                      <a href="https://lexfridman.com/hiring/" target="_blank" rel="noopener noreferrer">
                        Apply Here
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg flex items-center gap-2">
                      <MdCoffee /> Coffee
                    </CardTitle>
                    <CardDescription className="text-neutral-400">
                      If you would like to chat over a cup of coffee.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="secondary" className="w-full">
                      <a href="https://form.jotform.com/230415467865159" target="_blank" rel="noopener noreferrer">
                        Coffee Form
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg flex items-center gap-2">
                      <MdMic /> Podcast Guest Pitch
                    </CardTitle>
                    <CardDescription className="text-neutral-400">
                      If you would like to pitch a podcast guest.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="secondary" className="w-full">
                      <a href="https://form.jotform.com/lexfridman/podcast-guest-pitch" target="_blank" rel="noopener noreferrer">
                        Guest Pitch Form
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg flex items-center gap-2">
                      <MdWork /> Sponsors
                    </CardTitle>
                    <CardDescription className="text-neutral-400">
                      If you're interested in becoming a sponsor.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="secondary" className="w-full">
                      <a href="https://form.jotform.com/lexfridman/podcast-sponsors" target="_blank" rel="noopener noreferrer">
                        Sponsor Form
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Emails Section */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-white">Emails</h2>
              <Separator className="bg-neutral-800" />
              
              <div className="text-neutral-400 leading-relaxed bg-neutral-900/30 p-6 rounded-lg border border-neutral-800/50">
                <p className="mb-4 text-sm text-yellow-500/80 font-medium uppercase tracking-wide">Important</p>
                <p>
                  Please do not email more than 1 email address nor submit both the form and send email. 
                  This will be automatically detected and deleted.
                </p>
                <p className="mt-4 italic text-neutral-500">
                  Note: Email addresses are hidden for privacy. Please use the forms above whenever possible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-neutral-300">
                <div>
                  <h3 className="font-semibold text-white mb-1">Research</h3>
                  <p className="text-sm text-neutral-500">For AI and robotics related research at MIT and beyond.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Business</h3>
                  <p className="text-sm text-neutral-500">Professional / business proposals.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Personal</h3>
                  <p className="text-sm text-neutral-500">Personal / miscellaneous notes.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Speaking Invitation</h3>
                  <p className="text-sm text-neutral-500">Invitations to speak at events or be a guest.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Bugs</h3>
                  <p className="text-sm text-neutral-500">Technical bugs, issues with website/podcast.</p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="flex justify-center py-12 border-t border-neutral-800 mt-8">
              <div className="relative max-w-2xl text-center px-8">
                <FaQuoteLeft className="absolute -top-6 -left-4 text-4xl text-neutral-800/50" />
                <p className="text-neutral-400 text-lg italic leading-relaxed relative z-10">
                  Unfortunately, I rarely get to read these messages. It breaks my heart that I can’t read them all. 
                  I appreciate the support and love more than I can ever put into words.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </main>
    </div>
  );
}
