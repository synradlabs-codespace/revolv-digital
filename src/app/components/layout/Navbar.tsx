"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const current = window.scrollY;

            // Only hide after slight movement so it's not too sensitive
            if (current > lastScrollY + 5 && current > 80) {
                setHidden(true); // scrolling down → hide
            } else if (current < lastScrollY - 5) {
                setHidden(false); // scrolling up → show
            }

            lastScrollY = current;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-50"
            initial={{ y: -40, opacity: 0 }}
            animate={{
                y: hidden ? -90 : 0,
                opacity: hidden ? 0 : 1,
            }}
            transition={{
                duration: 0.45,
                ease: "easeOut",
            }}
        >
            <div className="backdrop-blur-xl bg-white/10 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* LEFT — LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="Revolv Digital logo"
                            width={38}
                            height={38}
                            className="rounded-md"
                        />
                        <span className="font-semibold text-lg tracking-wide text-brand">
                            Revolv Digital
                        </span>
                    </Link>

                    {/* CENTER NAV LINKS (desktop) */}
                    <nav className="hidden md:flex items-center gap-10 font-medium">
                        <Link href="/" className="text-brand.dark hover:opacity-70 transition">
                            Home
                        </Link>
                        <Link href="/about" className="text-brand.dark hover:opacity-70 transition">
                            About
                        </Link>
                    </nav>

                    {/* CTA BUTTON */}
                    <Button className="font-semibold px-6 py-3 rounded-xl shadow-md bg-brand text-white">
                        Book a Call
                    </Button>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="md:hidden"
                        onClick={() => setOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        <Menu size={28} className="text-brand.dark" />
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* overlay */}
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.45 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-40 bg-black/40"
                        />

                        {/* slide-in panel */}
                        <motion.div
                            key="panel"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="fixed top-0 right-0 h-full w-72 z-50 bg-brand text-white p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/logo.png"
                                        alt="Revolv Digital logo"
                                        width={38}
                                        height={38}
                                        className="rounded-md"
                                    />
                                    <span className="font-semibold">Revolv Digital</span>
                                </div>

                                <button onClick={() => setOpen(false)} aria-label="Close menu">
                                    <X size={22} className="text-green" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6 text-lg">
                                <Link href="/" onClick={() => setOpen(false)}>
                                    Home
                                </Link>
                                <Link href="/about" onClick={() => setOpen(false)}>
                                    About
                                </Link>
                                <Link href="/careers" onClick={() => setOpen(false)}>
                                    Careers
                                </Link>

                                <Button className="mt-6 py-3 rounded-xl font-semibold bg-brand text-white">
                                    Book a Call
                                </Button>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
