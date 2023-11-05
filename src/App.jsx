import Aos from "aos";
import Characters from "./components/characters";
import Hero from "./components/hero";
Aos.init();

function App() {
  return (
    <main className="w-full min-h-screen bg-black text-white px-[10%] py-6">
      <Hero />
      <div className="w-full">
        <h2 className="text-4xl text-center  font-bold" data-aos="fade-up"
        >Personajes</h2>

        {/* personajes */}
        <Characters />
      </div>
    </main>
  );
}

export default App;
