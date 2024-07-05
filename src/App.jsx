import "./App.css";

import HeadNotify from "./pages/HeadNotify";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Guide from "./pages/Guide";
import Performance from "./pages/Performamce";
import WarningFooter from "./components/WarningFooter";

function App() {
  return (
    <>
      <HeadNotify />
      <Header />

      <Routes>
        <Route path="/about" exact Component={About}></Route>
        <Route path="/guide" exact Component={Guide}></Route>
        <Route path="/performance" exact Component={Performance}></Route>
      </Routes>
      <WarningFooter/>
      <Footer />
    </>
  );
}

export default App;
