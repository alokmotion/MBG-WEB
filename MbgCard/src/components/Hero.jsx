import { motion } from "framer-motion";
import styles from "../style";


const Hero = () => {
  return (
    <section
      id="home"
      className={` flex md:flex-row flex-col ${styles.padding} `}
    >
      <div
        className={` flex-1 ${styles.flexStart} flex-col  xl:px-0 sm:px-16 px-6 `}
      >
        <div className="flex flex-row justify-between items-center w-full  ">
          {/* Desktop view */}
          <div className="sm:flex flex-col hidden  ">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] text-black ss:leading-[60px] leading-[75px] "
            >
              Grow Your Business With <br className=" sm:block hidden " />{" "}
              <span className="text-[#525FE1] "> Chat Automation </span>
            </motion.h1>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className={` ${styles.paragraph}  text-black text-[15px] `}
            >
              <span className="text-black ">
                {" "}
                Drive sales, loyalty, and customer satisfaction through chatbot.{" "}
                <br /> Automate your business across all channels.{" "}
              </span>
            </motion.p>

            {/* Button */}

            <div className="flex flex-col mt-10 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <motion.a
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                href="#_"
                className="relative px-5 py-3 overflow-hidden  font-medium w-[220px] flex justify-center  text-gray-600 bg-white border border-b-4 border-[#F1C93B]   rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Call Now
                </span>
              </motion.a>

              <motion.a
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
                onClick={() => setShowModal(true)}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Enquire Now
                </span>
              </motion.a>
            </div>

            {/* end Button */}
          </div>

          {/* end Desktop view */}
        </div>
      </div>

      <div>
        <motion.video
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          autoPlay
          controls
          className="object-contain h-[fit-content] sm:h-80 lg:h-96 xl:h-112 2xl:h-128 border-10 rounded-lg "
        >
          <source
            src="https://mbgcard.in/wp-content/uploads/Kiku-Sharda-MBGs-Brand-Ambassador-_-Grow-your-Business-with-Digital-Marketing-Growth-Plan.mp4"
            type="video/mp4"
          />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </motion.video>
      </div>

      {/* mobile view  */}

      <div className="sm:hidden">
        <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }} className="flex-1 justify-center text-center font-poppins font-semibold  text-[39px] text-black  leading-normal ">
          Grow Your Business With <br className=" sm:block hidden " />{" "}
          <span className="text-[#525FE1]  "> Chat Automation </span>
        </motion.h1>

        <p
          className={` ${styles.paragraph} text-center text-black text-[15px] `}
        >
          <span className="text-black ">
            {" "}
            Drive sales, loyalty, and customer satisfaction through chatbot.{" "}
            <br /> Automate your business across all channels.{" "}
          </span>
        </p>

        {/* button */}

        <div className="flex flex-col mt-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a
            href="#_"
            className="relative px-5 py-3 overflow-hidden  font-medium  flex justify-center  text-gray-600 bg-white border border-b-4 border-indigo-500  border-gray-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Call Now
            </span>
          </a>

          <a
            href="#_"
            className="relative  px-4 py-2 font-medium group flex justify-center "
            onClick={() => setShowModal(true)}
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Enquire Now
            </span>
          </a>
        </div>

        {/* end button */}
      </div>

      {/* end mobile view  */}
    </section>
  );
};

export default Hero;
