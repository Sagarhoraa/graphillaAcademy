import type { Metadata } from "next";
import ProgramsHero from "@/components/programs/ProgramsHero";
import Navbar from "@/components/header/Navbar";
import TopBar from "@/components/header/Topbar";
import ProgramsGrid from "@/components/programs/ProgramsGrid";
import Footer from "@/components/footer/Footer";
export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore the technology and programming programs offered by Graphilla Academy.",
};
export default function ProgramsPage() {
    
    return (

        <>
        
            <header className="sticky top-0 z-50">
                <TopBar />
                <Navbar />
            </header>
            <ProgramsHero />
            <ProgramsGrid />
            <Footer />
            


        </>

    );

}