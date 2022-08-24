import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
