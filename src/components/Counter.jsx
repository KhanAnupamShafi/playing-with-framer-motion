import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useEffect } from 'react';

const Counter = () => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });

    return animation.stop;
  }, []);

  return <motion.div className="text-3xl">{roundedValue}</motion.div>;
};

export default Counter;
