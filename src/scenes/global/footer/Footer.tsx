import FooterHeader from "../../../components/footer-header/FooterHeader";

import Background from "../../../components/bg/Background";
import icon from "../../../../public/icon.svg";
import clock from "../../../assets/footer-clock.png";

import {
  BsTelephoneFill,
  BsTwitter,
  BsFacebook,
  BsSend,
  BsInstagram,
} from "react-icons/bs";
import { AiOutlineMail, AiTwotoneDownCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <Background id="contact">
      <footer className="section grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4  gap-8  items-start justify-between   lg:justify-items-center py-20  lg:py-32 px-8   md:px-4  xl:px-0">
        {/* Hours */}
        <section>
          <div className=" flex items-center  mb-8 justify-center md:justify-start  ">
            <img
              className=" -ml-2  h-10 w-10  sm:h-12 md:w-12  lg:h-15 w-15 "
              src={icon}
              alt="logo"
            />
            <h1 className=" font-primary font-semibold text-3xl  text-white lg:text-4xl">
              Fitlife{" "}
            </h1>
          </div>

          <p className="text-silvermetallic  ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quisquam iste voluptates maiores at mollitia repellendus accusamus{" "}
          </p>

          <div className="flex items-center gap-6 mt-4  ">
            <img src={clock} alt="clock" />
            <div>
              <div>
                <h1 className="text-white">Monday-Friday</h1>
                <span className="text-silvermetallic">10:00Am - 10:00Pm</span>
              </div>
              <div>
                <h1 className="text-white">Saturday-Sunday</h1>
                <span className="text-silvermetallic">07:00Am - 02:00Pm</span>
              </div>
            </div>
          </div>
        </section>
        {/* Links */}
        <div>
          <FooterHeader title="Our Links" />
          <ul className="text-silvermetallic flex flex-col gap-4   ">
            <li className="hover:text-sonicsilver">
              <a href="#home"> Home </a>
            </li>
            <li className="hover:text-sonicsilver">
              <a href="#about"> About Us </a>
            </li>
            <li className="hover:text-sonicsilver">
              <a href="#classes"> Classes </a>
            </li>
            <li className="hover:text-sonicsilver">
              <a href="#news"> Blog </a>
            </li>
            <li className="hover:text-sonicsilver">
              <a href="#contact"> Contact Us </a>
            </li>
          </ul>
        </div>
        {/* Contact Us */}
        <section>
          <FooterHeader title="Contact Us" />
          <article className="flex items-center  gap-4 text-silvermetallic mb-4 ">
            <button className="rounded-full bg-coquelicot text-white text-2xl p-2">
              <MdLocationOn />
            </button>
            <p>
              1247/Plot No. 39, 15th <br /> Phase, Colony, Kukatpally, Hyderabad
            </p>
          </article>

          <article className=" flex items-center gap-4 text-silvermetallic mb-4 ">
            <button className="rounded-full bg-coquelicot text-white text-2xl p-2">
              <BsTelephoneFill />
            </button>
            <p>
              1800-121-3637 <br /> +91 555 234-8765
            </p>
          </article>

          <article className=" flex items-center gap-4 text-silvermetallic mb-4 ">
            <button className="rounded-full bg-coquelicot text-white text-2xl p-2">
              <AiOutlineMail />
            </button>
            <p>
              info@fitlife.com <br /> services@fitlife.com
            </p>
          </article>
        </section>
        {/* NewsLetter */}
        <section className="flex flex-col">
          <FooterHeader title="our Newsletter" />

          <form className="flex ">
            <input
              id="emailAdre"
              type="email"
              name="email"
              placeholder="email address"
              className="p-2 rounded-l-md w-full "
            />
            <button className="bg-coquelicot text-white text-xl p-2  rounded-r-md hover:opacity-90  ">
              <BsSend />
            </button>
          </form>

          <div className=" text-white text-xl  transition-colors duration-700 flex gap-3  mt-8 ease-in-out justify-center md:justify-start   ">
            <button className=" bg-slate-600 hover:bg-coquelicot transition-colors  duration-700 ease-in-out  p-2 rounded-full ">
              <BsFacebook />{" "}
            </button>
            <button className=" bg-slate-600 hover:bg-coquelicot transition-colors  duration-700 ease-in-out  p-2 rounded-full ">
              <BsInstagram />{" "}
            </button>
            <button className=" bg-slate-600 hover:bg-coquelicot transition-colors  duration-700 ease-in-out  p-2 rounded-full ">
              <BsTwitter />{" "}
            </button>
          </div>
        </section>
      </footer>

      {/* Copyrights */}

      <div className="flex flex-col md:flex-row w-full bg-blackfogra_3  items-center justify-between gap-5 p-6 px-4 md:px-12  lg:px-28 text-white ">
        <p>©2023 Fitlife. All Rights Reserved</p>

        <div className="flex justify-around   text-xs md:text-sm   w-full md:w-fit  items-center gap-6">
          <div>
            <button className=" mr-2 text-coquelicot ">
              {" "}
              <AiTwotoneDownCircle />{" "}
            </button>
            <span>Privacy Policy</span>
          </div>

          <div>
            <button className=" mr-2 text-coquelicot">
              {" "}
              <AiTwotoneDownCircle />{" "}
            </button>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Footer;
