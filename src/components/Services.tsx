import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Globe,
    Palette,
    Wrench,
    Zap,
    Smartphone,
    Search,
    FileText,
    GraduationCap,
    Monitor,
    Code,
    UserCheck,
    Server,
    X,
    MessageCircle,
    CheckCircle,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import { services } from '../data/portfolio';

const Services = () => {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    const iconMap: { [key: string]: any } = {
        globe: Globe,
        palette: Palette,
        tool: Wrench,
        zap: Zap,
        smartphone: Smartphone,
        search: Search,
        'file-invoice-dollar': FileText,
        'graduation-cap': GraduationCap,
        'laptop-code': Monitor,
        'project-diagram': Code,
        'user-tie': UserCheck,
        'server': Server,
        'paint-brush': Palette
    };

    return (
        <section id="services" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[140px]"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[160px]"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
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
                    transition={{ duration: 0.6 }}
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
                            Premium Services
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 gradient-text">
                        Elite Solutions
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-muted)' }}>
                        Transforming ambitious ideas into high-performance digital products
                    </p>
                </motion.div>

                {/* Services Grid - 2 cols on mobile, 3 on tablet, 4 on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {services.map((service, idx) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                            icon={iconMap[service.icon] || Globe}
                            index={idx}
                            onClick={() => setSelectedService(service)}
                        />
                    ))}
                </div>
            </div>

            {/* Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <ServiceModal
                        service={selectedService}
                        icon={iconMap[selectedService.icon] || Globe}
                        onClose={() => setSelectedService(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

// 3D Tilt Card Component
const ServiceCard = ({ service, icon: Icon, index, onClick }: any) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="group relative depth-card cursor-pointer"
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <motion.div
                className="relative glass rounded-xl md:rounded-[2rem] p-4 md:p-8 overflow-hidden transition-all duration-300"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                    borderColor: 'var(--border-main)',
                }}
                whileHover={{ scale: 1.02 }}
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 opacity-0 group-hover:opacity-100 group-hover:from-primary-500/10 group-hover:via-transparent group-hover:to-rose-500/10 transition-all duration-500" />

                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-primary-500 via-rose-500 to-primary-500 opacity-20 blur-xl" />
                </div>

                {/* Content */}
                <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                    {/* Icon */}
                    <motion.div
                        className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary-600 flex items-center justify-center mb-4 md:mb-6 shadow-glow"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-sm md:text-xl font-black mb-2 md:mb-3 group-hover:text-primary-500 transition-colors line-clamp-2" style={{ color: 'var(--text-main)' }}>
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[10px] md:text-sm leading-relaxed mb-3 md:mb-6 line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                        {service.description}
                    </p>

                    {/* Price Badge */}
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] md:text-xs font-black uppercase tracking-wider text-primary-500">
                            {service.price}
                        </span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Features Preview - Hidden on mobile */}
                    <div className="hidden md:block mt-6 pt-6 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                        <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 2).map((feature: string, idx: number) => (
                                <span
                                    key={idx}
                                    className="text-xs px-3 py-1 rounded-full"
                                    style={{
                                        backgroundColor: 'var(--bg-elevated)',
                                        color: 'var(--text-muted)'
                                    }}
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors duration-500" />
            </motion.div>
        </motion.div>
    );
};

// Premium Modal Component
const ServiceModal = ({ service, icon: Icon, onClose }: any) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Modal */}
            <motion.div
                className="relative glass-strong rounded-[3rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-premium"
                style={{ borderColor: 'var(--border-main)' }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close Modal"
                    className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all z-10"
                    style={{ borderColor: 'var(--border-main)' }}
                >
                    <X size={20} />
                </button>

                {/* Content */}
                <div className="p-8 sm:p-12">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center shadow-glow shrink-0">
                            <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-3xl font-black mb-2" style={{ color: 'var(--text-main)' }}>
                                {service.title}
                            </h3>
                            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
                                {service.description}
                            </p>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                        <div className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                            Starting Price
                        </div>
                        <div className="text-4xl font-black text-primary-500">
                            {service.price}
                        </div>
                    </div>

                    {/* Detailed Features */}
                    <div className="mb-8">
                        <h4 className="text-xl font-black mb-6" style={{ color: 'var(--text-main)' }}>
                            What's Included
                        </h4>
                        <div className="space-y-4">
                            {service.detailedFeatures.map((feature: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-start gap-4 p-4 rounded-xl"
                                    style={{ backgroundColor: 'var(--bg-main)' }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                                    <div className="flex-1">
                                        <div className="font-bold mb-1" style={{ color: 'var(--text-main)' }}>
                                            {feature.name}
                                        </div>
                                        <div className="text-sm font-bold text-primary-500">
                                            {feature.price}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                        href={`https://wa.me/254743394373?text=${encodeURIComponent(service.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 w-full py-5 bg-primary-600 text-white font-bold text-sm uppercase tracking-wider rounded-2xl hover:bg-primary-700 transition-all shadow-premium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <MessageCircle size={20} />
                        Get Started on WhatsApp
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default Services;
