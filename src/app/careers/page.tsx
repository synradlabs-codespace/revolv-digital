"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
    const roles = [
        {
            title: "Growth Architect",
            desc: "Design systems that score leads, automate qualification, and create predictable demo volume.",
        },
        {
            title: "Automation Engineer",
            desc: "Build backend logic, workflows, and automations that eliminate operational friction.",
        },
        {
            title: "Data & Funnel Analyst",
            desc: "Turn funnel behavior, intent signals, and activation metrics into actionable insights.",
        },
    ];

    return (
        <div className="pt-32 pb-32">

            {/* HERO */}
            <section className="max-w-5xl mx-auto px-6 text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold text-brand mb-6"
                >
                    Build The Future of Predictable Growth.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-brand/70 max-w-3xl mx-auto"
                >
                    We're looking for people who enjoy clarity, systems thinking,
                    and solving deep operational problems for SaaS teams.
                </motion.p>
            </section>

            {/* ROLES */}
            <section className="max-w-5xl mx-auto px-6 space-y-10">
                {roles.map((job, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, delay: i * 0.1 }}
                        className="p-8 rounded-2xl bg-brand-light/10 border border-brand/10 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-brand mb-4">{job.title}</h3>
                        <p className="text-brand/70 mb-6">{job.desc}</p>
                        <Button className="bg-brand text-white">Apply Now</Button>
                    </motion.div>
                ))}
            </section>

        </div>
    );
}
