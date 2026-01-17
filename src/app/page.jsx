import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ResearchList } from '../components/ResearchList';
import { Container } from '../components/Container';
import { FanmadeDisclaimer } from '../components/FanmadeDisclaimer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-sans selection:bg-neutral-700 selection:text-white pb-20">
      <Navbar />
      <FanmadeDisclaimer />
      
      <main className="pt-20"> {/* Add padding top to account for fixed navbar */}
        <Container>
          <Hero />
          
          <div className="h-px w-full bg-neutral-800 my-12" />
          
          <ResearchList />
        </Container>
      </main>

    </div>
  );
}
