"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import data from "@/data/data.json";

export default function ContactHero() {
    const { hero } = data.contactPage;

    return (
        <section className="bg-background pt-10 pb-20">

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                <div className="max-w-3xl">

                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        className="inline-block rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-medium text-brand-primary"
                    >
                        Contact Us
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6, delay: .1 }}
                        className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight"
                    >
                        {hero.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6, delay: .2 }}
                        className="mt-6 max-w-2xl text-lg leading-8 text-gray-600"
                    >
                        {hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6, delay: .3 }}
                        className="mt-10"
                    >
                        <Button href="#contact-form">
                            Get in Touch
                        </Button>
                    </motion.div>

                </div>

            </div>

        </section>
    );
}