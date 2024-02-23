import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeatType: 'reverse',
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeatType: 'reverse',
        repeat: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle(
    'animationOne',
    'animationTwo'
  );

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}></motion.div>
      <div
        className="bg-red-500 px-2 py-3 rounded-full m-auto text-center cursor-pointer w-40"
        onClick={() => cycleAnimation()}>
        Change Loader
      </div>
    </>
  );
};

export default Loader;
