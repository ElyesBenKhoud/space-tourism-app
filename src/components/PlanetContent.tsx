import React from "react";

function PlanetContent({ actualPlanet }: any) {
  return (
    <>
      <h3 className="mt-5 uppercase text-white lg:text-[100px]">
        {actualPlanet.name}
      </h3>
      <p className="leading-relaxed lg:text-[18px] py-4">
        {actualPlanet.description}
      </p>
      <hr className="my-8 border-secondary/25" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-fit mx-auto uppercase lg:mx-0">
          <span className="block sub-2">avg. distance</span>
          <span className="block sub-1 text-white">
            {actualPlanet.distance}
          </span>
        </div>
        <div className="w-fit mx-auto uppercase lg:mx-0">
          <span className="block sub-2">est. travel time</span>
          <span className="block sub-1 text-white"> {actualPlanet.time} </span>
        </div>
      </div>
    </>
  );
}

export default PlanetContent;
