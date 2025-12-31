import { profile } from '../data/portfolio';
import { Heart, Github, Twitter, Linkedin, Instagram, MessageCircle, Mail, Phone, MapPin, Send, Youtube, Facebook, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-12 md:pt-24 pb-8 md:pb-12 border-t" style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--border-main)' }}>
            <div className="container-custom">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-16 mb-12 md:mb-20">
                    {/* Brand Column - Full width on mobile/tablet */}
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-xl shadow-primary-600/20">
                                W
                            </div>
                            <span className="text-xl md:text-2xl font-black uppercase tracking-tighter" style={{ color: 'var(--text-main)' }}>Wambia.<span className="text-primary-600">K</span></span>
                        </div>
                        <p className="mb-6 md:mb-10 max-w-sm leading-relaxed font-medium text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>
                            Architecting digital solutions that blend high-performance engineering with visually stunning aesthetics. Delivering results since 2022.
                        </p>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {[
                                { icon: Github, href: "https://github.com/mastermind-creat" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/mastermind-5799bb398" },
                                { icon: Twitter, href: "https://x.com/MastermindCreat" },
                                { icon: Instagram, href: "https://www.instagram.com/mastermindcreat/" },
                                { icon: Youtube, href: "https://www.youtube.com/@kennyleyy3918" },
                                { icon: Facebook, href: "https://web.facebook.com/profile.php?id=100073953339674" },
                                { icon: Globe, href: "https://lates-portfolio-v1.vercel.app/" },
                                { icon: MessageCircle, href: `https://wa.me/254743394373` }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-9 h-9 md:w-10 md:h-10 border rounded-lg md:rounded-xl flex items-center justify-center transition-all hover:text-primary-500 hover:scale-110 shadow-lg"
                                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)', color: 'var(--text-muted)' }}
                                >
                                    <social.icon size={16} className="md:w-[18px] md:h-[18px]" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-8 border-l-2 border-primary-600 pl-3 md:pl-4" style={{ color: 'var(--text-main)' }}>Registry</h4>
                        <ul className="space-y-3 md:space-y-5">
                            {[
                                { name: 'Gallery', href: '/gallery' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Services', href: '/#services' },
                                { name: 'About', href: '/#about' },
                                { name: 'Contact', href: '/#contact' }
                            ].map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-xs md:text-sm font-bold transition-colors uppercase tracking-wider md:tracking-widest hover:text-primary-500" style={{ color: 'var(--text-muted)' }}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Specialties */}
                    <div>
                        <h4 className="text-xs md:text-sm font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-8 border-l-2 border-primary-600 pl-3 md:pl-4" style={{ color: 'var(--text-main)' }}>Core Tech</h4>
                        <ul className="space-y-3 md:space-y-5">
                            {['Logo Design', 'Brand Identity', 'Enterprise Web', 'React Systems', 'API Architecture'].map(item => (
                                <li key={item} className="text-xs md:text-sm font-bold uppercase tracking-wider md:tracking-widest group cursor-default" style={{ color: 'var(--text-muted)' }}>
                                    <span className="group-hover:text-primary-500 transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Terminal Address - Full width on mobile/tablet */}
                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 border-l-2 border-primary-600 pl-4" style={{ color: 'var(--text-main)' }}>Comm Lines</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <MapPin size={20} className="text-primary-500 shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold uppercase tracking-widest leading-relaxed" style={{ color: 'var(--text-muted)' }}>Nyanza HQ, <br />Kisumu, Kenya</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Mail size={20} className="text-primary-500 shrink-0 group-hover:scale-110 transition-transform" />
                                <a href={`mailto:${profile.email}`} className="text-xs font-bold uppercase tracking-widest hover:text-primary-500 transition-colors truncate" style={{ color: 'var(--text-muted)' }}>Email Relay</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Phone size={20} className="text-primary-500 shrink-0 group-hover:scale-110 transition-transform" />
                                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-xs font-bold uppercase tracking-widest hover:text-primary-500 transition-colors" style={{ color: 'var(--text-muted)' }}>Voice Link</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sub-Footer Transmission */}
                <div className="border-t pt-8 md:pt-16 mt-8 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-12 items-center" style={{ borderColor: 'var(--border-main)' }}>
                    <div>
                        <h4 className="text-lg md:text-2xl font-black mb-2 italic" style={{ color: 'var(--text-main)' }}>Stay Integrated.</h4>
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest" style={{ color: 'var(--text-muted)' }}>Receive technical insights and project updates directly.</p>
                    </div>
                    <form className="flex gap-2 md:gap-4 p-1.5 md:p-2 rounded-xl md:rounded-[2rem] border" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-main)' }}>
                        <input
                            type="email"
                            placeholder="OPERATOR@RELAY.NET"
                            className="flex-1 bg-transparent px-3 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl focus:outline-none text-[10px] md:text-xs font-black placeholder:text-zinc-500 tracking-wider md:tracking-widest uppercase"
                            style={{ color: 'var(--text-main)' }}
                        />
                        <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-lg transition-all active:scale-95 group">
                            <Send size={16} className="md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>

                {/* System Authentication */}
                <div className="border-t mt-8 md:mt-16 pt-6 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-center md:text-left" style={{ borderColor: 'var(--border-main)', color: 'var(--text-muted)' }}>
                    <p>© {new Date().getFullYear()} Wambia Kennedy // SECURE ACCESS GRANTED</p>
                    <div className="flex items-center gap-2 md:gap-3">
                        DESIGNED WITH <Heart size={12} className="md:w-[14px] md:h-[14px] text-primary-600 animate-pulse fill-primary-600" /> BY
                        <a href="https://techsafi.com" className="hover:text-primary-500 transition-colors" style={{ color: 'var(--text-main)' }}>TechSafi</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
