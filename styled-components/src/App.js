import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: green;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    color: red;
  }
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${(props) => props.bgColor};
  display: flex;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: yellow;
`;

const Input = styled.input.attrs({ required: true, maxLength: 20 })`
  background-color: blue;
`;

const ani = keyframes`
from{
  color: tomato
} to {
color:teal
}

`;

const AniBtn = styled.button`
  animation: ${ani} 0.5s infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor='tomato' />
      <Circle bgColor='teal' />
      <Btn>Log in</Btn>
      <Btn as='a'>Link</Btn>
      <Input />
      <Input />
      <Input />
      <AniBtn>Hihi</AniBtn>
      <Title>Hello, World</Title>
      <h1>Hi hi</h1>
    </Wrapper>
  );
}

export default App;
