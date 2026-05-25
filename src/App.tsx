import Hero from './components/Hero';
import DataBI from './components/DataBI';
import SoftwareDev from './components/SoftwareDev';
import WebProjectsShowcase from './components/WebProjectsShowcase';
import SkillsMarquee from './components/SkillsMarquee';
import Certificates from './components/Certificates';
import WallOfLove from './components/WallOfLove';

function App() {
  return (
    <main className="snap-y-mandatory h-screen w-full overflow-y-scroll bg-primary text-gray-100 scroll-smooth">
      <Hero />
      <SkillsMarquee />
      <DataBI />
      <SoftwareDev />
      <WebProjectsShowcase />
      <Certificates />
      <WallOfLove />
    </main>
  );
}

export default App;
