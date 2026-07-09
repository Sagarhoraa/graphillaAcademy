import type { Metadata } from "next";
import TopBar from "@/components/header/Topbar";
import Navbar from "@/components/header/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import Footer from "@/components/footer/Footer";
import ContactSection from "@/components/contact/ContactSection";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Graphilla Academy for admissions, course information, and student support.",
};
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