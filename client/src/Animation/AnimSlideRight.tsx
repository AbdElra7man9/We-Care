const AnimSlideRight = {
    initial: {
        x: "-100vw",
        opacity: 0,
    },
    animate: {
        x: "0",
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: {
        x: "-100vw",
        opacity: 0,
        transition: { ease: 'easeInOut' }
    }
};
export default AnimSlideRight