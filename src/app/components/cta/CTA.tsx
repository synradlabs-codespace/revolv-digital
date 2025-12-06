"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section className="relative py-32 bg-brand-light/5 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-6">

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-brand"
                >
                    Ready to Make Pipeline Predictable?
                </motion.h2>

                {/* Sub-copy */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-brand/70"
                >
                    Schedule a call to evaluate whether your current architecture can scale.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button className="bg-brand text-white px-10 py-6 text-lg rounded-lg shadow-lg hover:bg-brand-dark">
                        Book a Call
                    </Button>
                </motion.div>

            </div>
        </section>
    );
}
