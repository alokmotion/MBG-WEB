import { motion } from "framer-motion";
import style from "../style";
import React, { useRef, useState, useEffect } from "react";
import { Test1, Test2 } from "../assets";

const data = [
  {
    url: Test1,
  },
  {
    url: Test2,
  },
  {
    url: Test1,
  },
];

const Testimonials = () => {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setisVideoPlaying(false);
    } else {
      vidRef.current.play();
      setisVideoPlaying(true);
    }
  };

  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);

  return (
    <section id="news" className={`${style.paddingY} flex flex-col justify-center items-center`}>
      {/* Heading */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <h1
            className={`font-playfair font-bold sm:text-4xl text-2xl border-b-4 border-slate-700 p-2 uppercase text-black`}
          >
            video testimonial
          </h1>

          <p
            className={` font-poppins font-normal mt-5 sm:mt-14 text-[18px] leading-[30.8px] text-black`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptates accusamus iusto minus alias. 
          </p>
        </div>
      </motion.div>

      <div id="video-container"  className=" flex flex-col justify-center items-center mt-5 h-[395px] w-[70%]   rounded-xl	bg-[white] overflow-scroll	snap-y	">
        {data.map((item, i) => (
          <div className="relative">
            <video
              controls
              onClick={onVideoClick}
              className="h-[100%] w-[100%] snap-start	"
              ref={vidRef}
              src={item.url}
              loop
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
