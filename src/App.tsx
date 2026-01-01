import { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollProgress from './components/ScrollProgress';
import AIChatbot from './components/AIChatbot';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';

// Lazy load secondary pages
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary-600 selection:text-white" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
      <Helmet>
        <title>WAMBIA KENNEDY // ELITE ENGINEER & DESIGNER</title>
        <meta name="description" content="Portfolio of Wambia Kennedy, a high-performance Web Developer and Graphic Designer. Specialized in industrial-grade digital solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/images/logo/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: 'var(--bg-main)' }}
            exit={{
              scale: 3,
              opacity: 0,
              filter: "blur(40px)"
            }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(var(--primary-main) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
              }} />
            </div>

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary-500 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  x: [null, Math.random() * window.innerWidth],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}

            {/* Neural Network Nodes */}
            <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 200;
                const cx = window.innerWidth / 2 + Math.cos(angle) * radius;
                const cy = window.innerHeight / 2 + Math.sin(angle) * radius;

                return (
                  <g key={i}>
                    {/* Connecting Lines to Center */}
                    <motion.line
                      x1={window.innerWidth / 2}
                      y1={window.innerHeight / 2}
                      x2={cx}
                      y2={cy}
                      stroke="var(--primary-main)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                    />
                    {/* Outer Nodes */}
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r="6"
                      fill="var(--primary-main)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    />
                  </g>
                );
              })}

              {/* Center Pulse Node */}
              <motion.circle
                cx={window.innerWidth / 2}
                cy={window.innerHeight / 2}
                r="12"
                fill="var(--primary-main)"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>

            {/* Central Logo with Circular Progress */}
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative"
              >
                {/* Circular Progress Ring */}
                <svg className="absolute -inset-8 w-48 h-48" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="var(--border-main)"
                    strokeWidth="0.5"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="var(--primary-main)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2.3, ease: "easeInOut" }}
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                  />
                </svg>

                {/* Logo Container */}
                <div className="w-32 h-32 border-2 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden backdrop-blur-sm"
                  style={{ borderColor: 'var(--primary-main)', backgroundColor: 'var(--bg-surface)' }}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.span
                    className="text-5xl font-black tracking-tighter italic z-10"
                    style={{ color: 'var(--text-main)' }}
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(225,29,72,0)',
                        '0 0 20px rgba(225,29,72,0.8)',
                        '0 0 20px rgba(225,29,72,0)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    W<span className="text-primary-600">K</span>
                  </motion.span>
                </div>
              </motion.div>
            </div>

            {/* Glitch Text Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 text-center z-10 relative"
            >
              <motion.h2
                className="text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-6 relative"
                style={{ color: 'var(--text-main)' }}
                animate={{
                  opacity: [1, 0.8, 1],
                }}
                transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
              >
                <span className="relative">
                  NEURAL_NETWORK
                  <motion.span
                    className="absolute inset-0 text-primary-600"
                    animate={{
                      x: [-2, 2, -2],
                      opacity: [0, 0.7, 0]
                    }}
                    transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
                  >
                    NEURAL_NETWORK
                  </motion.span>
                </span>
              </motion.h2>

              {/* Status Indicators */}
              <div className="space-y-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                {['CORE_SYSTEMS', 'UI_FRAMEWORK', 'DATA_STREAM'].map((text, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: [0, 1, 0.6], x: 0 }}
                    transition={{ delay: 0.6 + i * 0.2, duration: 0.5 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-primary-500"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                    />
                    <span>{text}</span>
                    <motion.span
                      className="text-primary-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + i * 0.2 }}
                    >
                      [OK]
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Progress Percentage */}
              <motion.div
                className="mt-8 text-2xl font-black text-primary-600 tabular-nums"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.3 }}
                >
                  {Array.from({ length: 101 }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: i === 100 ? 1 : 0 }}
                      transition={{ delay: (i / 100) * 2.3, duration: 0.05 }}
                    >
                      {i}%
                    </motion.span>
                  ))}
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-primary-600/5 rounded-full blur-[200px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-primary-900/5 rounded-full blur-[150px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-12 h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <FloatingActions />
      <ScrollProgress />
      <AIChatbot />
      <Navbar />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}

export default App;
