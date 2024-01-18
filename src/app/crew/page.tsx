/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect } from "react";
import { useMemo, useState } from "react";

import { members } from "./TeamMembers";

import Background from "@/components/Background";
import PageTitle from "@/components/PageTitle";
import MemberDetails from "@/components/MemberDetails";

import mobile from "@/assets/crew/background-crew-mobile.jpg";
import tablet from "@/assets/crew/background-crew-tablet.jpg";
import desktop from "@/assets/crew/background-crew-desktop.jpg";
import TeamMemberAvatar from "@/components/TeamMemberAvatar";
import MemberPagination from "@/components/memberPagination";

function page() {
  let [actualMember, setActualMember] = useState(0);

  const member = useMemo(() => members[actualMember], [actualMember]);
  const [activeIndex, setActiveIndex] = useState(0);

  const setNextMember = () => {
    const nextIndex = (activeIndex + 1) % members.length;
    setActualMember(nextIndex);
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNextMember();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex, setActualMember]);

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

          <MemberDetails member={member} />

          <MemberPagination
            member={member}
            setActualMember={setActualMember}
            activeIndex={activeIndex}
          />
        </div>

        <TeamMemberAvatar member={member} />

        <div className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10 lg:hidden">
          <PageTitle number={2} title="Meet Your crew" />
        </div>
      </main>
    </>
  );
}

export default page;
