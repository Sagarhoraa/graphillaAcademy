import type { Metadata } from "next";
import data from "@/data/data.json";
import Navbar from "@/components/header/Navbar";
import TopBar from "@/components/header/Topbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = data.blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.content.slice(0, 150),
  };
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const blog = data.blogs.find(
        (item) => item.slug === slug
    );
    if (!blog) {
        notFound();
    }

    return (
        <>
            <header className="sticky top-0 z-50">
                <TopBar />
                <Navbar />
            </header>

            <main className="py-16">

                <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">

                    {/* Category */}

                    <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">

                        {blog.category}

                    </span>

                    {/* Title */}

                    <h1 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">

                        {blog.title}

                    </h1>

                    {/* Author & Dates */}

                    <p className="mt-5 text-gray-500">

                        {blog.author} • {blog.date}

                    </p>

                    {/* Featured Image */}

                    <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl">

                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />

                    </div>

                    {/* Content */}

                    <article className="prose prose-lg mt-12 max-w-none">

                        <p className="leading-8 text-gray-700">

                            {blog.content}

                        </p>

                    </article>

                    {/* Back */}

                    <div className="mt-16">

                        <Link
                            href="/blog"
                            className="font-medium text-brand-primary hover:underline"
                        >
                            ← Back to Blogs
                        </Link>

                    </div>

                </div>

            </main>

            <Footer />
        </>
    );
}