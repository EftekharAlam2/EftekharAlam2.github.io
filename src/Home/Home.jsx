import Particles from "react-tsparticles";
import About from "./About";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Project from "./Project";
import SkillsSection from "./SkillsSection";
import { useState, useEffect, useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handlePageLoad);

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}

      <div className={loading ? "pointer-events-none" : ""}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 400,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 200,
                  duration: 0.9,
                },
              },
            },
            particles: {
              color: {
                value: "#0d47a1",
              },
              links: {
                color: "#0d47a1",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 12,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <NavBar></NavBar>
        <Banner></Banner>
        <About></About>
        <SkillsSection></SkillsSection>
        <Project></Project>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>

      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-700 transition duration-300"
        >
          <FaArrowUp size={24} />
        </div>
      )}
    </div>
  );
};

export default Home;
