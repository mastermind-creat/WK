import { motion } from 'framer-motion';
import { Github, ChartLine, Calendar, GitCommit, Sparkles } from 'lucide-react';

const ActivityFeeds = () => {
    return (
        <section id="feeds" className="section-padding relative overflow-hidden text-center" style={{ backgroundColor: 'var(--bg-main)' }}>
            <div className="container-custom relative z-10">
                {/* Header Section */}
                <motion.div
                    className="mb-20"
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
                            System Status
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 gradient-text">
                        Engineering Pulse
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-muted)' }}>
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
                        <div className="glass rounded-2xl md:rounded-[3rem] p-5 md:p-10 overflow-hidden border h-full" style={{ borderColor: 'var(--border-main)' }}>
                            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary-600/10 flex items-center justify-center text-primary-500">
                                    <Github size={20} className="md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-sm md:text-xl font-black uppercase tracking-wider md:tracking-widest" style={{ color: 'var(--text-main)' }}>Commit Graph</h3>
                            </div>

                            <div className="relative group/chart">
                                <img
                                    src="https://ghchart.rshah.org/e11d48/mastermind-creat"
                                    alt="GitHub Contributions"
                                    loading="lazy"
                                    className="w-full h-auto rounded-xl grayscale-[0.8] group-hover/chart:grayscale-0 transition-all duration-700 brightness-110 dark:brightness-150"
                                />
                                <div className="absolute inset-0 bg-primary-600/5 opacity-0 group-hover/chart:opacity-100 transition-opacity" />
                            </div>

                            <p className="mt-4 md:mt-8 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest flex items-center justify-center gap-2" style={{ color: 'var(--text-muted)' }}>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Synchronized with GitHub API
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats - 2 cols on mobile */}
                    <motion.div
                        className="grid grid-cols-2 gap-3 md:gap-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <ActivityCard
                            icon={GitCommit}
                            label="Total Commits"
                            value="2,450+"
                            trend="+12% this week"
                        />
                        <ActivityCard
                            icon={ChartLine}
                            label="Uptime"
                            value="99.9%"
                            trend="System Operational"
                        />
                        <ActivityCard
                            icon={Calendar}
                            label="Active Days"
                            value="342"
                            trend="Year to Date"
                        />
                        <ActivityCard
                            icon={Sparkles}
                            label="Current Streak"
                            value="14 Days"
                            trend="Consistency Impact"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ActivityCard = ({ icon: Icon, label, value, trend }: any) => (
    <div className="glass rounded-xl md:rounded-[2.5rem] p-4 md:p-8 flex flex-col items-center justify-center border hover:border-primary-500/30 transition-colors" style={{ borderColor: 'var(--border-main)' }}>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-600/5 flex items-center justify-center mb-3 md:mb-4 text-primary-500">
            <Icon size={18} className="md:w-6 md:h-6" />
        </div>
        <div className="text-xl md:text-3xl font-black mb-1" style={{ color: 'var(--text-main)' }}>{value}</div>
        <div className="text-[9px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest mb-2 text-center" style={{ color: 'var(--text-muted)' }}>{label}</div>
        <div className="text-[8px] md:text-[10px] font-bold text-primary-500 bg-primary-500/10 px-2 md:px-3 py-0.5 md:py-1 rounded-full text-center">
            {trend}
        </div>
    </div>
);

export default ActivityFeeds;
