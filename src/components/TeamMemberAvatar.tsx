import React from "react";
import Image from "next/image";

function TeamMemberAvatar({ member }: any) {
  return (
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
  );
}

export default TeamMemberAvatar;
