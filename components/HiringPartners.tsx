"use client";

import Image from "next/image";
import data from "@/data/data.json";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function HiringPartners() {
    const { partners } = data;



    return (
        <section className="py-20">

            {/* Centered title */}
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center"
                >
                    {partners.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-3 text-center text-gray-600 max-w-2xl mx-auto"
                >
                    {partners.description}
                </motion.p>

            </div>

            <div className="relative mt-14">

                {/* Left Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />

                {/* Right Fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

                <Marquee
                    speed={35}
                    pauseOnHover
                    pauseOnClick
                    gradient={false}
                >
                    {partners.companies.map((company) => (
                        <div
                            key={company.id}
                            className="mx-2 sm:mx-3 lg:mx-4 flex
h-14 w-24
sm:h-16 sm:w-28
lg:h-20 lg:w-32
shrink-0
items-center justify-center
rounded-xl
border border-gray-200
bg-white
shadow-sm
transition-all duration-300
hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Image
                                src={company.logo}
                                alt={company.name}
                                width={80}
                                height={40}
                                className="w-12 sm:w-14 lg:w-20 h-auto object-contain"
                            />
                        </div>
                    ))}
                </Marquee>

            </div>
        </section>
    );
}