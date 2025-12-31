import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';

// Lazy load non-critical sections to improve TTI (Time to Interactive)
const Skills = lazy(() => import('../components/Skills'));
const Services = lazy(() => import('../components/Services'));
const HowIWork = lazy(() => import('../components/HowIWork'));
const Projects = lazy(() => import('../components/Projects'));
const Gallery = lazy(() => import('../components/Gallery'));
const Pricing = lazy(() => import('../components/Pricing'));
const Blog = lazy(() => import('../components/Blog'));
const ActivityFeeds = lazy(() => import('../components/ActivityFeeds'));
const Contact = lazy(() => import('../components/Contact'));

const Home = () => {
    return (
        <>
            <Hero />
            <About />

            <Suspense fallback={<div className="h-20" />}>
                <Skills />
                <Services />
                <HowIWork />
                <Projects />
                <Gallery />
                <Pricing />
                <Blog />
                <ActivityFeeds />
                <Contact />
            </Suspense>
        </>
    );
};

export default Home;
