import Hero from './components/Hero';
import DataBI from './components/DataBI';
import SoftwareDev from './components/SoftwareDev';

function App() {
  return (
    <main className="snap-y-mandatory h-screen w-full overflow-y-scroll bg-primary text-gray-100 scroll-smooth">
      <Hero />
      <DataBI />
      <SoftwareDev />
    </main>
  );
}

export default App;
