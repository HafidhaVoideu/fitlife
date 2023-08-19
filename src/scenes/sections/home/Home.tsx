import Button from "../../../components/button/Button";

import hero_banner from "../../../assets/hero-banner.png";
import circle_one from "../../../assets/hero-circle-one.png";
import circle_two from "../../../assets/hero-circle-two.png";
import Background from "../../../components/bg/Background";

import { AiFillHeart } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";

import { motion } from "framer-motion";
const Home = () => {
  return (
    <Background id="home">
      <div className="  flex flex-col  items-center     lg:items-end  justify-center  gap-20  lg:flex-row section mt-0 min-h-screen  ">
        {/* Description */}

        <div className="flex flex-col items-center lg:items-start justify-center gap-6  self-center mt-14 px-1 text-white  text-center lg:text-left  flex-1 ">
          <div className="flex gap-2 items-center rounded-md bg-slate-700 p-1  xs:text-sm md:text-lg uppercase  font-bold   ">
            <span className=" bg-coquelicot p-1 rounded-md  "> the best</span>
            <span className=" p-1  ">Fitness Club</span>
          </div>
          {/* info */}
          <h1 className="text-3xl font-black capitalize  max-w-xl xm:text-xl md:text-5xl  xl:text-6xl leading-10 ">
            {" "}
            work hard to get a better life
          </h1>
          <p className="text-silvermetallic text-base md:text-lg mb-6 max-w-xl ">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae nobis vel non dolores quasi voluptas nemo quod nisi, odio
            in iste consequatur ducimus quae atque? Accusamus illum ut eligendi!
          </p>
          <Button text="Get Started" style="white" />
        </div>

        {/* Image */}

        <div className="relative flex-1 ">
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: [20, 40, 80, 120, 190, 250, 360] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",

              duration: 8,
            }}
            className="absolute z-0 inset-0 p-1"
            src={circle_one}
            alt="circle"
          ></motion.img>

          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: [360, 230, 180, 90, 40, 50, 20] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",

              duration: 8,
            }}
            className="absolute z-0 inset-0 p-1 "
            src={circle_two}
            alt="circle"
          ></motion.img>

          <img
            className=" relative z-10 object-cover "
            src={hero_banner}
            alt="banner"
          />

          {/* Calories */}

          <motion.article
            initial={{ x: 3, y: 2 }}
            animate={{ x: 44, y: 27 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
              duration: 3,
            }}
            className="flex gap-3  items-center justify-around  absolute z-20 bottom-[15%]   left-0 bg-slate-700 p-2 sm:p-4  w-fit rounded-lg "
          >
            <button className="text-2xl   sm:text-6xl   text-coquelicot">
              <IoIosStats />
            </button>
            <div className="text-sm  sm:text-xl p-2">
              <p className=" text-sonicsilver"> Calories Burnt</p>
              <p className="  mt-1  md:mt-2 text-white "> 100 bpm</p>
            </div>
          </motion.article>

          {/* heart */}

          <motion.article
            initial={{ x: 7, y: 7 }}
            animate={{ x: 17, y: 15 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
              duration: 3,
            }}
            className="flex gap-1  flex-col items-center justify-around  absolute z-20 top-[5%] right-0 bg-gray-800 p-2 sm:p-4   rounded-lg "
          >
            <button className="text-xl   sm:text-5xl  text-coquelicot">
              <AiFillHeart />
            </button>
            <div className="text-sm  sm:text-xl p-2">
              <p className=" text-sonicsilver"> Heart Rate</p>
              <p className=" mt-1  md:mt-2 text-white "> 100 bpm</p>
            </div>
          </motion.article>
        </div>
      </div>
    </Background>
  );
};

export default Home;
