import style from "../style";
import { motion } from "framer-motion";
import {
  instaAuto,
  chatgpt,
  socialmediamarketing,
  digitalMarketing,
  WebDev,
  seo,
} from "../assets";

const cards = [
  {
    id: 1,
    url: " https://cdn3d.iconscout.com/3d/free/thumb/free-social-media-marketing-with-whatsapp-4409954-3679262.png?f=webp ",

    title: "WhatsApp  Automation",
    excerpt: "Await you",
  },
  {
    id: 2,
    url: instaAuto,
    title: "Instagram  Automation",
    excerpt: "Await you",
  },
  {
    id: 3,
    url: " https://pickyassist.com/en/img/facebook-leads/banner-img.png ",
    title: "Facebook  Automation",
    excerpt: "Await you",
  },
  {
    id: 5,
    url: digitalMarketing,
    title: " Digital Marketing    ",
    excerpt: "Await you",
  },
  {
    id: 6,
    url: WebDev,
    title: "Website Development",
    excerpt: "Await you",
  },

  {
    id: 4,
    url: chatgpt,
    title: " Chat GPT",
    excerpt: "Await you",
  },
 

  {
    id: 8,
    url: seo,
    title: "SEO Services",
    excerpt: "Await you",
  },
  {
    id: 9,
    url: " https://lh3.googleusercontent.com/GJi8hhQDiykQ0w_zBhEjgRjXjl2-Erq82EOztSr9I18p2JkH5PHYkaO7DUEUa238rk1obLf_dWI5NCGni_dvihUIeRkhu1_GrcFuw8lqFcSk0EV5xzuM=w400-rw-v1 ",
    title: "Google Ads",
    excerpt: "Await you",
  },

];

const Services = () => {
  return (
    <section id="services" className={`${style.paddingY}`}>
      <div className=" mx-auto text-center">
        <div>
          <h1
            className={`font-playfair font-bold sm:text-4xl text-2xl border-b-4 border-slate-700 p-2 uppercase text-black`}
          >
            Services
          </h1>
        </div>

        <div
          className={`md:grid md:grid-cols-4 gap-4 w-[100%] justify-center items-center `}
        >
          {cards.map((cards, i) => (
            <motion.div
              key={cards.id}
              initial={{
                opacity: 0,
                translateX: i % 2 === 0 ? -50 : 50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              {/* card */}

              <div className=" p-3 rounded-2xl bg-[#337CCF]  dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col justify-center items-center  ease-linear duration-300  mt-5 ">
                <div className="h-[200px] w-[200px] relative border-2 border-white rounded-2xl">
                  <img
                    className=" rounded-2xl  flex justify-center items-center"
                    src={cards.url}
                    alt="fbAutomation"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-around ml-2 h-full w-full mr-2 rounded-2xl ">
                  <h2 className="m-3 text-3xl  font-bold dark:text-white">
                    {" "}
                    {cards.title}
                  </h2>

                  <div className="w-[100%] flex justify-center items-center  mt-3">
                    <a
                      href="#_"
                      class="inline-flex items-center bg-[#FFC436] justify-center px-5 py-3 text-base font-medium text-center text-white__gradient border  rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient "
                    >
                      <svg
                        class="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      <span class="relative  ">Book Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
