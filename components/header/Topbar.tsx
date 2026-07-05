"use client";

import Link from "next/link";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import data from "@/data/data.json";
export default function TopBar() {
    const { topBar } = data;
    return (
        <div className="bg-brand-secondary text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-1.5 text-[11px] sm:gap-3 sm:px-6 sm:py-2 sm:text-sm lg:px-8">

                {/* Left Side */}
                <div className="flex items-center gap-3">

                    <Link
                        href={topBar.phoneLink}
                        className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
                    >
                        <HiPhone className="h-4 w-4" />
                        <span>{topBar.phone}</span>
                    </Link>

                    <span className="opacity-70">|</span>

                    <Link
                        href="mailto:graphillatech@gmail.com?subject=Course Inquiry"
                        className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
                    >
                        <HiMail className="h-4 w-4" />
                        <span>{topBar.email}</span>
                    </Link>

                </div>

                {/* Right Side */}
                <Link
                    href={topBar.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80 rounded-full border border-white p-1.5 sm:p-2 duration-300 hover:bg-white hover:text-brand-secondary"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>

            </div>
        </div>
    );
}