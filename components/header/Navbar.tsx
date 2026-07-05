"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState, useEffect } from "react";
import Button from "../Button";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
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

    return (
        <nav className={`w-full border-b transition-all duration-300 ${
            scrolled ? "bg-white/70 backdrop-blur-lg shadow-md": "bg-white"
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
                    <Button href="/courses" className="ml-8 shrink-0  text-center ">
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

            {/*  for mobile screen */}
            {isOpen && (
                <div className="lg:hidden flex flex-col gap-4 px-6 pb-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-gray-700"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>

    );

}