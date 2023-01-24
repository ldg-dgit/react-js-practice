import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 255, 128), rgb(2, 255, 234));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  margin: 100px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: rgb(24, 117, 232);
  height: 75px;
  width: 75px;

  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>{!clicked ? <Circle layoutId='circle' style={{ borderRadius: "50px" }} /> : null}</Box>
      <Box>{clicked ? <Circle layoutId='circle' style={{ borderRadius: "15px" }} /> : null}</Box>
    </Wrapper>
  );
}
export default App;
