import { useRef, useState } from "react";
import Background from "../../../components/bg/Background";
import ClassItem from "../../../components/classItem/ClassItem";
import SectionHeader from "../../../components/section-header/SectionHeader";
import { classes } from "../../../data/data";
import gym from "../../../assets/gym.mp4";

import { BsPlayFill, BsPauseFill } from "react-icons/bs";

const Classes = () => {
  const [isPlay, setIsPaly] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setIsPaly(!isPlay);
    if (isPlay) ref.current?.pause();
    else ref.current?.play();
  };

  return (
    <Background id="classes">
      <section className="section min-h-screen  md:mt-52  lg:mt-72  xl:mt-96 pb-16">
        {/* video */}

        <section className=" relative w-full  -mt-[15%]  mb-32  ">
          <video
            ref={ref}
            controls={false}
            muted
            loop
            className="h-full w-full  rounded-lg object-cover"
          >
            <source src={gym} type="video/mp4"></source>
          </video>

          <div className="absolute inset-0 bg-oerlay flex items-center justify-center">
            <button
              onClick={handleVideo}
              className="text-white p-2 text-3xl md:text-4xl  flex items-center justify-center rounded-full bg-coquelicot h-10 w-10  lg:h-16
              lg:w-16 hover:opacity-60  transition-opacity duration-500"
            >
              {isPlay ? <BsPauseFill /> : <BsPlayFill />}
            </button> 
          </div>
        </section>
        <SectionHeader
          title="Fitness Classes For Every Goal"
          btnText="our classes"
        />

        {/* classes */}

        <section className="flex gap-8 items-center justify-between mx-auto  mt-12 overflow-x-scroll  px-4 pb-20 w-full gallery">
          {classes.map((item) => (
            <ClassItem key={item.id} {...item} />
          ))}
        </section>
      </section>
    </Background>
  );
};

export default Classes;
