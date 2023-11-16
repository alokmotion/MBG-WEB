import React, { useState } from "react";

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex-col justify-center p-6 text-center mt-10 ">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl mb-12">
        {" "}
        Contact Us{" "}
      </h1>

      <div className="flex flex-col justify-center md:flex-row item-center gap-10 mb-11">
        <div class="flex px-3 py-3">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://cdn.sanity.io/images/599r6htc/localized/71996e35922661352d07c5c52266345f5b505ed6-1920x1312.png?w=480&h=328&q=75&fit=max&auto=format&dpr=2"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                Talk to a member of our sales team
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 py-4">
              <a
                href="#_"
                onClick={() => setShowModal(true)}
                class="inline-flex items-center w-full justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
        <div class="flex px-3 py-3">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://cdn.sanity.io/images/599r6htc/localized/71996e35922661352d07c5c52266345f5b505ed6-1920x1312.png?w=480&h=328&q=75&fit=max&auto=format&dpr=2"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                Talk to a member of our sales team
              </div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 py-4">
              <a
                href="#_"
                onClick={() => setShowModal(true)}
                class="inline-flex items-center w-full justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-gray-900">
              Visit Our Location
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14670.59391952863!2d79.9274746!3d23.1830264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae238295871b%3A0x3847673e30000000!2sMBG%20CARD%20MARKETING!5e0!3m2!1sen!2sin!4v1698399567728!5m2!1sen!2sin"
                  width="100%"
                  height="480"
                  // style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div class="px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p class="mt-1 text-gray-600">
                      Head office : Chamber no. 3 4, samdariya aadarsh building,
                      damoh naka jabalpur
                    </p>
                    <p class="mt-1 text-gray-600">
                      {" "}
                      Regional office : Office Number 217, Second Floor Kolte
                      patil city center hinjewadi phase 1 pune ,411057
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                    <p class="mt-1 text-gray-600">
                      Monday - Saturday: 10am - 7pm
                    </p>
                    <p class="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                    <p class="mt-1 text-gray-600 ">
                      {" "}
                      Email:{" "}
                      <a
                        className="hover:text-[blue] "
                        href="mailto:info@mbgcard.com"
                      >
                        info@mbgcard.com
                      </a>{" "}
                    </p>
                    <p class="mt-1 text-gray-600">Phone: +91 958 9200 458</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Please fill The Form
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-red-900 opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div class="flex justify-center  px-8  text-blueGray-500 text-lg leading-relaxed ">
                    <form class="max-w-2xl">
                      <div class="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
                        <div class="flex flex-col gap-2 w-full border-gray-400">
                          <div>
                            <label class="text-gray-600 dark:text-gray-400">
                              Name
                            </label>
                            <input
                              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              type="text"
                            />
                          </div>

                          <div>
                            <label class="text-gray-600 dark:text-gray-400">
                              Number
                            </label>
                            <input
                              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              type="text"
                            />
                          </div>

                          <div>
                            <label class="text-gray-600 dark:text-gray-400">
                              Email
                            </label>
                            <input
                              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              type="text"
                            />
                          </div>

                          <div>
                            <label class="text-gray-600 dark:text-gray-400">
                              Message
                            </label>
                            <textarea
                              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                              name="bio"
                            ></textarea>
                          </div>
                          <div class="flex justify-end"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default ContactUs;
