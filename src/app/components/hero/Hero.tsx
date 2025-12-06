"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Particle = {
    top: number;
    left: number;
    delay: number;
    duration: number;
};


export default function HeroDashboard() {
    const imageRef = useRef(null);
    const imageVisible = useInView(imageRef, { margin: "-200px" });

    // ---- Generate particle positions client-side only ----
    const [particles, setParticles] = useState<Particle[]>([]);


    useEffect(() => {
        const arr = Array.from({ length: 50 }).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            delay: Math.random() * 2,
            duration: 10 + Math.random() * 6,
        }));
        setParticles(arr);
    }, []);

    return (
        <section className="relative min-h-screen bg-base-white flex flex-col justify-start pt-32 pb-20 overflow-hidden">

            {/* --- FLOATING PARTICLES (Hydration safe) --- */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-brand/30 rounded-full"
                        initial={{ opacity: 0.3 }}
                        animate={{
                            y: [-25, 25],
                            x: [0, 12, -12, 0],
                            opacity: [0.25, 0.6, 0.25],
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        style={{
                            top: `${p.top}%`,
                            left: `${p.left}%`,
                        }}
                    />
                ))}
            </div>

            {/* bottom fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-base-white via-base-white/80 to-transparent"></div>

            {/* --- TEXT CONTENT --- */}
            <div className="container mx-auto px-6 max-w-3xl text-center space-y-6 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-brand leading-tight">
                    We Engineer Predictable <br /> Booked Pipeline for SaaS.
                </h1>

                <p className="text-lg md:text-xl text-brand/70 max-w-2xl mx-auto">
                    Revenue architecture—not random marketing. A structured system that
                    drives predictable demand and consistently booked demos.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Button className="bg-brand text-white px-8 py-6 text-lg rounded-lg hover:bg-brand-dark">
                        Book Your Call
                    </Button>

                    <Button
                        variant="outline"
                        className="border-brand text-brand px-8 py-6 text-lg rounded-lg hover:bg-brand/5"
                    >
                        See the System Framework
                    </Button>
                </div>
            </div>


            {/* --- SCROLL ARROW (best position under text content) --- */}
            {!imageVisible && (
                <motion.div
                    className="absolute left-1/2 top-[72vh] -translate-x-1/2 text-brand/60 z-30 flex justify-center"
                    animate={{ y: [0, 14, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={44} strokeWidth={1.5} />
                </motion.div>
            )}


            {/* --- IMAGE SECTION --- */}
            <motion.div
                ref={imageRef}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="container mx-auto px-6 mt-32 max-w-5xl relative z-10"
            >
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-brand/10">

                    {/* subtle glow */}
                    <motion.div
                        className="absolute -inset-8 bg-brand/20 blur-[90px] rounded-xl -z-10"
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />

                    <Image
                        src="/dashboard/dashboard-preview.png"
                        alt="Dashboard Preview"
                        width={1200}
                        height={700}
                        className="rounded-xl"
                    />
                </div>
            </motion.div>
        </section>
    );
}
