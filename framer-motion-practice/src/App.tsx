import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 255, 128), rgb(2, 255, 234));
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (isBack: boolean) => {
    return {
      x: isBack ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => {
    return {
      x: isBack ? 500 : -500,
      opacity: 0,
      scale: 0,
    };
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          key={visible}
          variants={box}
          initial='entry'
          animate='center'
          exit='exit'
          transition={{ duration: "1" }}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease} style={{ position: "absolute", bottom: "100px" }}>
        prev
      </button>
      <button onClick={nextPlease} style={{ position: "absolute", bottom: "120px" }}>
        next
      </button>
    </Wrapper>
  );
}
export default App;
