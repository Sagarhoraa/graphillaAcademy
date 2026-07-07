"use client";

import data from "@/data/data.json";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";

export default function AboutFeatures() {
    const { about } = data;

    return (
        <section className="py-20 bg-background">

            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center text-4xl font-bold text-foreground"
                >
                    {about.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-600"
                >
                    {about.description}
                </motion.p>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {about.features.map((feature) => (
                        <AboutCard
                            key={feature.id}
                            title={feature.title}
                            description={feature.description}
                            image={feature.image}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}