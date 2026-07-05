"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import Button from "../Button";
import data from "@/data/data.json";


export default function Hero() {
    const { hero } = data;

    return (
        <section className="relative overflow-hidden pt-8 md:pt-5 pb-20 ">

         <div className="absolute top-0 right-0 w-125 h-125 bg-brand-secondary/20 rounded-full blur-3xl -z-10 sm:px-8 md:px-10" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10  flex flex-col lg:flex-row items-center gap-12">

                {/* Left side */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-left">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" text-xs font-semibold text-brand-primary bg-brand-primary/10 px-4 py-1.5 rounded-full mb-6"
                    >
                        {hero.badge}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[clamp(2.4rem,5.5vw,4.2rem)] max-w-[58ch] text-center lg:text-start font-bold leading-tight"
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
                        className="text-gray-600 block text-lg sm:text-xl mt-6 max-w-xl text-center md:text-start"
                    >
                        {hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex w-full flex-col gap-4 lg:w-auto md:flex-row justify-center lg:justify-start px-6 md:px-0 text-center md:text-left"
                    >
                        <Button href="/" >
                            Enroll Now
                        </Button>
                        <Button href="/" className="hover:bg-transparent!">
                            <span className="flex flex-row justify-center "> View Courses <HiOutlineArrowRight className="ml-2 w-5 h-5"/></span>
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex-1 hidden lg:flex justify-start md:justify-center  mt-8 md:mt-20 md:ml-10 "
                >
                    <Image
                        src="/images/heroimage.png"
                        alt="Student learning illustration"
                        width={600}
                        height={600}
                        priority
                        className="w-full max-w-md h-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
}