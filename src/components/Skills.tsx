import { motion } from 'framer-motion';
import { Code, Server, Database, Palette, Cpu } from 'lucide-react';
import { skills, techStack } from '../data/portfolio';

const Skills = () => {
    const iconMap: { [key: string]: any } = {
        code: Code,
        server: Server,
        database: Database,
        palette: Palette
    };

    // Helper to get Simple Icons URL
    const getIconUrl = (slug: string) => {
        const slugMap: { [key: string]: string } = {
            'react': 'react',
            'vuejs': 'vuedotjs',
            'node-js': 'nodedotjs',
            'tailwindcss': 'tailwindcss',
            'php': 'php',
            'laravel': 'laravel',
            'docker': 'docker',
            'git-alt': 'git'
        };
        const s = slugMap[slug] || slug;
        return `https://cdn.simpleicons.org/${s}`;
    };

    return (
        <section id="skills" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            <div className="container-custom relative z-10">
                {/* Compact Header */}
                <motion.div
                    className="text-center mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full glass border mb-3 md:mb-4" style={{ borderColor: 'var(--border-main)' }}>
                        <Cpu className="w-3 h-3 text-primary-500" />
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Tech Arsenal</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black gradient-text mb-2">Technical Proficiency</h2>
                </motion.div>

                {/* Compact Grid Layout - 2 cols on mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4 mb-16 md:mb-20">
                    {skills.map((category, idx) => {
                        const IconComponent = iconMap[category.icon] || Code;
                        return (
                            <motion.div
                                key={category.category}
                                className="group relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="glass rounded-2xl md:rounded-3xl p-3 md:p-5 border hover:border-primary-500/30 transition-all h-full flex flex-col" style={{ borderColor: 'var(--border-main)' }}>

                                    {/* Category Header */}
                                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 border-b pb-2 md:pb-3 border-white/5">
                                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-primary-600/10 flex items-center justify-center text-primary-500">
                                            <IconComponent size={12} className="md:w-4 md:h-4" />
                                        </div>
                                        <h3 className="text-[10px] md:text-sm font-black uppercase tracking-wide truncate" style={{ color: 'var(--text-main)' }}>
                                            {category.category.split(" ")[0]}
                                        </h3>
                                    </div>

                                    {/* Circular Gauges Grid */}
                                    <div className="grid grid-cols-2 gap-2 md:gap-4 flex-1 content-center">
                                        {category.items.map((skill, skillIdx) => (
                                            <div key={skill.name} className="flex flex-col items-center text-center gap-1 md:gap-2">
                                                {/* Gauge */}
                                                <div className="relative w-9 h-9 md:w-14 md:h-14">
                                                    <svg className="w-full h-full rotate-[-90deg]">
                                                        <circle cx={window.innerWidth < 768 ? "18" : "28"} cy={window.innerWidth < 768 ? "18" : "28"} r={window.innerWidth < 768 ? "15" : "22"} stroke="currentColor" strokeWidth="2.5" fill="transparent" className="text-black/5 dark:text-white/5" />
                                                        <motion.circle
                                                            cx={window.innerWidth < 768 ? "18" : "28"}
                                                            cy={window.innerWidth < 768 ? "18" : "28"}
                                                            r={window.innerWidth < 768 ? "15" : "22"}
                                                            stroke="currentColor"
                                                            strokeWidth="2.5"
                                                            fill="transparent"
                                                            strokeLinecap="round"
                                                            strokeDasharray={2 * Math.PI * (window.innerWidth < 768 ? 15 : 22)}
                                                            initial={{ strokeDashoffset: 2 * Math.PI * (window.innerWidth < 768 ? 15 : 22) }}
                                                            whileInView={{ strokeDashoffset: 2 * Math.PI * (window.innerWidth < 768 ? 15 : 22) - (skill.level / 100) * (2 * Math.PI * (window.innerWidth < 768 ? 15 : 22)) }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1.5, delay: 0.2 + skillIdx * 0.1, ease: "easeOut" }}
                                                            className={
                                                                skill.name.includes('React') ? 'text-blue-500' :
                                                                    skill.name.includes('Vue') ? 'text-green-500' :
                                                                        skill.name.includes('Node') ? 'text-green-600' :
                                                                            skill.name.includes('Python') ? 'text-yellow-500' :
                                                                                'text-primary-500'
                                                            }
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="text-[8px] md:text-[10px] font-black">{skill.level}</span>
                                                    </div>
                                                </div>

                                                {/* Label */}
                                                <span className="text-[8px] md:text-[10px] font-bold leading-tight line-clamp-2 min-h-[2em] md:min-h-[2.5em] flex items-center" style={{ color: 'var(--text-muted)' }}>
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Modern Tech Stack Row with Scanner Animation */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Animated Section Title */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block relative"
                        >
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-rose-500 to-primary-600 animate-gradient-x">
                                Tech Arsenal
                            </h3>
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4 md:gap-8 px-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {techStack.map((tech) => (
                            <motion.div
                                key={tech.name}
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-primary-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative glass px-4 py-3 md:px-6 md:py-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2 hover:border-primary-500/30 transition-all bg-zinc-900/50">
                                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all duration-300">
                                        <img
                                            src={getIconUrl(tech.icon)}
                                            alt={tech.name}
                                            className="w-full h-full object-contain drop-shadow-lg"
                                        />
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text-main)' }}>
                                        {tech.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Red Scanner Light Animation */}
                    <div className="relative h-1 w-full max-w-2xl mx-auto mt-12 bg-zinc-800/50 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-red-500/80 to-transparent blur-sm"
                            animate={{
                                x: ['-100%', '400%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
