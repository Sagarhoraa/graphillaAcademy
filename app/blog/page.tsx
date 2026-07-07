import Navbar from "@/components/header/Navbar";
import TopBar from "@/components/header/Topbar";
import BlogHero from "@/components/blog/BlogHero";
import Footer from "@/components/footer/Footer";
import FeaturedBlog from "@/components/blog/FeaturedBlog";
import BlogGrid from "@/components/blog/BlogGrid";
export default function BlogPage() {
    return (
        <>
            <header className="sticky top-0 z-50">
                <TopBar />
                <Navbar />
            </header>
            <BlogHero />
           <FeaturedBlog />
           <BlogGrid />
            <Footer />
        </>
    );
}