"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type CaseStudy = {
    title: string;
    metric: string;
    focus: string;
};

const studies: CaseStudy[] = [
    {
        title: "Series A SaaS Platform",
        metric: "⚡+167% increase in booked demos in 90 days.",
        focus: "Lead scoring + nurture automation.",
    },
    {
        title: "AI B2B Tool (Pre-Seed)",
        metric: "⚡From 12 → 39 demos/month.",
        focus: "Funnel flow clarity + reduced friction.",
    },
    {
        title: "Fintech SaaS (Growth Stage)",
        metric: "⚡32% faster sales cycle.",
        focus: "Prioritizing intent-ready leads.",
    },
    {
        title: "MarTech SaaS (Series B)",
        metric: "⚡+215% MQL → SQL conversion in 3 months.",
        focus: "Optimized funnel flow + lead scoring.",
    },
    {
        title: "B2B Analytics Tool",
        metric: "⚡50% reduction in sales cycle duration.",
        focus: "Behavior-based automated nurturing.",
    },
];

export default function CaseStudiesSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: scrollRef,
    });

    // Scroll-synced progress line
    const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="relative py-32 bg-base-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 relative">
                {/* LEFT COLUMN — FIXED TITLE + scroll indicator */}
                <div className="sticky top-32 flex flex-col items-start">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
                        Results Across SaaS Growth Stages
                    </h2>

                    <div className="relative w-1 h-full ml-3 bg-brand/10">
                        {/* Scroll progress fill */}
                        <motion.div
                            className="absolute left-0 top-0 w-full bg-brand rounded"
                            style={{ height: progressHeight }}
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN — SCROLLABLE CARDS */}
                <div
                    ref={scrollRef}
                    className="overflow-y-scroll max-h-[600px] space-y-10 px-4 relative scrollbar-hidden"
                >
                    {studies.map((study, i) => (
                        <motion.div
                            key={study.title}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white border border-brand/10 rounded-xl shadow-md p-8 relative z-10"
                        >
                            <h3 className="text-xl font-semibold text-brand mb-2">{study.title}</h3>
                            <p className="text-2xl font-bold text-brand-dark mb-2">{study.metric}</p>
                            <p className="text-brand/70">{study.focus}</p>
                        </motion.div>
                    ))}
                </div>

            </div>


        </section>
    );
}
