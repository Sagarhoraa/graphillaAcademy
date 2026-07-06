import Navbar from "@/components/header/Navbar";
import TopBar from "@/components/header/Topbar";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
export default function AboutPage() {
    return (
        <>
            <header className="sticky top-0 z-50">
                <TopBar />
                <Navbar />
            </header>
            <AboutHero />
            <AboutFeatures />
            <MissionVision />
        </>
    );
}