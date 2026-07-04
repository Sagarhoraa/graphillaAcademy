"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import Button from "./Button";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-foreground sticky w-full z-20 top-0 border-b">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
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
                <div className="hidden md:flex items-center gap-8 md:gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-all duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button href="/courses" className="ml-8">
                        Start Learning
                    </Button>
                </div>

                {/* Mobile toggle button */}
                <button
                    className="md:hidden text-gray-700"
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
                <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
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