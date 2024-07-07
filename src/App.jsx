import "./App.css";

import HeadNotify from "./pages/HeadNotify";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router-dom";

import WarningFooter from "./components/WarningFooter";

import About from "./pages/About";
import Indicator from "./pages/Indicator";
import Performance from "./pages/Performamce";
import Guide from "./pages/Guide";
import Program from "./pages/Program";
import { useLocation } from "react-router-dom";
import SubscribeButton from "./components/SubscribeButton";

function App() {
  const link = useLocation();

  return (
    <div className="relative">
      <HeadNotify />
      <Header />

      <Routes>
        <Route path="/about" exact Component={About}></Route>
        <Route path="/guide" exact Component={Guide}></Route>
        <Route path="/performance" exact Component={Performance}></Route>
        <Route path="/indicator" exact Component={Indicator}></Route>
        <Route path="/program" exact Component={Program}></Route>
      </Routes>
      {link.pathname != "/program" && <WarningFooter />}
      <Footer />
      <SubscribeButton />
    </div>
  );
}

export default App;
