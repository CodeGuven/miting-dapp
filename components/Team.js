import React from "react";

function Team() {
  return (
    <section className="text-gray-200 bg-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="mb-10 text-5xl font-bold text-center text-green-400">
            TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Creators of Foxes Crew. Meet the creators of the big game.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://gateway.pinata.cloud/ipfs/QmVbejpPcdUPbWqkdKGfs15C2MNSikES98vVFU8UTETgZc/Team12.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-white">
                  Miran Onat 
                </h2>
                <h3 className="text-gray-500 mb-3">Head Developer</h3>
                <p className="mb-4">
    
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://gateway.pinata.cloud/ipfs/QmVbejpPcdUPbWqkdKGfs15C2MNSikES98vVFU8UTETgZc/Team7.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-white">
                  Güven Yaman
                </h2>
                <h3 className="text-gray-500 mb-3">Community Manager</h3>
                <p className="mb-4">
                 
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://gateway.pinata.cloud/ipfs/QmVbejpPcdUPbWqkdKGfs15C2MNSikES98vVFU8UTETgZc/Team1.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-white">
                  Adeline Dean
                </h2>
                <h3 className="text-gray-500 mb-3">Blockchain Engineer</h3>
                <p className="mb-4">
                  
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://gateway.pinata.cloud/ipfs/QmVbejpPcdUPbWqkdKGfs15C2MNSikES98vVFU8UTETgZc/Team2.png"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-white">
                  Carla Andrii
                </h2>
                <h3 className="text-gray-500 mb-3">Artist</h3>
                <p className="mb-4">
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;