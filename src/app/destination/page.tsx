/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { planets } from "./planets";
import Background from "@/components/Background";

import mobile from "@/assets/destination/background-destination-mobile.jpg";
import tablet from "@/assets/destination/background-destination-tablet.jpg";
import desktop from "@/assets/destination/background-destination-desktop.jpg";

function page() {
  const [actualPlanet, setActualPlanet] = useState(0);

  const planet = useMemo(() => planets[actualPlanet], [actualPlanet]);

  return (
    <div>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />

      <main className=" relative z-10 p-6 md:px-24 md:pb-0 ">
        <div className="w-fit nav-text uppercase text-white md:tracking-[3px] md:text-[20px]  lg:text-[28px] lg:tracking-[5px]">
          <span className="inline-block font-bold opacity-25 mr-5">01</span>
          <span className="inline-block">Pick your destination</span>
        </div>

        <div className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10"></div>
        <div className="grid gap-40 lg:grid-cols-2 lg:pt-12">
          <div key={planet.name} className="flex justify-center my-6">
            <Image
              className="w-60 md:w-80 lg:w-[440px] aspect-square"
              src={planet.image}
              alt="Europa"
            />
          </div>
          <div>
            <div className="flex items-center justify-center text-secondary space-x-6 nav-text md:text-[16px] lg:justify-start">
              {planets.map(({ name }, index) => (
                <div
                  key={name}
                  onClick={() => setActualPlanet(index)}
                  className={`relative py-2 border-b-2 border-transparent cursor-pointer transition [&:not(.active)]:hover:border-current [&.active]:text-white  ${
                    !index && "active"
                  }`}
                >
                  {name}
                  {planet.name === name && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-white" />
                  )}
                </div>
              ))}
            </div>
            <div className="text-secondary text-center lg:text-left">
              <h3 className="mt-5 uppercase text-white lg:text-[100px]">
                {planets[actualPlanet].name}
              </h3>
              <p className="leading-relaxed lg:text-[18px]">
                {" "}
                {planets[actualPlanet].description}{" "}
              </p>
              <hr className="my-8 border-secondary/25" />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="w-fit mx-auto uppercase lg:mx-0">
                  <span className="block sub-2">avg. distance</span>
                  <span className="block sub-1 text-white">
                    {" "}
                    {planets[actualPlanet].distance}{" "}
                  </span>
                </div>
                <div className="w-fit mx-auto uppercase lg:mx-0">
                  <span className="block sub-2">est. travel time</span>
                  <span className="block sub-1 text-white">
                    {" "}
                    {planets[actualPlanet].time}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
