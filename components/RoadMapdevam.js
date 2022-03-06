import React from "react";
// flex flex-col text-center w-full mb-20    mb-10 text-5xl font-bold text-center text-black  text-2xl font-medium title-font mb-4 text-white
function RoadMapdevam() {
  return (
    <section className="text-gray-300 bg-black body-font">
      <div className="container px-5 py-0 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="roadMap"
                className="flex-shrink-0 rounded-lg w-100 h-120 object-cover object-center mb-4"
                src="https://gateway.pinata.cloud/ipfs/QmVcrHvnYwEmxzZ66dwUucjZXpVrPXdi54MHditmEEunBX/Roadmap5.PNG"
              />
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="roadMap"
                className="flex-shrink-0 rounded-lg w-100 h-120 object-cover object-center mb-4"
                src="https://gateway.pinata.cloud/ipfs/QmVcrHvnYwEmxzZ66dwUucjZXpVrPXdi54MHditmEEunBX/Roadmap6.PNG"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMapdevam;