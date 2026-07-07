"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

export default function FeaturedBlog() {
    const featuredBlog = data.blogPage.featuredBlog;

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                    <div className="grid lg:grid-cols-2">

                        {/* Image */}
                        <div className="relative min-h-80 lg:min-h-full">

                            <Image
                                src={featuredBlog.image}
                                alt={featuredBlog.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                        </div>

                        {/* Content */}
                        <div className="flex flex-col p-8 lg:p-10">

                            <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                                {featuredBlog.category}
                            </span>

                            <h2 className="mt-4 text-3xl font-bold leading-tight">
                                {featuredBlog.title}
                            </h2>

                            <p className="mt-5 leading-8 text-gray-600">
                                {featuredBlog.description}
                            </p>

                            <div className="mt-auto flex items-center justify-between pt-10">

                                <span className="text-sm text-gray-500">
                                    {featuredBlog.date}
                                </span>

                                <Link
                                    href={featuredBlog.link}
                                    className="group flex items-center gap-2 font-semibold text-brand-primary transition"
                                >
                                    Read More

                                    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}