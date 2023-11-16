import { motion } from "framer-motion";
import style from "../style";

import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg";

const Certificate = () => {
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
        <h1
          className={`font-playfair font-bold sm:text-4xl text-2xl border-b-4 border-slate-700 p-2 uppercase text-black`}
        >
          Government Funded Certificate
        </h1>
      </motion.div>

      <div>
        <p
          className={` font-poppins font-normal mt-5 sm:mt-14 text-[18px] leading-[30.8px] text-black`}
        >
          MBG CARD proudly showcases its Government of India-funded
          certificates, exemplifying our commitment to India's digital
          transformation. The first certificate, backed by a substantial
          ₹10,65,000 grant, recognizes our exceptional contributions to Central
          India's digital evolution. The second certificate, valued at ₹41,000,
          underscores our mission to provide accessible digital solutions to
          businesses of all sizes. These certificates represent the trust,
          recognition, and support bestowed upon us by the Government of India.
          We are determined to utilize these resources to advance our mission,
          empowering businesses with innovative digital marketing and automation
          solutions. Join us in this transformative journey and elevate your
          business in the digital age.
        </p>
      </div>

      <div className={`${style.flexCenter} w-full mt-10  `}>
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <figure className="max-w-full">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={certificate1}
                    alt="image description"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="w-full  sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                <figure className="max-w-full">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={certificate2}
                    alt="image description"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
