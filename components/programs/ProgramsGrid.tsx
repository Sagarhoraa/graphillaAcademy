"use client";

import data from "@/data/data.json";
import ProgramCard from "./ProgramsCard";

export default function ProgramsGrid() {
    const { programs } = data;

    return (
        <section className="bg-white py-20">

            <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10">

                {programs.map((program) => (
                    <ProgramCard
                        key={program.id}
                        id={program.id}
                        title={program.title}
                        rating={program.rating}
                        duration={program.duration}
                        enrolled={program.enrolled}
                        priceNPR={program.priceNPR}
                        priceUSD={program.priceUSD}
                        mode={program.mode}
                        image={program.image}
                    />
                ))}

            </div>

        </section>
    );
}