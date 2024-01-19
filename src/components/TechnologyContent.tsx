import { StaticImageData } from "next/image";
import React from "react";

interface technology {
  name: string;
  landscape: StaticImageData;
  portrait: StaticImageData;
  description: string;
}

interface TechnologyContentProps {
  technology: technology;
}
function TechnologyContent({ technology }: TechnologyContentProps) {
  return (
    <div className="text-secondary text-center px-6 md:max-w-lg md:mx-auto lg:text-left lg:max-w-xl">
      <span className="block nav-text uppercase mb-2 text-[14px] md:text-[16px] ">
        The Terminology ...
      </span>
      <h3 className="uppercase mb-4 text-white text-[24px] md:text-[40px] lg:text-[56px] ">
        {technology.name}
      </h3>
      <p className="leading-relaxed lg:leading-loose lg:text-[18px]">
        {technology.description}
      </p>
    </div>
  );
}

export default TechnologyContent;
