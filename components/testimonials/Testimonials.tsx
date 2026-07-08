"use client";

import data from "@/data/data.json";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {

    const { testimonials } = data;

    const settings = {

        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],

    };

    return (

        <section className="bg-brand-tertiary py-20">

            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                <h2 className="text-center text-3xl font-bold">
                    Hear From Our Students
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
                    Discover how our students transformed their careers through
                    practical, industry-focused learning.
                </p>

                <div className="mt-14">

                    <Slider {...settings}>

                        {testimonials.map((testimonial) => (

                            <div
                                key={testimonial.id}
                                className="px-3"
                            >

                                <TestimonialCard
                                    {...testimonial}
                                />

                            </div>

                        ))}

                    </Slider>

                </div>

            </div>

        </section>

    );

}