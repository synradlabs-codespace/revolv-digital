"use client";

import { motion } from "framer-motion";

const bullets = [
    "Predictable demo volume",
    "Lower CAC",
    "Shorter sales cycles",
    "No dependency on irregular campaigns",
    "Operational clarity across teams",
    "Systemic, not founder-dependent marketing",
];

export default function Validation() {
    return (
        <section className="relative py-32 bg-base-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT COLUMN — Title & Description */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-brand">
                        Why SaaS Teams Choose This Architecture
                    </h2>
                    <p className="text-lg text-brand/70">
                        Our system is designed to ensure consistency, predictability, and operational clarity, allowing teams to scale with confidence.
                    </p>
                </motion.div>

                {/* RIGHT COLUMN — Bullets with subtle hover */}
                <div className="space-y-8">
                    {bullets.map((bullet, i) => (
                        <motion.div
                            key={bullet}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="flex items-center gap-4 group"
                        >
                            {/* Circle acting like a “metric point” */}
                            <div className="w-4 h-4 rounded-full bg-brand/80" />

                            {/* Bullet text */}
                            <motion.p
                                className="text-brand/80 font-medium text-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                {bullet}
                            </motion.p>

                            {/* Horizontal bar */}
                            <div className="h-1 bg-brand/30 rounded-full flex-1 ml-4" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
