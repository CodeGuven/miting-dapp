import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="py-0 mt-10 mb-0 ">
      <h1 className="mb-0 font-mono text-6xl font-semibold text-center text-green-700 uppercase">

      </h1>
      <div className="container relative max-w-6xl py-3 pt-5 mx-auto mt-0 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 transform shadow-lg gradient-background -skew-y-6sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-black shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="font-mono text-3xl font-bold text-gray-200 underlined">
                WHAT IS FOXES CREW?
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 space-y-4 text-base leading-6 text-gray-200 sm:text-lg sm:leading-7">
                <ul className="space-y-2 list-disc">
                  <li className="flex items-start">
                    <span className="flex items-center h-6 sm:h-7">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-800"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      <code className="font-semibold text-white">Collection of 5,555 Foxes,created on the Polygon Blockchain,is unique and randomly generated from 202 traits and 4 Legendary Heroes Foxes,some of them are exclusive and rare than rarer. Each figure has unique utility usage and is designed that way to provide exclusive access and rewards to its holder according to rarity.As much unique your figure is,as many benefits you can gain in Foxes Crew. </code>{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pt-12 text-base leading-10 text-gray-200 font-extralight sm:text-lg sm:leading-7">
              <ul className="space-y-2 list-disc">
                  <li className="flex items-start">
                    <span className="flex items-center h-6 sm:h-7">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-800"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      <code className="font-semibold text-white">Foxes Crew is the owner and the governor of the Foxes Crew Metaverse. Holding the Foxes grants you access to our exclusive community. Each member will have voting rights and access an all benefits.
                      Your avatar opens digital doors for you and you will be able to experience an unforgettable journey in Foxes Crew Metaverse.
                      We are building something great and different, where we govern and earn together! 
                      </code>{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
