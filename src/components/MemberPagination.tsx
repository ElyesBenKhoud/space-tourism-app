import { members } from "@/app/crew/TeamMembers";
import { StaticImageData } from "next/image";
import React from "react";

interface member {
  name: string;
  image: StaticImageData;
  role: string;
  description: string;
}
interface MemberPaginationProps {
  member: member;
  setActualMember: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
}
function MemberPagination({
  member,
  setActualMember,
  activeIndex,
}: MemberPaginationProps) {
  return (
    <div className="flex gap-x-6 my-8 justify-center lg:justify-start">
      {members.map(({ name }, index) => (
        <div
          onClick={() => setActualMember(index)}
          key={index}
          className={`w-3 aspect-square rounded-full transition cursor-pointer opacity-40 bg-white [&.active]:opacity-100 [&:not(.active)]:hover:opacity-75 ${
            (member.name === name && "active") ||
            (activeIndex === index && "active")
          }`}
        />
      ))}
    </div>
  );
}

export default MemberPagination;
