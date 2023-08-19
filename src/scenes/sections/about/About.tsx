import SectionHeader from "../../../components/section-header/SectionHeader";

import about_banner from "../../../assets/about-banner.png";
import circle1 from "../../../assets/about-circle-one.png";
import circle2 from "../../../assets/about-circle-two.png";
import fitness from "../../../assets/fitness.png";

import { motion } from "framer-motion";

import Button from "../../../components/button/Button";

import coach from "../../../assets/about-coach.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-12 items-center justify-center lg:flex-row section   "
    >
      {/* image */}

      <div className=" relative flex-1   ">
        <img
          className=" relative z-30  object-cover "
          src={about_banner}
          alt="woman-gym"
        />

        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: [20, 40, 80, 120, 190, 250, 360] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",

            duration: 8,
          }}
          src={circle1}
          alt="big-circle"
          className="absolute z-0 inset-0 p-1"
        ></motion.img>

        <div className="absolute top-1/2 left-0 bg-coquelicot w-full h-1/2 z-10 rounded-md "></div>

        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: [360, 230, 180, 90, 40, 50, 20] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",

            duration: 8,
          }}
          src={circle2}
          alt="small-circle"
          className="absolute z-0 inset-0 p-1"
        ></motion.img>

        <motion.img
          initial={{ y: 0 }}
          animate={{ y: 60 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            type: "spring",
            stiffness: 500,
          }}
          src={fitness}
          alt="fitness"
          className=" absolute  bottom-5   left-0 z-20"
        ></motion.img>

        <img />
      </div>

      {/*Description*/}

      <div className="flex flex-col items-center  justify-center gap-8 flex-1 text-sonicsilver leading-normal mt-8  text-md  text-center md:text-left ">
        <SectionHeader title="Welcome to our fitness Gym" btnText="about us" />

        <p className="max-w-2xl">
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
          assumenda alias aut ex placeat quod odio soluta nobis odit laborum! Et
          laudantium officia repellendus necessitatibus? Reiciendis eius numquam
          maiores consectetur!
        </p>

        <p className="max-w-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          placeat itaque, officiis, illo neque porro
        </p>

        {/* Explore more */}

        <div className="flex gap-10 flex-col justify-between items-center w-full sm:flex-row  ">
          <div className="flex justify-between items-center  gap-8 self-stretch ">
            <img src={coach} alt="coach" className="rounded-full" />

            <div>
              <h2 className="text-blackfogra_2 font-bold text-lg md:text-xl ">
                Denis Robinson{" "}
              </h2>
              <span>Our Coach</span>
            </div>
          </div>

          <Button style="black" text="Explore more" />
        </div>
      </div>
    </section>
  );
};

export default About;
