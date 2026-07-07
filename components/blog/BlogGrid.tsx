"use client";

import data from "@/data/data.json";
import BlogCard from "./BlogCard";

export default function BlogGrid() {

    const { blogs } = data;

    return (

        <section className="pb-20">

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                <h2 className="mb-10 text-3xl font-bold">
                    Latest Articles
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {blogs.map((blog) => (

                        <BlogCard
                            key={blog.slug}
                            slug={blog.slug}
                            title={blog.title}
                            excerpt={blog.excerpt}
                            date={blog.date}
                            image={blog.image}
                            category={blog.category}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}