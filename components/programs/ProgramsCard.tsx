"use client";

import Image from "next/image";
import Button from "../Button";
import {
    HiStar,
    HiOutlineClock,
    HiOutlineUsers,
} from "react-icons/hi2";

type ProgramCardProps = {
    id: string;
    title: string;
    rating: number;
    duration: string;
    enrolled: string;
    priceNPR: number;
    priceUSD: number;
    mode: string;
    image: string;
};

export default function ProgramCard({
    id,
    title,
    rating,
    duration,
    enrolled,
    priceNPR,
    priceUSD,
    mode,
    image,
}: ProgramCardProps) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

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

                {/* Title + Rating */}
                <div className="flex items-start justify-between gap-3">

                    <h3 className="text-xl font-semibold leading-snug text-foreground">
                        {title}
                    </h3>

                    <div className="flex shrink-0 items-center gap-1">
                        <HiStar className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">
                            {rating}
                        </span>
                    </div>

                </div>

                {/* Duration & Enrolled */}
                <div className="mt-5 space-y-2 text-sm text-gray-600">

                    <div className="flex items-center gap-2">
                        <HiOutlineClock className="h-4 w-4 text-brand-primary" />
                        <span>{duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <HiOutlineUsers className="h-4 w-4 text-brand-primary" />
                        <span>{enrolled} Enrolled</span>
                    </div>

                </div>

                {/* Price & Mode */}
                <div className="mt-6 flex items-center justify-between">

                    <div>
                        <p className="text-lg font-bold text-foreground">
                            रु {priceNPR}
                        </p>

                        <p className="text-sm text-gray-500">
                            ${priceUSD}
                        </p>
                    </div>

                    <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary">
                        {mode}
                    </span>

                </div>

                {/* Button */}
                <Button
                    href={`/programs/${id}`}
                    className="mt-6 w-full min-w-0 text-center"
                >
                    Join Program
                </Button>

            </div>

        </div>
    );
}