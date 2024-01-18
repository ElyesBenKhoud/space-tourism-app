import React from "react";

function MemberDetails({ member }: any) {
  return (
    <div className="text-secondary text-center lg:text-left">
      <h4 className="uppercase mb-4  text-[16px] lg:text-[32px] ">
        {member.role}
      </h4>
      <h3 className="uppercase text-white mb-7 text-[24px] lg:text-[56px] ">
        {member.name}
      </h3>
      <p className="leading-relaxed lg:text-[18px] ">{member.description}</p>
    </div>
  );
}

export default MemberDetails;
