"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

type BlogCardProps = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
};

export default function BlogCard({
    slug,
    title,
    excerpt,
    date,
    image,
    category,
}: BlogCardProps) {

    return (

        <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Image */}

            <div className="relative aspect-16/10 overflow-hidden">

                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

            </div>

            {/* Content */}

            <div className="flex flex-col p-6">

                <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                    {category}
                </span>

                <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                    {title}
                </h3>

                <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-gray-600">
                    {excerpt}
                </p>

                <div className="mt-8 flex items-center justify-between">

                    <span className="text-sm text-gray-500">
                        {date}
                    </span>

                    <Link
                        href={`/blog/${slug}`}
                        className="group flex items-center gap-2 font-medium text-brand-primary transition"
                    >
                        Read More

                        <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                </div>

            </div>

        </article>

    );

}