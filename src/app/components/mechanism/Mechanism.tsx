"use client";

import { motion } from "framer-motion";

type MechanismStep = {
    step: string;
    behavior: string;
    outcome: string;
};

const steps: MechanismStep[] = [
    {
        step: "Capture → Score → Qualify",
        behavior: "Lead scoring identifies ICP prospects early.",
        outcome: "Higher quality pipeline.",
    },
    {
        step: "Automate → Nurture → Follow-Up",
        behavior: "Response lag is eliminated with automation.",
        outcome: "Faster movement to demo.",
    },
    {
        step: "Analyze → Optimize → Scale",
        behavior: "Every step becomes measurable and repeatable.",
        outcome: "Predictable, repeatable results.",
    },
];

export default function MechanismSection() {
    return (
        <section className="relative py-32 bg-base-white overflow-hidden">
            {/* --- Section Header --- */}
            <div className="text-center max-w-3xl mx-auto space-y-6 px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-brand">
                    How Predictability Is Engineered.
                </h2>
                <p className="text-lg text-brand/70">
                    A structured system that captures, automates, and measures every step of the lead journey.
                </p>
            </div>

            {/* --- Three Column Steps --- */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: i * 0.15 }}
                        className="bg-base-white/90 border border-brand/10 rounded-xl shadow-md p-8 flex flex-col gap-4 hover:scale-105 hover:shadow-lg transition-transform duration-300"
                    >
                        <span className="text-brand-dark font-semibold text-sm uppercase tracking-wide">
                            Step {i + 1}
                        </span>
                        <h3 className="text-xl font-bold text-brand">
                            {step.step}
                        </h3>
                        <p className="text-brand/70">{step.behavior}</p>
                        <p className="text-brand/90 font-medium">{step.outcome}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
