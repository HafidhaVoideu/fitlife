type BlogItemProps = {
  img: string;
  date: string;
  title: string;
  des: string;
};

import { motion } from "framer-motion";
const BlogItem = ({ img, date, des, title }: BlogItemProps) => {
  return (
    <motion.article
      initial={{
        y: -10,
      }}
      whileInView={{
        y: 45,
      }}
      transition={{
        type: "spring",

        stiffness: 300,
      }}
      className="border-solid border-[1px] rounded-lg  border-lightgray w-full max-w-fit   sm:w-5/12  md:w-[44%] lg:w-[30%] "

 
    >
      {/* image */}
      <div className="relative flex-1 mb-5 ">
        <div className="overflow-hidden mx-auto my-0 rounded-t-lg  ">
          <img
            src={img}
            alt="person-in-gym"
            className="hover:scale-110 t  ransition-transform ease-in-out duration-700 w-full cursor-pointer "
          />
        </div>

        <span className="absolute bottom-0 left-0 py-2 px-6  sm:py-4 sm:px-10 text-md font-primary  font-medium bg-coquelicot text-white">
          {date}
        </span>
      </div>

      {/* info */}

      <div className="flex-1 flex flex-col   gap-4 p-4  ">
        <h1 className="text-xl font-extrabold lg:text-2xl  hover:text-coquelicot transition-colors cursor-pointer    ease-in  capitalize">
          {title}
        </h1>
        <p className="text-silvermetallic max-w-md lg:text-md">{des}</p>
        <a
          href="#"
          className="underline hover:text-blackfogra_3 transition-colors ease-in   text-coquelicot underline-offset-4 my-4 "
        >
          {" "}
          READ MORE
        </a>
      </div>
    </motion.article>
  );
};

export default BlogItem;
