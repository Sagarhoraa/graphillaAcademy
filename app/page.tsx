import Image from "next/image";
import Navbar from "../components/header/Navbar";
import TopBar from "../components/header/Topbar";
import Hero from "../components/home/Hero";
export default function Home() {
  return (
    <div className="bg-zinc-500 font-sans dark:bg-gray-900">
      <header className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </header>
      <Hero />
    </div>
  );
}
