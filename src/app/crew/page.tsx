/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";

import Image from "next/image";
import { members } from "./TeamMembers";

import mobile from "@/assets/crew/background-crew-mobile.jpg";
import tablet from "@/assets/crew/background-crew-tablet.jpg";
import desktop from "@/assets/crew/background-crew-desktop.jpg";

import { usePrevious } from "@mantine/hooks";
import { useMemo, useState } from "react";
import Background from "@/components/Background";
import PageTitle from "@/components/PageTitle";
function page() {
  let [actualMember, setActualMember] = useState(0);

  const member = useMemo(() => members[actualMember], [actualMember]);

  return (
    <>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />

      <main className="relative z-10 flex flex-col-reverse p-6 md:px-24 lg:pt-12 lg:min-h-[80vh] lg:grid lg:grid-cols-2">
        <div className="flex flex-col-reverse relative z-10 lg:flex-col lg:justify-between">
          <div className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10 hidden lg:block">
            <PageTitle number={2} title="Meet Your crew" />
          </div>
          <div className="text-secondary text-center lg:text-left">
            <h4 className="uppercase mb-4  text-[16px] lg:text-[32px] ">
              {member.role}
            </h4>
            <h3 className="uppercase text-white mb-7 text-[24px] lg:text-[56px] ">
              {member.name}
            </h3>
            <p className="leading-relaxed lg:text-[18px] ">
              {member.description}
            </p>
          </div>
          <div className="flex gap-x-6 my-8 justify-center lg:justify-start">
            {members.map(({ name }, index) => (
              <div
                onClick={() => setActualMember(index)}
                key={index}
                className={`w-3 aspect-square rounded-full transition cursor-pointer opacity-40 bg-white [&.active]:opacity-100 [&:not(.active)]:hover:opacity-75 ${
                  member.name === name && "active"
                }`}
              />
            ))}
          </div>
        </div>
        <div
          key={member.name}
          className="border-b border-white/50 w-full md:fixed md:bottom-0 md:right-0 md:w-screen md:h-[532px]  lg:h-[712px] "
        >
          <Image
            src={member.image}
            alt={member.role}
            className="block mx-auto w-auto h-[222px] md:h-full lg:mx-0 lg:ml-auto lg:mr-20"
          />
        </div>
        <div className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10 lg:hidden">
          <PageTitle number={2} title="Meet Your crew" />
        </div>
      </main>
    </>
  );
}

export default page;
