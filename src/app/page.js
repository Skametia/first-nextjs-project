import HeroSection from "./components/HeroSection";
import Feachers_courses from "./components/Feachers_courses";
import { Sticky_scroll } from "./components/Sticky_scroll";
import { Main_moving } from "./components/Main_moving";
import { Hover_Cards } from "./components/Hover_Cards";
import MainTolkits from "./components/MainTolkits";
import Footer from "./components/Footer";


export default function page() {
  return (
    <main className="min-h-screen bg-black antialiased text-3xl font-bold bg-grid-white/[0.02]">
      {/* <h1 className="text-3xl font-bold underline text-center text-white">
        this is my main page
      </h1> */}
      <HeroSection />
      <Feachers_courses />
      <Sticky_scroll />
      <Main_moving/>
      <Hover_Cards/>
      <MainTolkits/>
      <Footer/>
      
    </main>
  );
}
