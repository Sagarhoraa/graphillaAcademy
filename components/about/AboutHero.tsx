"use client";

import data from "@/data/data.json";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Button";

export default function AboutHero() {

    const { hero } = data.aboutPage;

    return (

        <section className="relative overflow-hidden bg-brand-tertiary pt-8 md:pt-5 pb-20">

            {/* Decorative background */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-secondary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brand-primary/10 blur-3xl" />

            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 sm:px-8 lg:flex-row lg:px-10">

                {/* Left */}

                <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left max-w-2xl">

                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        viewport={{ once: true }}
                        className="inline-block rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-medium text-brand-primary"
                    >
                        {hero.badge}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="mt-6 text-[clamp(2.6rem,5vw,4.4rem)] font-bold leading-tight text-foreground"
                    >

                        {hero.titleStart}{" "}

                        <span className="bg-linear-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">

                            {hero.titleHighlight}

                        </span>{" "}

                        {hero.titleEnd}

                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6, delay: .15 }}
                        viewport={{ once: true }}
                        className="mt-6 max-w-125 text-[17px] leading-8 font-light text-gray-600 text-center lg:text-left"

                    >
                        {hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: .25 }}
                        viewport={{ once: true }}
                        className="mt-10"
                    >

                        <Button href="/courses">

                            {hero.button}

                        </Button>

                    </motion.div>

                </div>

                {/* Right */}

                <motion.div

                    initial={{ opacity: 0, x: 30 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, -12, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.7, delay: 0.2 },
                        x: { duration: 0.7, delay: 0.2 },
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        },
                    }}
                >

                    <Image

                        src={hero.image}
                        alt="About Graphilla Academy"

                        width={650}
                        height={550}

                        className="rounded-3xl shadow-[0_24px_60px_rgba(190,81,0,0.18)]"

                    />

                    {/* Corner decorations */}

                    <div className="absolute -right-3 -top-3 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-brand-primary/40" />

                    <div className="absolute -bottom-3 -left-3 h-8 w-8 rounded-bl-xl border-b-2 border-l-2 border-brand-primary/40" />

                </motion.div>

            </div>

        </section>

    );

}