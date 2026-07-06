"use client";

import Image from "next/image";

type AboutCardProps = {
    title: string;
    description: string;
    image: string;
};

export default function AboutCard({
    title,
    description,
    image,
}: AboutCardProps) {
    return (
        <div className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-brand-tertiary shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Image */}
            <div className="relative aspect-16/10 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-7">

                <h3 className="text-xl font-semibold text-foreground text-center">
                    {title}
                </h3>

                <p className="mt-4 text-center text-gray-600 leading-7 text-[15px]">
                    {description}
                </p>

            </div>
        </div>
    );
}