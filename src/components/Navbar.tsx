"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/shared/logo.svg";
import BurgerIcon from "@/assets/shared/icon-hamburger.svg";
import closeBurger from "@/assets/shared/icon-close.svg";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen, "isOpen");
  return (
    <header className="relative z-30 flex justify-between items-center px-6 md:px-0 md:pl-10 lg:pt-10">
      <Image src={logo} alt="Logo" className="my-6 w-10 h-10 md:w-12 md:h-12" />

      <button
        className="relative z-20 w-6 h-6 md:hidden"
        onClick={() => {
          setIsOpen((state) => !state);
        }}
      >
        <Image
          src={BurgerIcon}
          alt="Menu"
          className={` transition ${
            isOpen && "opacity-0 "
          } absolute top-1/2 right-0 -translate-y-1/2 w-full h-full`}
        />

        <Image
          src={closeBurger}
          alt="Menu close"
          className={` transition ${
            isOpen && "opacity-100"
          } opacity-0 absolute top-1/2 right-0 -translate-y-1/2 w-full h-full`}
        />
      </button>
    </header>
  );
};
