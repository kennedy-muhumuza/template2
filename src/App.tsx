import "./App.css";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Hero from "./pages/hero/Hero";
import Services from "./pages/services/Services";

function App() {
  return (
    <>
      <div className="header-hero-container">
        <Header />
        <Hero />
      </div>
      <About />
      <Services />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
