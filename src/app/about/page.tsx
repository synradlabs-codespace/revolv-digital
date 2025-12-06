"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-32">

            {/* HERO */}
            <section className="relative max-w-6xl mx-auto px-6 text-center mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold text-brand mb-6"
                >
                    The Architecture Behind Predictable Pipeline.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-brand/70 max-w-3xl mx-auto"
                >
                    Revolv Digital builds systems—not campaigns—to help SaaS teams
                    remove guesswork, automate qualification, and scale the volume
                    of intent-ready demos.
                </motion.p>
            </section>

            {/* 2-COLUMN STORY */}
            <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-brand">Our Methodology</h2>

                    <p className="text-brand/70 leading-relaxed">
                        Modern SaaS growth is a system problem—not a traffic problem.
                        We build architectures that score leads, prioritize buying
                        intent, and automate movement toward the demo.
                    </p>

                    <p className="text-brand/70 leading-relaxed">
                        Your team stops relying on unpredictable campaigns and
                        starts operating with clarity, speed, and repeatability.
                    </p>
                </motion.div>

                {/* Parallax Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="relative"
                >
                    <Image
                        src="/dashboard/dashboard-preview.png"
                        alt="System Architecture"
                        width={600}
                        height={500}
                        className="rounded-2xl shadow-xl"
                    />
                </motion.div>

            </section>

            {/* VALUES */}
            <section className="max-w-6xl mx-auto px-6 mt-32">
                <h3 className="text-3xl font-bold text-brand text-center mb-16">
                    What We Optimize For
                </h3>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Clarity",
                            desc: "Everything becomes visible. Lead scoring, funnel flow, and intent signals.",
                        },
                        {
                            title: "Speed",
                            desc: "Automation removes response lag and accelerates movement toward demo.",
                        },
                        {
                            title: "Predictability",
                            desc: "The architecture produces consistent outcomes—not one-off wins.",
                        },
                    ].map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-brand-light/10 border border-brand/10 shadow-lg"
                        >
                            <h4 className="text-2xl font-bold text-brand mb-4">{card.title}</h4>
                            <p className="text-brand/70 leading-relaxed">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
