"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import Button from "../Button";
import HiringPartners from "../HiringPartners";
import data from "@/data/data.json";


export default function Hero() {
    const { hero } = data;

    return (
        <section className="relative bg-background overflow-hidden pt-8 md:pt-5 pb-20 ">
            

            
            <div className="mx-auto w-full max-w-330 px-6 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center gap-14">

                {/* Left side */}
                <div className="flex-1 w-full max-w-160 flex flex-col items-center lg:items-start text-left">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" text-sm  text-brand-primary bg-brand-primary/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        {hero.badge}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[clamp(2.4rem,5.5vw,4.2rem)] max-w-[58ch] text-foreground text-center lg:text-start font-bold leading-tight"
                    >
                        {hero.titleStart}{" "}
                        <span className="bg-linear-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                            {hero.titleHighlight}
                        </span>{" "}
                        {hero.titleEnd}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 max-w-125 text-[16px] leading-[1.85] font-light text-gray-600 text-center lg:text-left"
                    >
                        {hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex w-full flex-col gap-4 lg:w-auto md:flex-row justify-center lg:justify-start px-6 md:px-0 text-center md:text-left"
                    >
                        <Button href="/" className="text-center">
                            Enroll Now
                        </Button>
                        <Button href="/" className="hover:bg-brand-tertiary! hover:text-brand-primary!">
                            <span className="flex flex-row justify-center "> View Courses <HiOutlineArrowRight className="ml-2 w-5 h-5" /></span>
                        </Button>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="  grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-gray-100 w-full max-w-2xl "
                    >
                        {hero.stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-sm lg:text-3xl text-center font-bold text-brand-primary">
                                    {stat.value}
                                </p>
                                <p className="text-sm lg:text-1xl text-center text-gray-500 mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{
                        opacity: 1, x: 0, y: [0, -12, 0],
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
                    className="relative flex-1 hidden lg:flex align-middle justify-end shadow-[0_24px_60px_rgba(190,81,0,0.18)] rounded-3xl bg-secondary py-2 px-2 mb-10"
                >
                    <Image
                        src="/images/heroimage.png"
                        alt="Student learning illustration"
                        width={600}
                        height={600}
                        priority
                        className="w-full max-w-lg h-auto"
                    />
                    <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-brand-primary/30 rounded-tr-xl" />
                    <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-brand-primary/30 rounded-bl-xl" />

                </motion.div>
            </div>
            <HiringPartners/>
        </section>
    );
}