import { motion, useInView } from 'framer-motion';
import { MessageSquare, FileCheck, Wallet, Code, Rocket, Sparkles, DollarSign } from 'lucide-react';
import { useRef } from 'react';

const HowIWork = () => {
    const steps = [
        {
            icon: MessageSquare,
            title: "Consultation",
            number: "01",
            description: "Deep-dive into project architecture, mission objectives, and technical requirements.",
            duration: "1-2 days"
        },
        {
            icon: FileCheck,
            title: "Strategy",
            number: "02",
            description: "Preparation of industrial-grade project specifications, timelines, and budgets.",
            duration: "2-3 days"
        },
        {
            icon: Wallet,
            title: "Commitment",
            number: "03",
            description: "Securing the development slot with a 40% initial resource allocation.",
            duration: "Immediate",
            highlight: true
        },
        {
            icon: Code,
            title: "Execution",
            number: "04",
            description: "Rigorous development cycles with transparent weekly sprints and live demos.",
            duration: "Project-based"
        },
        {
            icon: Rocket,
            title: "Deployment",
            number: "05",
            description: "Mission launch and final handover after balance clearance. Includes 30d priority support.",
            duration: "1-2 days"
        }
    ];

    return (
        <section id="how-i-work" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[140px]"
                    animate={{
                        x: [0, 100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border mb-6"
                        style={{ borderColor: 'var(--border-main)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-4 h-4 text-primary-500" />
                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                            Process Excellence
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 gradient-text">
                        How I Work
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-muted)' }}>
                        A systematic approach to delivering exceptional digital products
                    </p>
                </motion.div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2" style={{ backgroundColor: 'var(--border-main)' }}>
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary-600 to-rose-500"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-5 gap-4">
                        {steps.map((step, idx) => (
                            <ProcessStep key={step.number} step={step} index={idx} />
                        ))}
                    </div>
                </div>

                {/* Mobile/Tablet Vertical Timeline */}
                <div className="lg:hidden space-y-6">
                    {steps.map((step, idx) => (
                        <MobileProcessStep key={step.number} step={step} index={idx} />
                    ))}
                </div>

                {/* Payment Terms Highlight */}
                <motion.div
                    className="mt-12 md:mt-20 p-5 md:p-12 rounded-2xl md:rounded-[3rem] glass border relative overflow-hidden"
                    style={{ borderColor: 'var(--primary-main)' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-rose-500/10" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary-600 flex items-center justify-center shadow-glow shrink-0">
                            <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-lg md:text-2xl font-black mb-2" style={{ color: 'var(--text-main)' }}>
                                Payment Structure
                            </h3>
                            <p className="text-sm md:text-lg" style={{ color: 'var(--text-muted)' }}>
                                <span className="font-black text-primary-500">40% upfront</span> to secure your slot,
                                <span className="font-black text-primary-500"> 60% on delivery</span>.
                                All projects include 30 days of priority support.
                            </p>
                        </div>

                        <motion.a
                            href="#contact"
                            className="px-6 md:px-8 py-3 md:py-4 bg-primary-600 text-white font-bold text-xs md:text-sm uppercase tracking-wider rounded-xl md:rounded-2xl hover:bg-primary-700 transition-all shadow-premium shrink-0"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Project
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Desktop Process Step
const ProcessStep = ({ step, index }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Connector Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                    className="w-4 h-4 rounded-full bg-primary-600 shadow-glow"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                />
            </div>

            {/* Card */}
            <motion.div
                className={`glass rounded-[2rem] p-6 ${step.highlight ? 'border-primary-500' : ''}`}
                style={{ borderColor: step.highlight ? 'var(--primary-main)' : 'var(--border-main)' }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary-600 text-white font-black text-sm flex items-center justify-center shadow-glow">
                    {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center mb-4 shadow-glow">
                    <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-black mb-2" style={{ color: 'var(--text-main)' }}>
                    {step.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
                    {step.description}
                </p>
                <div className="text-xs font-bold text-primary-500">
                    {step.duration}
                </div>

                {/* Highlight Glow */}
                {step.highlight && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-rose-500/10 rounded-[2rem] pointer-events-none" />
                )}
            </motion.div>
        </motion.div>
    );
};

// Mobile Process Step
const MobileProcessStep = ({ step, index }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="relative flex gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Timeline */}
            <div className="flex flex-col items-center">
                <motion.div
                    className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center shadow-glow shrink-0"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                    <step.icon className="w-6 h-6 text-white" />
                </motion.div>
                {index < 4 && (
                    <motion.div
                        className="w-0.5 flex-1 mt-4 bg-gradient-to-b from-primary-600 to-transparent"
                        initial={{ height: 0 }}
                        animate={isInView ? { height: "100%" } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    />
                )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-6 md:pb-8">
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <span className="text-[10px] md:text-xs font-black text-primary-500">
                        {step.number}
                    </span>
                    <h3 className="text-base md:text-xl font-black" style={{ color: 'var(--text-main)' }}>
                        {step.title}
                    </h3>
                </div>
                <p className="text-xs md:text-sm leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>
                    {step.description}
                </p>
                <div className="text-[10px] md:text-xs font-bold text-primary-500">
                    {step.duration}
                </div>
                {step.highlight && (
                    <div className="mt-2 md:mt-3 inline-flex items-center gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20">
                        <span className="text-[10px] md:text-xs font-bold text-primary-500">40% Upfront Required</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default HowIWork;
