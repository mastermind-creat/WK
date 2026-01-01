import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check, Shield, Star, Zap, Cpu, ArrowRight, X } from 'lucide-react';
import { pricing } from '../data/portfolio';
import { useRef } from 'react';

const PricingCard = ({ tier, idx, isPopular, Icon, scrollXProgress }: any) => {
    // 3D Scroll Rotation Effect (Mobile Only)
    // We calculate the card's rotation based on its index relative to the scroll progress
    const range = [(idx - 1) / 4, idx / 4, (idx + 1) / 4];
    const rotateY = useTransform(scrollXProgress, range, [45, 0, -45]);
    const scale = useTransform(scrollXProgress, range, [0.8, 1, 0.8]);
    const opacity = useTransform(scrollXProgress, range, [0.5, 1, 0.5]);

    const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });
    const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            className={`group relative p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border flex flex-col h-full transition-all duration-500 shrink-0 w-[85vw] sm:w-[400px] lg:w-auto ${isPopular
                    ? 'bg-zinc-900/50 border-primary-600 shadow-[0_30px_60px_-12px_rgba(225,29,72,0.25)] scale-100 lg:scale-[1.08] z-20'
                    : 'bg-zinc-900/30 border-white/5 hover:border-white/10'
                }`}
            style={{
                backgroundColor: 'var(--bg-surface)',
                rotateY: typeof window !== 'undefined' && window.innerWidth < 1024 ? springRotateY : 0,
                scale: typeof window !== 'undefined' && window.innerWidth < 1024 ? springScale : 1,
                opacity: typeof window !== 'undefined' && window.innerWidth < 1024 ? opacity : 1,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
            {/* Industrial Badging */}
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-[8px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-lg z-30">
                    Primary_Protocol
                </div>
            )}

            {tier.plan === "Enterprise" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[8px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-lg z-30">
                    Enterprise_Level
                </div>
            )}

            <div className="absolute top-6 right-8 text-[10px] font-black text-white/10 uppercase tracking-widest select-none">
                VER_{idx + 1}.0
            </div>

            {/* Icon & Header */}
            <div className="mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${isPopular ? 'bg-primary-600 text-white shadow-glow' : 'bg-white/5 text-primary-500 border border-white/5'
                    }`}>
                    <Icon size={28} />
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter" style={{ color: 'var(--text-main)' }}>
                    {tier.plan}
                </h3>
                <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-3xl font-black" style={{ color: 'var(--text-main)' }}>{tier.price}</span>
                    {tier.price !== 'Quote' && <span className="text-[10px] font-bold text-zinc-500">/UNIT</span>}
                </div>
            </div>

            <p className="text-[11px] md:text-xs leading-relaxed font-bold opacity-60 mb-10 h-12 italic" style={{ color: 'var(--text-main)' }}>
                "{tier.description}"
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10 flex-grow">
                <div className="text-[8px] font-black uppercase tracking-widest text-zinc-500 mb-2">Enabled_Capabilities:</div>
                {tier.features.map((feature: string) => (
                    <div key={feature} className="flex items-start gap-3 group/feature">
                        <div className="mt-1 w-4 h-4 rounded-full bg-primary-600/10 border border-primary-500/20 flex items-center justify-center text-primary-500 shrink-0 group-hover/feature:bg-primary-600 group-hover/feature:text-white transition-colors">
                            <Check size={10} />
                        </div>
                        <span className="text-[11px] font-medium opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text-main)' }}>
                            {feature}
                        </span>
                    </div>
                ))}
                {tier.plan === "Basic" && (
                    <div className="flex items-start gap-3 opacity-30">
                        <div className="mt-1 w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 shrink-0">
                            <X size={10} />
                        </div>
                        <span className="text-[11px] font-medium italic">No CMS integration</span>
                    </div>
                )}
            </div>

            {/* CTA */}
            <button className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 ${isPopular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-xl shadow-primary-600/20'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                }`}
                style={{ color: !isPopular ? 'var(--text-main)' : undefined }}>
                Initialize Protocol
                <ArrowRight size={14} />
            </button>
        </motion.div>
    );
};

const Pricing = () => {
    const icons = [Cpu, Star, Zap, Shield];
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({
        container: scrollRef,
        offset: ["start start", "end end"]
    });

    return (
        <section id="pricing" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-900/5 rounded-full blur-[120px]" />
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(var(--primary-main) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 mb-6 font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-primary-500">
                        <Zap size={14} />
                        <span>Investment Protocols</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black gradient-text mb-6 uppercase italic tracking-tighter leading-[0.85]">
                        Strategic <span className="text-white dark:text-white">Tiering</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-xs md:text-lg font-medium opacity-60 leading-relaxed uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>
                        Precision-crafted pricing models for high-impact digital systems.
                    </p>
                </motion.div>

                {/* Horizontal Scroll Progress Indicator (Mobile Only) */}
                <div className="md:hidden flex justify-center gap-2 mb-10">
                    {pricing.map((_, i) => (
                        <motion.div
                            key={i}
                            className="h-1.5 rounded-full bg-primary-600"
                            style={{
                                width: 24,
                                opacity: useTransform(scrollXProgress, [(i - 0.5) / 3, i / 3, (i + 0.5) / 3], [0.2, 1, 0.2])
                            }}
                        />
                    ))}
                </div>

                {/* Pricing Grid / Horizontal Scroll */}
                <div
                    ref={scrollRef}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-12 md:pb-0 snap-x snap-mandatory scrollbar-hide perspective-[1000px] px-4 md:px-0"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    {pricing.map((tier, idx) => (
                        <div key={tier.plan} className="snap-center">
                            <PricingCard
                                tier={tier}
                                idx={idx}
                                isPopular={tier.popular}
                                Icon={icons[idx] || Star}
                                scrollXProgress={scrollXProgress}
                            />
                        </div>
                    ))}
                </div>

                {/* Professional Note */}
                <motion.p
                    className="mt-16 text-center text-[9px] font-bold uppercase tracking-[0.3em] opacity-30"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.3 }}
                >
                    Custom industrial frameworks available upon direct request. Standard SLA applies to all tiers.
                </motion.p>
            </div>
        </section>
    );
};

export default Pricing;
