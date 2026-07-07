"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";

export default function ProgramsHero() {
    const { hero } = data.programsPage;

    return (
        <section className="relative overflow-hidden bg-brand-tertiary py-24">

            {/* Decorative background */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand-primary/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="max-w-2xl text-[clamp(2.6rem,5vw,4.4rem)] font-bold leading-tight text-foreground"
                >
                    {hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6, delay: .15 }}
                    className="mt-6 max-w-xl text-lg leading-8 text-gray-600"
                >
                    {hero.description}
                </motion.p>

            </div>

        </section>
    );
}