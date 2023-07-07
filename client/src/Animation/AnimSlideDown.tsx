const AnimSlideDown = {
    initial: {
        y: "-100vh",
        scale: 0,
        opacity: 0,
    },
    animate: {
        y: "0",
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3, type: 'Spring' }
    },
    exit: {
        y: "-100vh",
        opacity: 0,
        transition: { ease: 'easeInOut' }
    }
};
export default AnimSlideDown