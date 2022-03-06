import React from "react";
// flex flex-col text-center w-full mb-20    mb-10 text-5xl font-bold text-center text-black  text-2xl font-medium title-font mb-4 text-white
function RoadMap() {
  return (
    <section className="text-gray-300 bg-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="mb-10 text-5xl font-bold text-center text-green-600">
            RoadMap
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Welcome
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="roadMap"
                className="flex-shrink-0 rounded-lg w-100 h-120 object-cover object-center mb-4"
                src="https://gateway.pinata.cloud/ipfs/QmVcrHvnYwEmxzZ66dwUucjZXpVrPXdi54MHditmEEunBX/Roadmap1.PNG"
              />
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="roadMap"
                className="flex-shrink-0 rounded-lg w-100 h-120 object-cover object-center mb-4"
                src="https://gateway.pinata.cloud/ipfs/QmVcrHvnYwEmxzZ66dwUucjZXpVrPXdi54MHditmEEunBX/Roadmap2.PNG"
              />
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="roadMap"
                className="flex-shrink-0 rounded-lg w-100 h-120 object-cover object-center mb-4"
                src="https://gateway.pinata.cloud/ipfs/QmVcrHvnYwEmxzZ66dwUucjZXpVrPXdi54MHditmEEunBX/Roadmap3.PNG"
              />
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="roadMap"
                className="flex-shrink-0 rounded-lg w-100 h-120 object-cover object-center mb-4"
                src="https://gateway.pinata.cloud/ipfs/QmVcrHvnYwEmxzZ66dwUucjZXpVrPXdi54MHditmEEunBX/Roadmap4.PNG"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;