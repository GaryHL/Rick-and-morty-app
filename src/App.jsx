import Aos from "aos";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import UpButton from "./components/UpButton";
Aos.init();

function App() {
  return (
    <main className="w-full min-h-screen bg-black text-white px-[10%] py-6">
      <Hero />
      <div className="w-full">
        <h2 className="text-4xl text-center  font-bold" data-aos="fade-up"
        >Characters</h2>

        <Characters />
      </div>
      <UpButton/>
    </main>
  );
}

export default App;
