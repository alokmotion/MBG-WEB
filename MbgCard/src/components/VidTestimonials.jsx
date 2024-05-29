import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import style from "../style";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Test1, Test2,Test3,Test4,Test5 } from "../assets";

const WrapperContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //   background-color: #f5f6e0;
`;

const Wrapper = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
`;

const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  padding: 10px 0;
  //   background-color: #f5f6e0;
  // overflow: hidden;
  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeArea = styled.div`
  display: inline-block;
  white-space: nowrap;
  transform: translateX(-${(props) => props.move}px);
  animation: ${moveLeft} ${(props) => props.time}s linear infinite
    ${(props) => (props.toRight ? "reverse" : "")};
  animation-play-state: inherit;
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

const Marquee = ({ videos, time, toRight, ...props }) => {
  const marqueeContainer = useRef(null);
  const marqueeArea = useRef(null);
  const [moveLeft, setMoveLeft] = React.useState(0);
  const [showVideos, setShowVideos] = React.useState(videos);
  const [realTime, setRealTime] = React.useState(time);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const containerWidth = Math.floor(marqueeContainer.current.offsetWidth);
    const areaWidth = Math.floor(marqueeArea.current.scrollWidth);
    const copyTimes = Math.max(2, Math.ceil((containerWidth * 2) / areaWidth));
    const newMoveLeft = areaWidth * Math.floor(copyTimes / 2);
    const newRealTime =
      time * parseFloat((newMoveLeft / containerWidth).toFixed(2));
    setShowVideos(getFillList(videos, copyTimes));
    setMoveLeft(newMoveLeft);
    setRealTime(newRealTime);
  }, [videos]);

  return (
    <MarqueeContainer ref={marqueeContainer} {...props}>
      <MarqueeArea
        ref={marqueeArea}
        move={moveLeft}
        time={realTime}
        toRight={toRight}
      >
        {showVideos.map((video, index) => {
          return (
            <MarqueeItem key={index}>
              <video
                width="280"
                height="400px"
                controls
                onPlay={() => {
                  // Video is playing, pause the marquee
                  marqueeContainer.current.style.animationPlayState = "paused";
                  setIsVideoPlaying(true);
                }}
                onPause={() => {
                  // Video is paused, resume the marquee
                  marqueeContainer.current.style.animationPlayState = "running";
                  setIsVideoPlaying(false);
                }}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MarqueeItem>
          );
        })}
      </MarqueeArea>
    </MarqueeContainer>
  );
};

Marquee.propTypes = {
  videos: PropTypes.array,
  time: PropTypes.number,
  toRight: PropTypes.bool,
};

Marquee.defaultProps = {
  videos: [],
  time: 10,
};

function VideoTest() {
  // Example video URLs
  const VIDEO_LIST = [Test1, Test2, Test3,Test4,Test5, Test1, Test2, Test3,Test4,Test5,];

  return (
    <section
      className={`${style.paddingY} flex flex-col justify-center items-center`}
    >
      <Wrapper>
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
              Boost your business with MBG Card's cutting-edge digital solutions, proven to enhance customer engagement and increase visibility.
            </p>
          </div>
        </motion.div>
          <Marquee videos={VIDEO_LIST} time={15} />
      </Wrapper>
    </section>
  );
}

export default VideoTest;
