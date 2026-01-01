import { motion } from 'framer-motion';
import { Github, ChartLine, Calendar, GitCommit, Sparkles, TrendingUp } from 'lucide-react';

const ActivityFeeds = () => {
    const stats = [
        {
            icon: GitCommit,
            label: "Total Commits",
            value: "2,450+",
            trend: "+12% this week",
        },
        {
            icon: ChartLine,
            label: "Uptime",
            value: "99.9%",
            trend: "System Operational",
        },
        {
            icon: Calendar,
            label: "Active Days",
            value: "342",
            trend: "Year to Date",
        },
        {
            icon: Sparkles,
            label: "Current Streak",
            value: "14 Days",
            trend: "Consistency Impact",
        },
    ];

    return (
        <section id="feeds" className="section-padding relative overflow-hidden text-center" style={{ backgroundColor: 'var(--bg-main)' }}>
            <div className="container-custom relative z-10">
                {/* Header Section */}
                <motion.div
                    className="mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border mb-4 md:mb-6"
                        style={{ borderColor: 'var(--border-main)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                            System Status
                        </span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 gradient-text">
                        Engineering Pulse
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-lg" style={{ color: 'var(--text-muted)' }}>
                        Real-time data streams from the main terminal
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* GitHub Contributions */}
                    <motion.div
                        className="group relative depth-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="glass rounded-2xl md:rounded-[3rem] p-5 md:p-10 border h-full transition-all duration-500 hover:border-primary-500/50 hover:shadow-[0_0_50px_rgba(37,99,235,0.1)]" style={{ borderColor: 'var(--border-main)' }}>
                            <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-10">
                                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-primary-600/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                    <Github size={16} className="md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-[10px] md:text-xl font-black uppercase tracking-wider md:tracking-widest" style={{ color: 'var(--text-main)' }}>Commit Graph</h3>
                            </div>

                            <div className="relative group/chart overflow-hidden rounded-xl">
                                <motion.img
                                    src="https://ghchart.rshah.org/e11d48/mastermind-creat"
                                    alt="GitHub Contributions"
                                    loading="lazy"
                                    className="w-full h-auto grayscale-[0.8] group-hover/chart:grayscale-0 transition-all duration-700 brightness-110 dark:brightness-150"
                                    whileHover={{ scale: 1.05 }}
                                />
                                <div className="absolute inset-0 bg-primary-600/5 opacity-0 group-hover/chart:opacity-100 transition-opacity" />
                            </div>

                            <div className="mt-4 md:mt-8 text-[8px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest flex items-center justify-center gap-2" style={{ color: 'var(--text-muted)' }}>
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                                Terminal Synchronized
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Section with group hover focus */}
                    <div className="grid grid-cols-2 gap-3 md:gap-6 group/stats">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                className="glass rounded-2xl md:rounded-[2.5rem] p-4 md:p-8 flex flex-col items-center justify-center border transition-all duration-500 group-hover/stats:opacity-50 hover:!opacity-100 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:border-primary-500/50"
                                style={{ borderColor: 'var(--border-main)' }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                            >
                                <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-primary-600/10 flex items-center justify-center mb-3 md:mb-6 text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                    <stat.icon size={20} className="md:w-8 md:h-8" />
                                </div>
                                <div className="text-xl md:text-4xl font-black mb-1 md:mb-2" style={{ color: 'var(--text-main)' }}>{stat.value}</div>
                                <div className="text-[9px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-4 text-center opacity-70" style={{ color: 'var(--text-main)' }}>{stat.label}</div>
                                <div className="text-[8px] md:text-[10px] font-black text-primary-500 bg-primary-500/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 ring-1 ring-primary-500/20">
                                    <TrendingUp size={12} className="shrink-0" />
                                    {stat.trend}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActivityFeeds;
