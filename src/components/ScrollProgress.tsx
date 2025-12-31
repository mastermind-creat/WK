import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 40,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1.5 bg-primary-600 z-[100] origin-left shadow-[0_0_15px_rgba(225,29,72,0.5)]"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;
