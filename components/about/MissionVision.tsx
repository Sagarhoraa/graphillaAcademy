"use client";

import data from "@/data/data.json";
import { motion } from "framer-motion";

export default function MissionVision() {

    const { missionVision } = data.aboutPage;

    return (

        <section className="bg-brand-tertiary py-24">

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Mission */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >

                        <h2 className="text-3xl font-bold text-brand-primary">
                            {missionVision.mission.title}
                        </h2>

                        <p className="mt-6 text-justify text-[17px] leading-8 font-light text-gray-600">
                            {missionVision.mission.description}
                        </p>

                    </motion.div>

                    {/* Vision */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >

                        <h2 className="text-3xl font-bold text-brand-primary">
                            {missionVision.vision.title}
                        </h2>

                        <p className="mt-6 text-justify text-[17px] leading-8 font-light text-gray-600">
                            {missionVision.vision.description}
                        </p>

                    </motion.div>

                </div>

            </div>

        </section>

    );

}