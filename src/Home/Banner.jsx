import { BiSolidDownload } from "react-icons/bi";
import { Bounce } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Banner = () => {
  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1ckiU_7GqbfbWPUTu--o5tDwpqO4T1Tqb/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div>
      <div className="hero min-h-min">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full md:max-w-sm">
            <LazyLoadImage
              src="https://i.ibb.co/5LchZk3/ek.png"
              alt="Profile"
              effect="opacity"
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              MD EFTEKHARUL ALAM
            </h1>
            <h1 className="text-2xl font-semibold mt-2">
              <Typewriter
                options={{
                  strings: ["Junior Software Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </h1>
            <p className="py-6">
            I'm currently pursuing a master's degree in Computer Science and Engineering (CSE) at 
            Rajshahi University in the evening. In addition, I am working as a Junior Software 
            Developer at Business Automation Ltd.
            </p>
            <Bounce>
              <button
                className="btn btn-outline btn-accent"
                onClick={handleDownloadResume}
              >
                <BiSolidDownload /> Resume
              </button>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
