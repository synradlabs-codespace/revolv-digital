"use client";

import { motion } from "framer-motion";
import {
    SlidersHorizontal,
    LineChart,
    CalendarCheck,
    GitBranch,
    Timer,
    Sparkles
} from "lucide-react";

const features = [
    {
        icon: <SlidersHorizontal size={34} className="text-brand" />,
        title: "Pipeline Progression",
        desc: "Track movement across stages and identify conversion friction with precision.",
    },
    {
        icon: <LineChart size={34} className="text-brand" />,
        title: "Demo Trend Intelligence",
        desc: "Forecast demo volume patterns and understand demand cycles.",
    },
    {
        icon: <CalendarCheck size={34} className="text-brand" />,
        title: "Booked Call Output",
        desc: "Real conversion output — no vanity metrics, only pipeline that matters.",
    },
    {
        icon: <GitBranch size={34} className="text-brand" />,
        title: "Funnel Flow Mapping",
        desc: "Visualize how cold leads progress toward qualification and demo booking.",
    },
    {
        icon: <Timer size={34} className="text-brand" />,
        title: "Automated Follow-Ups",
        desc: "Behavior-based nurturing that improves response rates and reduces manual workload.",
    },
    {
        icon: <Sparkles size={34} className="text-brand" />,
        title: "Lead Scoring Logic",
        desc: "Prioritize ICP-fit leads based on engagement, buying signals, and intent depth.",
    },
];

export default function Funnel() {
    return (
        <section className="relative bg-base-white py-28 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* --- TOP TEXT --- */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand leading-tight">
                        Full-Funnel Visibility. Built for Precision.
                    </h2>

                    <p className="text-brand/70 text-lg mt-4">
                        A structured revenue architecture that eliminates noise and maximizes
                        booked-demo velocity — powered behind the scenes by your HubSpot data.
                    </p>
                </div>

                {/* --- FUNNEL FLOW DIAGRAM WITH FEATURES --- */}
                <div className="grid lg:grid-cols-[350px_1fr] gap-16 items-start">

                    {/* --- FUNNEL DIAGRAM (Abstract, No UI) --- */}
                    <div className="relative flex flex-col items-center">

                        {/* Vertical Line */}
                        <div className="absolute top-0 bottom-0 w-[3px] bg-brand/20"></div>

                        {/* Steps */}
                        {[
                            "Cold Prospects",
                            "Engaged Leads",
                            "Marketing Qualified",
                            "Sales Qualified",
                            "Booked Demo",
                        ].map((label, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative z-10 bg-white px-6 py-4 rounded-xl shadow-sm border border-brand/10 mb-10"
                            >
                                <p className="text-brand font-semibold">{label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- FEATURES GRID --- */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-md border border-brand/10 hover:shadow-lg transition"
                            >
                                <div className="mb-4">{f.icon}</div>
                                <h3 className="text-xl font-semibold text-brand mb-1">{f.title}</h3>
                                <p className="text-brand/70">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// type FunnelFeature = {
//     title: string;
//     description: string;
// };

// const features: FunnelFeature[] = [
//     {
//         title: "Pipeline Progression",
//         description:
//             "Track lead journey and drop-offs in real time to diagnose friction.",
//     },
//     {
//         title: "Demo Trend Graph",
//         description:
//             "Monitor demo growth patterns and predict demand cycles.",
//     },
//     {
//         title: "Booked Call Calendar",
//         description:
//             "View actual conversion output — not vanity metrics.",
//     },
//     {
//         title: "Funnel Flow Path",
//         description:
//             "See how cold prospects move toward qualification and demo booking.",
//     },
//     {
//         title: "Automated Follow-Ups",
//         description:
//             "Reduce manual tasks and response delay with behavior-based nurturing.",
//     },
//     {
//         title: "Lead Scoring System",
//         description:
//             "Prioritize ICP-fit leads based on engagement and demonstrated intent.",
//     },
// ];

// export default function FunnelParallax() {
//     const ref = useRef<HTMLDivElement>(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start end", "end start"],
//     });

//     const topCircleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
//     const middleCircleY = useTransform(scrollYProgress, [0, 1], [50, -50]);
//     const bottomCircleY = useTransform(scrollYProgress, [0, 1], [100, 0]);

//     return (
//         <section
//             ref={ref}
//             className="relative min-h-[900px] flex flex-col items-center justify-center overflow-hidden px-6 py-32"
//         >
//             {/* --- Parallax Circles --- */}
//             <motion.div
//                 style={{ y: topCircleY }}
//                 className="absolute w-72 h-72 rounded-full bg-gradient-to-b from-brand to-brand/50 opacity-50 top-0"
//             />
//             <motion.div
//                 style={{ y: middleCircleY }}
//                 className="absolute w-96 h-96 rounded-full bg-gradient-to-b from-brand-light to-brand opacity-40 top-1/3"
//             />
//             <motion.div
//                 style={{ y: bottomCircleY }}
//                 className="absolute w-80 h-80 rounded-full bg-gradient-to-b from-brand-dark to-brand opacity-30 bottom-0"
//             />

//             {/* --- Section Header --- */}
//             <div className="relative z-10 text-center space-y-6 max-w-3xl">
//                 <h2 className="text-3xl md:text-4xl font-bold text-brand">
//                     Full-Funnel Visibility. Built for Precision.
//                 </h2>
//                 <p className="text-lg text-brand/70">
//                     Each component in the dashboard has a purpose — to remove
//                     guesswork, eliminate noise, and maximize booked demo velocity.
//                 </p>
//             </div>

//             {/* --- Features List --- */}
//             <div className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
//                 {features.map((feature, i) => (
//                     <motion.div
//                         key={i}
//                         initial={{ opacity: 0, y: 40 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true, amount: 0.4 }}
//                         transition={{ duration: 0.8, delay: i * 0.1 }}
//                         className="bg-base-white/90 rounded-xl shadow-md p-6 border border-brand/10"
//                     >
//                         <h3 className="font-semibold text-xl text-brand mb-2">
//                             {feature.title}
//                         </h3>
//                         <p className="text-brand/70">{feature.description}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }
