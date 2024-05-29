import { motion } from "framer-motion";
import style from "../style";
import { NewsVid1,NewsVid2,NewsVid3 } from "../assets"; // Import your video source

const articles = [
  { id: 1, title: "India News", url: NewsVid1, excerpt: "" }, // Use NewsVid1 as the video source
  { id: 2, title: "News Nation", url: NewsVid2, excerpt: "" }, // Use NewsVid1 for the second card
  { id: 3, title: "Times Now  ", url: NewsVid3, excerpt: "" }, // Use NewsVid1 for the third card
];

const News = () => {
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
            We are in news
          </h1>

          <p className={` font-poppins font-normal mt-5 sm:mt-14 text-[18px] leading-[30.8px] text-black`}>MBG Card is featured in top news outlets for pioneering digital transformation solutions that boost business efficiency and customer engagement.</p>
        </div>
      </motion.div>

      {/* video  */}

      <div className="sm:flex sm:flex-row gap-6 sm:mt-[110px] mt-10 ">
        {articles.map((article, i) => (
          <motion.div
            className="sm:rounded overflow-hidden sm:shadow-lg sm:p-3"
            key={article.id}
            initial={{
              opacity: 0,
              translateX: i % 2 === 0 ? -50 : 50,
              translateY: -50,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
          >
            <h2 className={`${style.flexCenter} m-4 font-semibold sm:text-2xl text-lg `}>{article.title}</h2>
            <video 
            className="object-contain h-[fit-content] sm:h-80 lg:h-[fit-content] xl:h-112 2xl:h-128 border-10 rounded-lg "
             autoPlay loop muted controls src={article.url}></video>{" "}
            
            <p>{article.excerpt}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default News;
