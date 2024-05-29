import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import style from "../style";

const Featured = () => {
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
            We Featured In
          </h1>

          <p
            className={` font-poppins font-normal mt-5 sm:mt-14 text-[18px] leading-[30.8px] text-black`}
          >
            MBG Card is recognized by major platforms like YourStory and The Times of India for revolutionizing business growth and customer engagement through digital innovation.
          </p>
        </div>
      </motion.div>

      <div className="flex gap-32 mt-10 flex-col ">
        <Marquee>
          <div className="mx-auto  flex gap-12 w-full">
            {/* Card 1 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center  place-content-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%] "
                src="https://mbgcard.in/wp-content/uploads/2021/09/mbglogogoo.png"
              />
            </div>

            {/* Card 2 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center  place-content-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%] "
                src="https://mbgcard.in/wp-content/uploads/6a00d8341bfae553ef01b8d1594773970c-800wi-removebg-preview.png"
              />
            </div>

            {/* Card 3 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center place-content-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%] "
                src="https://mbgcard.in/wp-content/uploads/2022/05/dd-bb-1536x603.png"
              />
            </div>

            {/* Card 4 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%]"
                src="https://mbgcard.in/wp-content/uploads/Razorpay-Partner-Light-1024x489-1.webp"
              />
            </div>

            {/* Card 5 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%]"
                src="https://mbgcard.in/wp-content/uploads/BNIProudMember400-e1688054145904.jpg"
              />
            </div>

            {/* Card 6 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%]"
                src="https://mbgcard.in/wp-content/uploads/GoDaddy_Pro_OH-partner-removebg-preview.png"
              />
            </div>

            {/* Card 7 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%]"
                src="https://mbgcard.in/wp-content/uploads/2021/09/logo-2.png"
              />
            </div>

            {/* Card 8 */}

            <div className="relative overflow-hidden h-[7rem] mr-10 flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%]"
                src="https://mbgcard.in/wp-content/uploads/2022/05/y-1536x768.png"
              />
            </div>
          </div>
        </Marquee>

        <Marquee direction="right">
          <div className="mx-auto  flex gap-12 w-full">
            {/* Card 1 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center  place-content-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%] "
                src="https://mbgcard.in/wp-content/uploads/2021/09/mbglogogoo.png"
              />
            </div>

            {/* Card 2 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center  place-content-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%] "
                src="https://mbgcard.in/wp-content/uploads/6a00d8341bfae553ef01b8d1594773970c-800wi-removebg-preview.png"
              />
            </div>

            {/* Card 3 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center place-content-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%] "
                src="https://mbgcard.in/wp-content/uploads/2022/05/dd-bb-1536x603.png"
              />
            </div>

            {/* Card 4 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%]"
                src="https://mbgcard.in/wp-content/uploads/Razorpay-Partner-Light-1024x489-1.webp"
              />
            </div>

            {/* Card 5 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%]"
                src="https://mbgcard.in/wp-content/uploads/BNIProudMember400-e1688054145904.jpg"
              />
            </div>

            {/* Card 6 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%]"
                src="https://mbgcard.in/wp-content/uploads/GoDaddy_Pro_OH-partner-removebg-preview.png"
              />
            </div>

            {/* Card 7 */}

            <div className="relative overflow-hidden h-[7rem] flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%]"
                src="https://mbgcard.in/wp-content/uploads/2021/09/logo-2.png"
              />
            </div>

            {/* Card 8 */}

            <div className="relative overflow-hidden h-[7rem] mr-10 flex items-center justify-center rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
              <img
                className="h-[100%]"
                src="https://mbgcard.in/wp-content/uploads/2022/05/y-1536x768.png"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Featured;
