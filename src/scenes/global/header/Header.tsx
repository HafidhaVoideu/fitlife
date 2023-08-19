import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowUpCircle } from "react-icons/bs";
import icon from "../../../../public/icon.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";

type ListProps = {
  style: "desktop" | "mobile";
  isMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const List = ({ style, isMenu }: ListProps) => {
  const desktopStyle = "hover:text-coquelicot duration-300";
  const mobileStyle = "text-white hover:text-green sm:text-3xl    duration-300";
  const menu = [
    { tag: "home", ref: "#home" },
    { tag: "about us", ref: "#about" },
    { tag: "classes", ref: "#classes" },
    { tag: "blog", ref: "#news" },
    { tag: "contact us", ref: "#contact" },
  ];
  return menu.map((item) => (
    <li
      key={item.tag}
      onClick={() => isMenu(false)}
      className={`${
        style === "desktop" ? desktopStyle : mobileStyle
      } capitalize`}
    >
      <a href={item.ref}> {item.tag} </a>
    </li>
  ));
};

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) setIsScroll(true);
    else setIsScroll(false);
    if (window.scrollY > 500) setShowTopButton(true);
    else setShowTopButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScroll
          ? "bg-white  transition-all duration-500 ease-out shadow-sm shadow-stone-200 lg:text-blackfogra_3  p-4"
          : " shadow-none  lg:text-white p-4 lg:p-10 "
      }  static   lg:fixed top-0 left-0  w-full flex  justify-between items-center  md:px-8 z-40  text-blackfogra_3  shadow-stone-200   `}
    >
      <div className=" flex items-center">
        <img
          className=" -ml-2  h-8 w-8  sm:h-12 md:w-12    lg:h-15 w-15 "
          src={icon}
          alt="logo"
        />
        <h1 className=" -ml-2 font-primary font-semibold text-2xl  sm:text-3xl lg:text-4xl">
          Fitlife{" "}
        </h1>
      </div>

      <div className="hidden lg:flex gap-20 items-center ">
        <nav>
          <ul className="flex gap-8">
            <List style="desktop" isMenu={setIsMenu} />
          </ul>
        </nav>

        <Button text="Join Now" style="black" />
      </div>

      {/* Mobile nav */}

      <button
        onClick={() => setIsMenu(true)}
        className="block lg:hidden bg-coquelicot p-2   text-white rounded-md   text-xl  sm:text-3xl"
      >
        <HiMenuAlt3 />
      </button>

      {isMenu && (
        <motion.nav
          initial={{ y: "-100vh" }}
          animate={{ y: "0vh" }}
          transition={{
            ease: "linear",
            duration: 0.2,
          }}
          className=" min-h-full w-full  fixed inset-0   flex flex-col items-center justify-center  bg-coquelicot z-50 gap-32 "
        >
          <button
            className=" absolute top-4 right-4  bg-blackfogra_3 text-white text-xl self-end  rounded-md p-2"
            onClick={() => setIsMenu(false)}
          >
            <AiOutlineClose />{" "}
          </button>
          <ul className="flex flex-col items-center justify-center gap-10 ">
            <List style="mobile" isMenu={setIsMenu} />
          </ul>
        </motion.nav>
      )}

      {showTopButton && (
        <button
          className={`fixed bottom-16 right-4 lg:right-8 text-3xl  md:text-5xl text-coquelicot hover:text-lightgray `}
          onClick={scrollToTop}
        >
          <BsArrowUpCircle />
        </button>
      )}
    </header>
  );
};

export default Header;
