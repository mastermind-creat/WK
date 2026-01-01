import { motion } from 'framer-motion';
import { Check, X, Shield, Star, Zap, Cpu } from 'lucide-react';
import { pricing } from '../data/portfolio';

const Pricing = () => {
    const icons = [Cpu, Star, Zap, Shield];

    return (
        <section id="pricing" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-900/5 rounded-full blur-[120px]" />

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border mb-4 md:mb-6" style={{ borderColor: 'var(--border-main)' }}>
                        <Zap className="w-3.5 h-3.5 text-primary-500" />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Transparent Investment</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black gradient-text mb-4">Strategic Tiering</h2>
                    <p className="max-w-xl mx-auto text-sm md:text-lg" style={{ color: 'var(--text-muted)' }}>
                        Elevate your digital presence with precision-crafted solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {pricing.map((tier, idx) => {
                        const Icon = icons[idx] || Star;
                        return (
                            <motion.div
                                key={tier.plan}
                                className={`group relative p-5 md:p-10 rounded-2xl md:rounded-[3rem] border transition-all duration-500 hover:-translate-y-2 ${tier.popular
                                    ? 'border-primary-600 shadow-[0_0_50px_rgba(37,99,235,0.2)] md:scale-105 z-10 active-focus-card'
                                    : 'shadow-xl'
                                    }`}
                                style={{
                                    backgroundColor: 'var(--bg-surface)',
                                    borderColor: tier.popular ? 'var(--primary-main)' : 'var(--border-main)'
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                animate={tier.popular ? {
                                    y: [0, -10, 0],
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                } : {}}
                            >
                                {tier.popular && (
                                    <>
                                        <div className="absolute inset-0 bg-primary-600/5 rounded-2xl md:rounded-[3rem] animate-pulse-slow" />
                                        <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary-600 text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest px-3 md:px-4 py-1 md:py-1.5 rounded-full shadow-glow z-20">
                                            Popular Choice
                                        </div>
                                    </>
                                )}

                                <div className="flex flex-col items-center mb-6 md:mb-10">
                                    <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-[1.5rem] flex items-center justify-center mb-3 md:mb-6 transition-all duration-300 group-hover:rotate-12 ${tier.popular ? 'bg-primary-600 text-white shadow-lg' : 'border text-primary-500 shadow-inner'}`} style={{ backgroundColor: !tier.popular ? 'var(--bg-main)' : undefined, borderColor: !tier.popular ? 'var(--border-main)' : undefined }}>
                                        <Icon size={tier.popular ? 20 : 16} className="md:w-8 md:h-8" />
                                    </div>
                                    <h3 className="text-xs md:text-xl font-black uppercase tracking-wider md:tracking-widest text-center" style={{ color: 'var(--text-main)' }}>{tier.plan}</h3>
                                </div>

                                <div className="text-center mb-6 md:mb-10">
                                    <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-black mb-1 md:mb-2 opacity-50">Investment</p>
                                    <div className="text-xl md:text-3xl font-black" style={{ color: 'var(--text-main)' }}>{tier.price}</div>
                                </div>

                                <p className="text-[9px] md:text-xs text-center mb-6 md:mb-10 leading-relaxed font-bold italic h-8 md:h-12 flex items-center justify-center opacity-70 line-clamp-2 md:line-clamp-none" style={{ color: 'var(--text-main)' }}>
                                    "{tier.description}"
                                </p>

                                <div className="w-full h-px mb-6 md:mb-10" style={{ backgroundColor: 'var(--border-main)' }} />

                                <ul className="space-y-3 md:space-y-5 mb-8 md:mb-12">
                                    {tier.features.map(feature => (
                                        <li key={feature} className="flex items-start gap-2 md:gap-3">
                                            <div className="mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary-600/10 border border-primary-600/20 flex items-center justify-center text-primary-500 shrink-0">
                                                <Check size={10} className="md:w-3 md:h-3" />
                                            </div>
                                            <span className="text-[10px] md:text-sm font-medium line-clamp-2" style={{ color: 'var(--text-muted)' }}>{feature}</span>
                                        </li>
                                    ))}
                                    {idx === 0 && (
                                        <li className="hidden md:flex items-start gap-3 opacity-20 grayscale">
                                            <div className="mt-0.5 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0">
                                                <X size={12} />
                                            </div>
                                            <span className="text-sm">Enterprise support</span>
                                        </li>
                                    )}
                                </ul>

                                <button
                                    className={`w-full py-3 md:py-5 rounded-xl md:rounded-2xl font-black text-[9px] md:text-xs uppercase tracking-wider md:tracking-widest transition-all duration-300 active:scale-95 border ${tier.popular
                                        ? 'bg-primary-600 text-white border-primary-600 shadow-xl shadow-primary-600/20 hover:bg-primary-700'
                                        : 'hover:bg-primary-600 hover:text-white'
                                        }`}
                                    style={{
                                        backgroundColor: !tier.popular ? 'var(--bg-main)' : undefined,
                                        color: !tier.popular ? 'var(--text-main)' : undefined,
                                        borderColor: !tier.popular ? 'var(--border-main)' : undefined
                                    }}
                                >
                                    Get Started
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
