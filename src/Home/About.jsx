import React, { useState, useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [inView, setInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div id="about" ref={aboutRef}>
      <div>
        <h1 className="text-center my-5 mt-20 text-3xl font-semibold">
          About Me
        </h1>
      </div>
      <VerticalTimeline key={inView ? "visible" : "hidden"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            I'm currently pursuing a master's degree in Computer Science and Engineering (CSE) at 
            Rajshahi University in the evening. In addition, I am working as a Junior Software 
            Developer at Business Automation Ltd, where I have been gaining valuable experience for 
            the past 10 months. With a total of 1 year and 1 month of professional experience in 
            software development, I am eager to continue expanding my skills and contributing to 
            impactful projects.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            I completed my Bachelor of Science in Computer Science from Varendra University in 
            February 2024. Currently, I am pursuing a Master of Engineering in Computer Science 
            and Engineering at Rajshahi University. In this program, I am focusing on various 
            advanced topics including project management, software architecture, .NET development, 
            database management using Oracle, and network engineering with Cisco technologies.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(16, 204, 82)" }}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            I have gain 1 year and 1 month of professional experience, during which I&apos;ve had 
            the opportunity to learn and work with a variety of new technologies. In my current 
            role as a Junior Software Developer at Business Automation Ltd, I primarily work with 
            Vue.js, Laravel, MySQL, MongoDB, React, and Node.js. This experience has allowed me to 
            enhance my skills in both front-end and back-end development, contributing to a range 
            of dynamic web and software projects.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default About;
