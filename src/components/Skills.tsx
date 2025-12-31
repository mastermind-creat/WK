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
            'python': 'python',
            'php': 'php',
            'aws': 'amazonaws',
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
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border mb-4" style={{ borderColor: 'var(--border-main)' }}>
                        <Cpu className="w-3 h-3 text-primary-500" />
                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Tech Arsenal</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black gradient-text mb-2">Technical Proficiency</h2>
                </motion.div>

                {/* Compact Grid Layout - 2 cols on mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12">
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
                                            <IconComponent size={14} className="md:w-4 md:h-4" />
                                        </div>
                                        <h3 className="text-[10px] md:text-sm font-black uppercase tracking-wide truncate" style={{ color: 'var(--text-main)' }}>
                                            {category.category.split(" ")[0]}
                                        </h3>
                                    </div>

                                    {/* Circular Gauges Grid */}
                                    <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1 content-center">
                                        {category.items.map((skill, skillIdx) => (
                                            <div key={skill.name} className="flex flex-col items-center text-center gap-1.5 md:gap-2">
                                                {/* Gauge */}
                                                <div className="relative w-10 h-10 md:w-14 md:h-14">
                                                    <svg className="w-full h-full rotate-[-90deg]">
                                                        <circle cx={window.innerWidth < 768 ? "20" : "28"} cy={window.innerWidth < 768 ? "20" : "28"} r={window.innerWidth < 768 ? "16" : "22"} stroke="currentColor" strokeWidth="3" fill="transparent" className="text-black/5 dark:text-white/5" />
                                                        <motion.circle
                                                            cx={window.innerWidth < 768 ? "20" : "28"}
                                                            cy={window.innerWidth < 768 ? "20" : "28"}
                                                            r={window.innerWidth < 768 ? "16" : "22"}
                                                            stroke="currentColor"
                                                            strokeWidth="3"
                                                            fill="transparent"
                                                            strokeLinecap="round"
                                                            strokeDasharray={2 * Math.PI * (window.innerWidth < 768 ? 16 : 22)}
                                                            initial={{ strokeDashoffset: 2 * Math.PI * (window.innerWidth < 768 ? 16 : 22) }}
                                                            whileInView={{ strokeDashoffset: 2 * Math.PI * (window.innerWidth < 768 ? 16 : 22) - (skill.level / 100) * (2 * Math.PI * (window.innerWidth < 768 ? 16 : 22)) }}
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
                                                        <span className="text-[9px] md:text-[10px] font-black">{skill.level}</span>
                                                    </div>
                                                </div>

                                                {/* Label */}
                                                <span className="text-[9px] md:text-[10px] font-bold leading-tight line-clamp-2 min-h-[2em] md:min-h-[2.5em] flex items-center" style={{ color: 'var(--text-muted)' }}>
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

                {/* Ultra-Compact Tech Stack Row */}
                <motion.div
                    className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-60 hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                >
                    {techStack.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                            <img
                                src={getIconUrl(tech.icon)}
                                alt={tech.name}
                                className="w-5 h-5"
                            />
                            <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:block" style={{ color: 'var(--text-muted)' }}>{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
