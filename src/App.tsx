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
              clipPath: "circle(0% at 50% 50%)",
              opacity: 0
            }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] animate-pulse" />
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              className="relative z-10"
            >
              <div className="w-32 h-32 border rounded-[2.5rem] flex items-center justify-center relative overflow-hidden" style={{ borderColor: 'var(--border-main)' }}>
                <div className="absolute inset-0 bg-primary-600/20 animate-[ping_2s_infinite]" />
                <span className="text-4xl font-black tracking-tighter italic z-10" style={{ color: 'var(--text-main)' }}>W<span className="text-primary-600">K</span></span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center z-10"
            >
              <h2 className="text-sm font-black uppercase tracking-[1em] mb-4" style={{ color: 'var(--text-main)' }}>Initialising Systems</h2>
              <div className="w-64 h-[2px] rounded-full overflow-hidden relative" style={{ backgroundColor: 'var(--border-main)' }}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-600 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="h-full bg-primary-600 shadow-[0_0_20px_rgba(225,29,72,0.8)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.3, ease: "easeInOut" }}
                />
              </div>
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
