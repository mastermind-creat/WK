import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/portfolio';

const Blog = () => {
    return (
        <section id="blog" className="section-padding relative border-t" style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-main)' }}>
            <div className="container-custom">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-4 gradient-text uppercase tracking-tighter italic">Technical Archives</h2>
                    <p className="max-w-2xl mx-auto font-medium" style={{ color: 'var(--text-muted)' }}>
                        Deconstructing complexity through high-level technical documentation and strategic insights.
                    </p>
                    <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full mt-6 shadow-lg shadow-primary-600/20" />
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={post.title}
                            className="rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer hover:border-primary-600/30 transition-all duration-500 border"
                            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="relative h-40 md:h-64 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0"
                                />
                                <div className="absolute top-3 left-3 md:top-6 md:left-6 bg-primary-600 text-white text-[7px] md:text-[9px] font-black px-2 md:px-4 py-1 md:py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl">
                                    {post.category}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-4 md:p-10">
                                <div className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest mb-6 opacity-60" style={{ color: 'var(--text-main)' }}>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-primary-600" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User size={14} className="text-primary-600" />
                                        AUTH_ROOT
                                    </div>
                                </div>
                                <h3 className="text-sm md:text-2xl font-black mb-3 md:mb-6 group-hover:text-primary-500 transition-colors leading-tight tracking-tighter uppercase italic line-clamp-2" style={{ color: 'var(--text-main)' }}>
                                    {post.title}
                                </h3>
                                <p className="text-[10px] md:text-sm mb-4 md:mb-10 line-clamp-2 leading-relaxed font-medium" style={{ color: 'var(--text-muted)' }}>
                                    {post.excerpt}
                                </p>
                                <div className="hidden md:flex items-center text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-primary-500 group-hover:gap-4 transition-all border-t pt-8 opacity-40 group-hover:opacity-100" style={{ color: 'var(--text-main)', borderColor: 'var(--border-main)' }}>
                                    Extract Intel <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.button
                        className="btn-outline group px-12"
                        whileHover={{ scale: 1.05 }}
                    >
                        Access Full Library <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
