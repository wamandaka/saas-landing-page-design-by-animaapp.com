/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Product from "./components/Product";
import Feature from "./components/Feature";
import UserFeedback from "./components/UserFeedback";
import ClickToAction from "./components/ClickToAction";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Partner />
      <Product />
      <Feature />
      <UserFeedback />
      <ClickToAction />
      <Footer />
    </>
  );
}

export default App;
