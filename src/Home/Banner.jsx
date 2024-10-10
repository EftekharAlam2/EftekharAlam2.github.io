import { BiSolidDownload } from "react-icons/bi";
import { Flip } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Banner = () => {
  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1fcNSwgYyC-g2NnO2ZUH5YdLofqGAX9Bj/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div>
      <div className="hero min-h-min">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <LazyLoadImage
            src="https://i.ibb.co/5LchZk3/ek.png"
            alt="Profile"
            effect="opacity"
            className="max-w-sm rounded-lg"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              MD EFTEKHARUL ALAM
            </h1>
            <h1 className="text-2xl font-semibold mt-2">
              <Typewriter
                options={{
                  strings: ["Junior Front-End Web Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </h1>
            <p className="py-6">
              I&apos;m a fourth-year computer science student at Varendra
              University, deeply passionate about software and web development.
              Currently, I&apos;m actively seeking an internship opportunity as
              a web developer to apply and further enhance my skills.
            </p>
            <Flip>
              <button
                className="btn btn-outline btn-accent"
                onClick={handleDownloadResume}
              >
                <BiSolidDownload /> Resume
              </button>
            </Flip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
