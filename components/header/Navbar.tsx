"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState, useEffect } from "react";
import Button from "../Button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {

        const handleEsc = (e: KeyboardEvent) => {

            if (e.key === "Escape") {

                setIsOpen(false);

            }

        };

        window.addEventListener("keydown", handleEsc);

        return () => window.removeEventListener("keydown", handleEsc);

    }, []);

    return (
        <nav className={`w-full transition-all duration-300 ${scrolled ? "bg-brand-tertiary/70 backdrop-blur-lg shadow-md" : "bg-brand-tertiary"
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.svg"
                        alt="Graphilla Academy Logo"
                        width={160}
                        height={40}
                        priority
                    />
                </Link>

                {/* for desktop screens */}
                <div className="hidden lg:flex items-center gap-8  ">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-md font-medium text-gray-700 hover:text-brand-primary transition-all duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button href="/programs" className="ml-8 shrink-0  text-center ">
                        Start Learning
                    </Button>
                </div>

                {/* Mobile toggle button */}
                <button
                    className="lg:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <HiOutlineX className="w-7 h-7" />
                    ) : (
                        <HiOutlineMenu className="w-7 h-7" />
                    )}
                </button>
            </div>

            <AnimatePresence>

                {isOpen && (

                    <>

                        {/* Overlay */}

                        <motion.div

                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}

                            onClick={() => setIsOpen(false)}

                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"

                        />

                        {/* Drawer */}

                        <motion.div

                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}

                            transition={{
                                duration: .35,
                                ease: "easeInOut"
                            }}

                            className="fixed top-0 right-0 z-50 h-screen w-80 bg-white shadow-2xl"

                        >

                            <div className="flex items-center justify-between border-b p-6">

                                <Image
                                    src="/images/logo.svg"
                                    alt="Graphilla Academy"
                                    width={130}
                                    height={35}
                                />

                                <button
                                    onClick={() => setIsOpen(false)}
                                >
                                    <HiOutlineX className="h-7 w-7" />
                                </button>

                            </div>

                            <div className="flex flex-col p-6">

                                {navLinks.map((link) => (

                                    <Link

                                        key={link.href}

                                        href={link.href}

                                        onClick={() => setIsOpen(false)}

                                        className="rounded-xl px-4 py-4 text-lg font-medium text-gray-700 transition hover:bg-brand-tertiary hover:text-brand-primary"

                                    >

                                        {link.label}

                                    </Link>

                                ))}

                                <Button
                                    href="/programs"
                                    className="mt-8 text-center"
                                >
                                    Start Learning
                                </Button>

                            </div>

                        </motion.div>

                    </>

                )}

            </AnimatePresence>
        </nav>

    );

}