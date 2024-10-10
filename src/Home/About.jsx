import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <div id="about">
      <div>
        <h1 className="text-center my-5 mt-20 text-3xl font-semibold">
          About Me
        </h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            I am deeply committed to self-improvement and continuous learning,
            especially since the beginning of this year when I started my
            journey to become a web developer. Every day, I dedicate myself to
            refining my skills and expanding my knowledge in technologies such
            as HTML, CSS, Bootstrap, Tailwind, Node.js, React.js, JavaScript,
            MongoDB, and Firebase.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Through my ongoing journey of self-directed learning, I have worked
            diligently to establish a solid foundation in both front-end and
            back-end development. Additionally, my involvement in volunteer
            activities has greatly enhanced my communication, teamwork, and
            interpersonal skills.
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(16, 204, 82)" }}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            I am proud to have achieved notable accomplishments, including
            participation in the Hult Prize Ideal Contest, the ICPC Programming
            Contest, and winning the Tech Debate Contest as part of a successful
            team. These experiences have not only allowed me to apply my
            technical knowledge but have also strengthened my critical thinking,
            problem-solving, and ability to perform under pressure.
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default About;
