import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 255, 128), rgb(2, 255, 234));
`;

const Box = styled(motion.div)`
  width: 175px;
  height: 175px;
  display: grid;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-500, 500], [-360, 360]);
  const gradient = useTransform(
    x,
    [-500, 0, 500],
    [
      "linear-gradient(135deg, rgb(255, 48, 48), rgb(255, 182, 93))",
      "linear-gradient(135deg, rgb(0, 255, 128), rgb(2, 255, 234))",
      "linear-gradient(135deg, rgb(69, 45, 255), rgb(206, 28, 255))",
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag='x' dragSnapToOrigin />
    </Wrapper>
  );
}
export default App;
