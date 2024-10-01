import "./App.css";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Hero from "./pages/hero/Hero";
import Location from "./pages/location/Location";
import Services from "./pages/services/Services";
import Testimonials from "./pages/testimonials/Testimonials";

function App() {
  return (
    <div className="app">
      <div className="header-hero-container">
        <Header />
        <Hero />
      </div>
      <main className="main-content">
        <Location />
        <About />
        <Services />
        <Testimonials />
        <Blog />
        <Footer />
      </main>
    </div>
  );
}

export default App;
