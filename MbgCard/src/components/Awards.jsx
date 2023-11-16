import { motion } from "framer-motion";
import style from "../style";

import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import digitalMarketing from "../assets/digitalMarketing.png";
import Award1 from "../assets/Award1.jpeg";
import Award2 from "../assets/Award2.jpeg";
import Award3 from "../assets/Award3.jpeg";
import Award4 from "../assets/Award4.jpeg";
import Award5 from "../assets/Award5.jpeg";
import Award6 from "../assets/Award6.jpeg";
import Award7 from "../assets/Award7.jpeg";
import Award8 from "../assets/Award8.jpeg";
import Award9 from "../assets/Award9.jpeg";

const WrapperContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background-color: #ccc;
`;

const Wrapper = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-top: 20px;
  padding: 10px 0;
  background-color: white;
  overflow: hidden;
  &:hover {
    // animation-play-state: paused;
  }
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    // background-image: linear-gradient(
    //   to right,
    //   #ccc,
    //   transparent 20%,
    //   transparent 80%,
    //   #ccc
    );
  }
`;

const MarqueeArea = styled.div`
  display: inline-block;
  white-space: nowrap;
  transform: translateX(-${(props) => props.move}px);
  animation: ${moveLeft} ${(props) => props.time}s linear infinite
    ${(props) => (props.toRight ? " reverse" : "")};
  animation-play-state: running;
`;

const MarqueeItem = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 2em;
`;

const getFillList = (list, copyTimes = 1) => {
  let newlist = [];
  for (let i = 0; i < copyTimes; i++) {
    newlist.push(...list);
  }
  return newlist;
};

const Marquee = ({ images, time, toRight, ...props }) => {
  const marqueeContainer = useRef(null);
  const marqueeArea = useRef(null);
  const [moveLeft, setMoveLeft] = React.useState(0);
  const [showImages, setShowImages] = React.useState(images);
  const [realTime, setRealTime] = React.useState(time);

  useEffect(() => {
    const containerWidth = Math.floor(marqueeContainer.current.offsetWidth);
    const areaWidth = Math.floor(marqueeArea.current.scrollWidth);
    const copyTimes = Math.max(2, Math.ceil((containerWidth * 2) / areaWidth));
    const newMoveLeft = areaWidth * Math.floor(copyTimes / 2);
    const newRealTime =
      time * parseFloat((newMoveLeft / containerWidth).toFixed(2));
    setShowImages(getFillList(images, copyTimes));
    setMoveLeft(newMoveLeft);
    setRealTime(newRealTime);
  }, [images]);

  return (
    <MarqueeContainer ref={marqueeContainer} {...props}>
      <MarqueeArea
        ref={marqueeArea}
        move={moveLeft}
        time={realTime}
        toRight={toRight}
      >
        {showImages.map((image, index) => {
          return (
            <MarqueeItem key={index}>
              <article class="w-[400px] h-[450px] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-20">
                <img
                  src={image}
                  alt="University of Southern California"
                  class="absolute inset-0 h-full w-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">MBG</h3>
              </article>
            </MarqueeItem>
          );
        })}
      </MarqueeArea>
    </MarqueeContainer>
  );
};

Marquee.propTypes = {
  images: PropTypes.array,
  time: PropTypes.number,
  toRight: PropTypes.bool,
};

Marquee.defaultProps = {
  images: [],
  time: 10,
};

const Awards = () => {
  const IMAGE_LIST = [
    Award9,
    Award1,
    Award2,
    Award3,
    Award4,
    Award9,
    Award5,
    Award6,
    Award7,
    Award8,
    Award9,
    Award1,
    Award2,
    Award3,
    Award4,
    Award5,
    Award6,
    Award7,
    Award8,
    Award9,
    Award1,
    Award2,
    Award3,
    Award4,
    Award5,
    Award6,
    Award7,
    Award8,
    Award9,
    Award1,
    Award2,
    Award3,
    Award4,
    Award5,
    Award6,
    Award7,
    Award8,
  ];

  return (
    <section id="news" className={`${style.paddingY}`}>
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
            Awards
          </h1>

          {/* <p className={` font-poppins font-normal mt-5 sm:mt-14 text-[18px] leading-[30.8px] text-black`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates accusamus iusto minus alias. Maiores saepe quibusdam hic nihil vitae!</p> */}
        </div>
      </motion.div>

      <div className="flex-col justify-center p-6 text-center ">
        <Wrapper>
          <Marquee images={IMAGE_LIST} time={20} />
        </Wrapper>
      </div>
    </section>
  );
};

export default Awards;
