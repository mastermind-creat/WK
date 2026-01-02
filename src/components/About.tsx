import { motion } from 'framer-motion';
import {
    User, Globe, Briefcase, Trophy, Users, Download, Award,
    Quote, Lightbulb, GraduationCap
} from 'lucide-react';
import { profile } from '../data/portfolio';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Dark Mode: Tech GIF */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.10] hidden dark:block pointer-events-none mix-blend-luminosity"
                    style={{ backgroundImage: "url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aWNyYTYyemxwNDc3aTVtNTRqbWdhd3N4bmI5YmEwZTlxcXN1aGI4ciZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/lnfzT3k8g7wpG/giphy.gif')" }}
                />

                {/* Light Mode: Subtle Digital Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:hidden block pointer-events-none"
                    style={{
                        backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
                        backgroundSize: '40px'
                    }}
                />

                {/* Theme-Adaptive Gradient Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, var(--bg-main) 0%, rgba(var(--bg-main-rgb), 0.85) 50%, var(--bg-main) 100%)'
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    className="flex flex-col items-center mb-10 md:mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full glass border border-white/10 mb-4 md:mb-6">
                        <User className="w-3.5 h-3.5 text-primary-500" />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60" style={{ color: 'var(--text-muted)' }}>Profile & History</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black gradient-text tracking-tight">The Full Story</h2>
                </motion.div>

                {/* Bento Grid Layout */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* [TILE A] Identity Core - Large (Spans 6 cols on LG) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-6 lg:col-span-8 glass rounded-3xl md:rounded-[2.5rem] p-5 md:p-8 border hover:border-primary-500/30 transition-colors relative overflow-hidden group"
                        style={{ borderColor: 'var(--border-main)' }}
                    >
                        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-primary-600/10 rounded-full blur-[60px] md:blur-[80px] group-hover:bg-primary-600/20 transition-colors" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-5 md:gap-8 items-start">
                            {/* Avatar */}
                            <div className="relative shrink-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl overflow-hidden border-2 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500" style={{ borderColor: 'var(--border-main)' }}>
                                    <img src={profile.avatar || "/images/profile.jpg"} alt={profile.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-white text-black font-black text-[8px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full uppercase tracking-wider shadow-lg">
                                    Designer
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="space-y-3 md:space-y-4">
                                <div>
                                    <h3 className="text-xl md:text-3xl font-black mb-1 md:mb-2" style={{ color: 'var(--text-main)' }}>{profile.name}</h3>
                                    <p className="text-primary-500 font-bold uppercase tracking-wider text-[10px] md:text-sm">{profile.role}</p>
                                </div>
                                <p className="leading-relaxed text-sm md:text-lg" style={{ color: 'var(--text-muted)' }}>
                                    {profile.about}
                                </p>
                                <motion.a
                                    href={profile.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[10px] md:text-sm font-bold border-b border-primary-500 text-primary-500 pb-0.5 hover:text-primary-400 transition-colors"
                                    whileHover={{ x: 5 }}
                                >
                                    Download Full CV <Download size={12} className="md:w-[14px]" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* [TILE B] Spec Sheet - Compact (Spans 4 cols on LG) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-6 lg:col-span-4 glass rounded-3xl md:rounded-[2.5rem] p-5 md:p-8 border flex flex-col justify-center"
                        style={{ borderColor: 'var(--border-main)' }}
                    >
                        <h4 className="font-black uppercase tracking-widest text-[10px] mb-4 md:mb-6" style={{ color: 'var(--text-muted)' }}>System Specs</h4>
                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-start gap-3 md:gap-4">
                                <Globe className="text-primary-500 shrink-0" size={18} />
                                <div>
                                    <div className="text-[8px] md:text-xs uppercase font-bold" style={{ color: 'var(--text-muted)' }}>Location</div>
                                    <div className="text-xs md:text-base font-medium" style={{ color: 'var(--text-main)' }}>{profile.location}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 md:gap-4">
                                <Users className="text-primary-500 shrink-0" size={18} />
                                <div>
                                    <div className="text-[8px] md:text-xs uppercase font-bold" style={{ color: 'var(--text-muted)' }}>Languages</div>
                                    <div className="text-xs md:text-base font-medium" style={{ color: 'var(--text-main)' }}>{profile.languages.join(" / ")}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 md:gap-4">
                                <Briefcase className="text-primary-500 shrink-0" size={18} />
                                <div>
                                    <div className="text-[8px] md:text-xs uppercase font-bold" style={{ color: 'var(--text-muted)' }}>Availability</div>
                                    <div className="text-[10px] md:text-base text-green-500 font-medium flex items-center gap-1.5 md:gap-2">
                                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                                        Open for Work
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* [TILE C] Command Log - Experience (Vertical Timeline - Spans 4 cols, 2 rows height) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-6 lg:col-span-4 lg:row-span-2 glass rounded-3xl md:rounded-[2.5rem] p-5 md:p-8 border relative overflow-hidden flex flex-col"
                        style={{ borderColor: 'var(--border-main)' }}
                    >
                        <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                            <Briefcase className="text-primary-500" size={18} />
                            <h3 className="text-base md:text-xl font-black" style={{ color: 'var(--text-main)' }}>Experience Log</h3>
                        </div>

                        <div className="relative space-y-6 md:space-y-8 pl-6 md:pl-8 border-l ml-2" style={{ borderColor: 'var(--border-main)' }}>
                            {profile.experience.map((job, idx) => (
                                <div key={idx} className="relative group">
                                    <div className="absolute -left-[29px] md:-left-[37px] top-1 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-500/20 border md:border-2 border-primary-500 group-hover:scale-125 transition-transform" />
                                    <h4 className="font-bold text-[11px] md:text-sm leading-tight group-hover:text-primary-500 transition-colors" style={{ color: 'var(--text-main)' }}>{job.title}</h4>
                                    <div className="text-[9px] md:text-xs font-mono mb-0.5 md:mb-1" style={{ color: 'var(--text-muted)' }}>{job.period}</div>
                                    <div className="text-[9px] md:text-xs uppercase tracking-wider mb-1 md:mb-2 opacity-80" style={{ color: 'var(--text-main)' }}>{job.company}</div>
                                    <p className="text-[10px] md:text-xs leading-relaxed line-clamp-2 md:line-clamp-3 group-hover:line-clamp-none transition-all" style={{ color: 'var(--text-muted)' }}>
                                        {job.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* [TILE D] Knowledge Base - Education (Spans 4 cols) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-3 lg:col-span-4 glass rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 border"
                        style={{ borderColor: 'var(--border-main)' }}
                    >
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <GraduationCap className="text-primary-500" size={18} />
                            <h3 className="text-sm md:text-lg font-black" style={{ color: 'var(--text-main)' }}>Academia</h3>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {profile.education.map((edu, idx) => (
                                <div key={idx} className="rounded-xl md:rounded-2xl p-3 md:p-4 border transition-colors hover:border-primary-500/30" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}>
                                    <div className="font-bold text-[11px] md:text-sm mb-1" style={{ color: 'var(--text-main)' }}>{edu.degree}</div>
                                    <div className="flex justify-between items-end">
                                        <div className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{edu.institution}</div>
                                        <div className="text-[8px] md:text-[10px] bg-primary-500/10 text-primary-500 px-1.5 md:px-2 py-0.5 rounded uppercase font-bold">{edu.period.split(' ')[0]}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* [TILE E] Achievements - Leadership & Awards (Spans 4 cols) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-3 lg:col-span-4 glass rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 border"
                        style={{ borderColor: 'var(--border-main)' }}
                    >
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <Trophy className="text-primary-500" size={18} />
                            <h3 className="text-sm md:text-lg font-black" style={{ color: 'var(--text-main)' }}>Trophies</h3>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            {profile.awards.map((award, idx) => (
                                <div key={idx} className="flex gap-2 md:gap-3 items-center">
                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
                                        <Award size={12} className="md:w-[14px]" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-bold text-[10px] md:text-xs truncate" style={{ color: 'var(--text-main)' }}>{award.title}</div>
                                        <div className="text-[8px] md:text-[10px]" style={{ color: 'var(--text-muted)' }}>{award.year}</div>
                                    </div>
                                </div>
                            ))}
                            {profile.leadership.map((lead, idx) => (
                                <div key={idx} className="flex gap-2 md:gap-3 items-center pt-2 md:pt-2 border-t" style={{ borderColor: 'var(--border-main)' }}>
                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                        <Users size={12} className="md:w-[14px]" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-bold text-[10px] md:text-xs truncate" style={{ color: 'var(--text-main)' }}>{lead.title}</div>
                                        <div className="text-[8px] md:text-[10px]" style={{ color: 'var(--text-muted)' }}>Leadership</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* [TILE F] Insights - Fun Fact (Spans 4 cols) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-6 lg:col-span-4 glass rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 border border-primary-500/30 bg-primary-500/5 relative overflow-hidden"
                    >
                        <Lightbulb className="absolute top-3 md:top-4 right-3 md:right-4 text-primary-500/10 w-16 h-16 md:w-24 md:h-24 rotate-12" />
                        <h4 className="text-primary-500 font-black uppercase tracking-widest text-[10px] mb-3 md:mb-4">Did You Know?</h4>
                        <p className="font-medium text-[11px] md:text-lg italic leading-relaxed relative z-10" style={{ color: 'var(--text-main)' }}>
                            "{profile.funFact}"
                        </p>
                    </motion.div>

                    {/* [TILE G] Social Proof - Testimonials (Spans full width) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-6 lg:col-span-8 glass rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 border flex flex-col justify-center"
                        style={{ borderColor: 'var(--border-main)' }}
                    >
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <Quote className="text-primary-500" size={18} />
                            <h3 className="text-sm md:text-lg font-black" style={{ color: 'var(--text-main)' }}>Client Intel</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            {profile.testimonials.map((testi, idx) => (
                                <div key={idx} className="rounded-xl md:rounded-2xl p-4 md:p-5 border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}>
                                    <p className="text-[10px] md:text-sm italic mb-3 md:mb-4" style={{ color: 'var(--text-muted)' }}>"{testi.content}"</p>
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <img
                                            src={testi.image}
                                            alt={testi.name}
                                            className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover bg-gray-200"
                                            onError={(e) => (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testi.name}`}
                                        />
                                        <div>
                                            <div className="font-bold text-[10px] md:text-xs" style={{ color: 'var(--text-main)' }}>{testi.name}</div>
                                            <div className="text-[8px] md:text-[10px] text-primary-500">{testi.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
