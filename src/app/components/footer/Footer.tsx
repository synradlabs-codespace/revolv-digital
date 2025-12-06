"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const disclaimers = [
        "No exaggerated claims",
        "No guarantees",
        "No emotional persuasion",
    ];

    const principles = [
        "Precision over guesswork.",
        "Systems over improvisation.",
    ];

    return (
        <footer className="relative py-20 bg-base-white border-t border-brand/10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-10">

                {/* Disclaimer Section */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-1 text-brand/50 text-xs md:text-sm"
                >
                    {disclaimers.map((line, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="h-px w-24 bg-brand/10"></div>

                {/* "Just" Section */}
                <motion.h3
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xl md:text-4xl font-semibold text-brand/80"
                >
                    Just
                </motion.h3>

                <motion.div
                    className="flex flex-col gap-3 text-brand/80"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                >
                    {principles.map((line, i) => (
                        <motion.p
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 8 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="text-base md:text-lg font-medium flex items-center justify-center gap-2"
                        >
                            <span className="text-brand"></span> {line}
                        </motion.p>
                    ))}
                </motion.div>

            </div>
        </footer>
    );
}
