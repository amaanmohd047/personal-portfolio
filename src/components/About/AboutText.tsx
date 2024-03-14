import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../utils/animation";
import useInViewSection from "../../utils/useInViewSection";

const highlight: string = "font-medium text-slate-light";

const AboutText = () => {
  const { ref } = useInViewSection("about", 0.75);

  return (
    <article>
      <SectionHeading> About Me </SectionHeading>

      <motion.div
        className="mt-4 space-y-4 text-slate-regular text-sm sm:text-sm md:text-base lg:text-[20px]"
        // variants={fadeInAnimation}
        // initial="initial"
        // whileInView="animate"
        // viewport={{ once: true }}
      >
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          className="duration-150 ease-linear "
          viewport={{ once: true }}
        >
          Hello! I'm Mohammed Amaan, a budding software developer with a knack
          for crafting engaging user experiences and building robust web
          applications. Although I'm just starting out in the industry, my
          passion for coding and dedication to honing my skills drive me to
          continually learn and grow. My journey into software development began
          during my time while I was pursuing my Bachelor's Degree in Computer
          Application. where I discovered my love for turning ideas into
          tangible, interactive experiences.{" "}
        </motion.p>
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          className="duration-300 ease-linear "
          viewport={{ once: true }}
          ref={ref}
        >
          Throughout my studies, I immersed myself in frontend technologies,
          specializing in frameworks like{" "}
          <span className={highlight}>React</span> and{" "}
          <span className={highlight}>Next.js</span>. In addition to my frontend
          expertise, I have a solid foundation in backend development. I've
          explored technologies like
          <span className={highlight}> Node.js </span>
          and
          <span className={highlight}> Express.js </span>
          and am comfortable architecting server-side solutions to complement my
          frontend work.
        </motion.p>
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          className="duration-300 ease-linear "
          viewport={{ once: true }}
        >
          When I'm not coding, I enjoy playing games, watching anime, or reading
          fantasy fiction. I also love experimenting with new technologies,
          contributing to open-source projects, or delving into the latest
          developments in the tech community.
        </motion.p>
      </motion.div>
    </article>
  );
};

export default AboutText;
