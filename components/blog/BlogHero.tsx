"use client";

import data from "@/data/data.json";
import { motion } from "framer-motion";

export default function BlogHero() {

    const { blogPage } = data;

    return (

        <section className="bg-brand-tertiary py-18">

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[clamp(2.6rem,5vw,4.4rem)] font-bold leading-tight text-foreground"
                >
                    {blogPage.hero.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-6 max-w-2xl text-lg leading-8 text-gray-600"
                >
                    {blogPage.hero.description}
                </motion.p>

            </div>

        </section>

    );

}