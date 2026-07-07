

import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

import {
    HiOutlineMapPin,
    HiOutlinePhone,
    HiOutlineEnvelope,
} from "react-icons/hi2";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
    FaPinterestP,
    FaTiktok,
} from "react-icons/fa6";

export default function Footer() {

    const { footer } = data;

    return (

        <footer className="border-t border-gray-200 bg-brand-tertiary">

            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

                <div className="grid gap-14 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

                    {/* Logo & Description */}

                    <div>

                        <Image
                            src={footer.logo}
                            alt="Graphilla Academy"
                            width={180}
                            height={45}
                        />

                        <p className="mt-5 font-medium text-brand-primary">
                            {footer.tagline}
                        </p>

                        <p className="mt-4 text-[15px] leading-7 text-gray-600">
                            {footer.description}
                        </p>

                    </div>

                    {/* Academy */}

                    <div>

                        <h3 className="mb-5 text-lg font-semibold">
                            Academy
                        </h3>

                        <ul className="space-y-3">

                            {footer.academyLinks.map((link) => (

                                <li key={link.href}>

                                    <Link
                                        href={link.href}
                                        className="text-gray-600 transition hover:text-brand-primary"
                                    >
                                        {link.title}
                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Services */}

                    <div>

                        <h3 className="mb-5 text-lg font-semibold">
                            Services
                        </h3>

                        <ul className="space-y-3">

                            {footer.services.map((service) => (

                                <li
                                    key={service}
                                    className="text-gray-600"
                                >
                                    {service}
                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="mb-5 text-lg font-semibold">
                            Contact
                        </h3>

                        <div className="space-y-5">

                            <div className="flex items-start gap-3">

                                <HiOutlineMapPin className="mt-1 text-xl text-brand-primary shrink-0" />

                                <p className="text-gray-600">
                                    {footer.contact.address}
                                </p>

                            </div>

                            <div className="flex items-start gap-3">

                                <HiOutlinePhone className="mt-1 text-xl text-brand-primary shrink-0" />

                                <div>

                                    {footer.contact.phones.map((phone) => (

                                        <p
                                            key={phone}
                                            className="text-gray-600"
                                        >
                                            {phone}
                                        </p>

                                    ))}

                                </div>

                            </div>

                            <div className="flex items-start gap-3 min-w-0">

                                <HiOutlineEnvelope className="mt-1 text-xl text-brand-primary shrink-0" />

                                <p className="text-gray-600 wrap-break-words">
                                    {footer.contact.email}
                                </p>

                            </div>

                        </div>

                        {/* Social */}

                        <div className="mt-8">

                            <h4 className="mb-4 font-semibold">
                                Follow Us
                            </h4>

                            <div className="flex flex-wrap gap-3">

                                <a
                                    href="https://www.facebook.com/graphillaacademy"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                                >
                                    <FaFacebookF />
                                </a>

                                <a
                                    href="https://www.instagram.com/graphillaacademy"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="https://www.linkedin.com/company/graphilla-technology/posts/?feedView=all"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">

                    &copy; {new Date().getFullYear()} Graphilla Academy.

                    <br className="sm:hidden" />

                    An initiative of Graphilla Technology Pvt. Ltd.

                    <br className="sm:hidden" />

                    All rights reserved.

                </div>

            </div>

        </footer>

    );

}