import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  return (
    <section className=" bg-[#213343] ">
      <footer class="font-sans py-8 px-10 ">
        <div className="relative">
          <div className="mb-20 flex flex-col gap-4 max-[768px]:hidden ">
            <div className="flex gap-4 items-baseline	  align-baseline">
              <h1 className="mt-0   text-white text-[5em] font-bold  tracking-tight md:text-[5em] xl:text-[5em">
                Start
              </h1>

              <span className="	align-baseline	  ">
                {" "}
                <TypeAnimation
                  className="   text-[yellow] 	"
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Automation",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Business",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "5em", display: "inline-block" }}
                  repeat={Infinity}
                />{" "}
              </span>
            </div>

            <span className=" text-4xl text-white ml-5 ">
              {" "}
              With{" "}
              <span className=" text-[yellow] text-5xl font-bold ">
                MBG Card
              </span>{" "}
            </span>
          </div>

          <div className="absolute  top-4 right-[1rem] max-[768px]:hidden">
            <button
              type="button"
              class="text-white bg-gradient-to-r h-[150px] w-[500px] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-[16rem] rounded-lg text-4xl px-5 py-2.5 text-center mr-2 mb-2"
            >
              Contact Now
            </button>
          </div>
        </div>

        <div className="grid mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  Testing Automation
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  AWS Development Services
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  Mobile App Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-4">
              Platforms
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  Hubspot
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  Marketo Integration Services
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  Marketing Glossary
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-white text-sm"
                >
                  UIPath
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end hover:text-[#FFA726] text-white text-sm "
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-[yellow]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="flex-1 ">info@mbgcard.com</span>
                </a>
              </li>

              <li>
                <a
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end hover:text-[#FFA726] text-white text-sm "
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-[yellow]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="flex-1 text-white">+91 958 9200 458</span>
                </a>
              </li>

              <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end hover:text-[#FFA726] text-white text-sm ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-[yellow]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <address className="-mt-0.5 flex-1 not-italic ">
                  Head office : Chamber no. 3 4, samdariya aadarsh building,
                  damoh naka jabalpur
                </address>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t text-center border-[#6b5f5f] pt-8 mt-12">
          <p className="text-white text-sm">
            Copyright © 2023
            <a
              href="https://alokmotion.in/"
              target="_blank"
              className="hover:underline mx-1"
            >
              MBGCard
            </a>
            All Rights Reserved. Made with ❤️ by AlokMotion
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
