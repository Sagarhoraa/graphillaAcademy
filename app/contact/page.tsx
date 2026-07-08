import TopBar from "@/components/header/Topbar";
import Navbar from "@/components/header/Navbar";
import ContactHero from "@/components/contact/ContactHero";

import Footer from "@/components/footer/Footer";
import ContactSection from "@/components/contact/ContactSection";

export default function ContactPage() {
    return (
        <>
            <header className="sticky top-0 z-50">
                <TopBar />
                <Navbar />
            </header>

            <ContactHero />
            <ContactSection />


            <Footer />
        </>
    );
}