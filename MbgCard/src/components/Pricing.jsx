import pgif from "../assets/pgif.gif";
// import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Pricing
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            MBG Card understand that every business is unique, and so are its
            needs. That's why we offer flexible pricing plans tailored to suit
            your specific requirements. Whether you're a small startup or an
            established enterprise, our pricing options are designed to provide
            value and affordability.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 px-8 gap-10 text-zinc-800 mt-10">
          {/* card 1 */}

          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm">
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">Starter</h2>
              <p class="opacity-60 text-center">
                For the individual and small teams
              </p>
              <div class="flex flex-col items-center my-8">
                <p class="font-extrabold text-4xl">₹1029</p>
                <p class="text-sm opacity-60">/month</p>
              </div>
            </div>

            <div class="flex flex-col items-center mb-3">
              <p class="font-extrabold text-xl">Official WhatsApp API</p>
            </div>

            <div class="flex flex-col gap-1">
              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Green Tick Verification & Assistance</b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 ml-1 fill-orange-300"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </p>
              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Message Broadcasts & Scheduling </b>
              </p>
              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Team Inbox</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>1000 Chatbot Sessions</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Keywords Actions</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Basic Chatbots</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>WhatsApp Catalog</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Global Webhooks & API Access</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Commerce Integrations</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
                Basic Support
              </p>
              <div class="flex justify-center mt-8 ">
                <button class="border px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 rounded-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* card 2 */}

          <div class="flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 p-8 rounded-lg shadow-lg relative border-8 border-orange-200 max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="w-20 h-20 absolute -top-11 -left-11 fill-red-400"
            >
              <path
                fill-rule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p class="mono text-sm absolute -top-4 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
              POPULAR
            </p>
            <div>
              <div class="flex gap-4 justify-center">
                <p class="font-extrabold text-3xl mb-2">Pro</p>
              </div>
              <p class="opacity-60 text-center">For agencies and businesses</p>
              <p class="opacity-60 text-center"></p>
              <div class="flex gap-4 justify-center">
                <div class="flex flex-col items-center my-8">
                  <p class="font-extrabold text-4xl">₹1029</p>
                  <p class="text-sm opacity-60">/month</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>All features in Basic Plan</b>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 ml-1 fill-orange-300"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </p>
              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Advanced & Interconnected Chatbots</b>
              </p>
              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Granular User Roles</b>
              </p>
              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>WhatsApp Ad Insights</b>
              </p>
              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Sequences (WhatsApp Drip Campaigns)&nbsp;</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>2000 Chatbot Sessions &nbsp;</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>HubSpot Integration &nbsp;</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <b>Higher Messaging Speed &nbsp;</b>
              </p>

              <p class="flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clip-rule="evenodd"
                  ></path>
                </svg>{" "}
                Premium Support
              </p>
              <div class="flex justify-center mt-8">
                <button class="px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 rounded-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* card 3  */}
          <div class="flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm">
            <div>
              <h2 class="font-extrabold text-3xl text-center mb-2">
                Grow With MBG
              </h2>
              <p class="opacity-60 text-center">
                Unlock the potential of WhatsApp marketing with our Growth plan.
              </p>
            </div>

            <div className="h-[219px] overflow-hidden	 ">
              <img className="" src={pgif} />
            </div>

            <div className="flex justify-center mt-8">
              <div to="./compare_plans">
                <button className="px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 rounded-xl">
                  Compare With Other
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
