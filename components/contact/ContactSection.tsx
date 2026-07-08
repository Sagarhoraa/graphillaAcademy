"use client";

import { motion } from "framer-motion";
import data from "@/data/data.json";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineClock,
  HiArrowRight,
} from "react-icons/hi2";

const inputClasses =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10";

export default function ContactSection() {
  const { contact, form } = data.contactPage;

  const contactItems = [
    {
      icon: HiOutlineMapPin,
      title: "Office",
      value: contact.office,
    },
    {
      icon: HiOutlineEnvelope,
      title: "Email",
      value: contact.email,
    },
    {
      icon: HiOutlinePhone,
      title: "Phone",
      value: contact.phone,
    },
    {
      icon: HiOutlineClock,
      title: "Working Hours",
      value: contact.hours,
    },
  ];

  return (
    <section
      id="contact-form"
      className="bg-brand-tertiary py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:gap-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="min-w-0"
        >
          <span className="inline-block rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-medium text-brand-primary">
            {contact.heading}
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            {contact.title}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {contact.description}
          </p>

          <div className="mt-10 space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary sm:h-14 sm:w-14">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 whitespace-pre-line break-all text-gray-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="min-w-0 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            {form.title}
          </h2>

          <p className="mt-4 text-gray-600">
            {form.description}
          </p>

          <form className="mt-8 space-y-7">
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2.5 block text-sm font-medium">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="John"
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="mb-2.5 block text-sm font-medium">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Doe"
                  className={inputClasses}
                />
              </div>

            </div>

            <div>
              <label className="mb-2.5 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className={inputClasses}
              />
            </div>

            <div>
              <label className="mb-2.5 block text-sm font-medium">
                Phone
              </label>

              <input
                type="tel"
                placeholder="+977 98XXXXXXXX"
                className={inputClasses}
              />
            </div>

            <div>
              <label className="mb-2.5 block text-sm font-medium">
                Your Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message here..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-lg"
            >
              Send Message

              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <p className="text-center text-sm leading-6 text-gray-500">
              {form.privacy}
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
}