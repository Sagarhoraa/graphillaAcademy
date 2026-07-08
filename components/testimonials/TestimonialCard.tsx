"use client";

import Image from "next/image";
import { HiStar } from "react-icons/hi2";

type TestimonialCardProps = {

    name: string;
    role: string;
    review: string;
    rating: number;
    image: string;

};

export default function TestimonialCard({

    name,
    role,
    review,
    rating,
    image,

}: TestimonialCardProps) {

    return (

        <div className="mx-2 flex h-75 flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Review */}

            <p className="line-clamp-5 leading-8 text-gray-600 ">

                "{review}"

            </p>

            {/* Rating */}

            <div className="mt-6 flex gap-1">

                {Array.from({ length: rating }).map((_, index) => (

                    <HiStar
                        key={index}
                        className="h-5 w-5 text-yellow-400"
                    />

                ))}

            </div>

            {/* Student */}

            <div className="mt-auto flex items-center gap-4 pt-6">

                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>

                    <h3 className="font-semibold">

                        {name}

                    </h3>

                    <p className="text-sm text-gray-500">

                        {role}

                    </p>

                </div>

            </div>

        </div>

    );

}