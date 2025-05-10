/** @format */
"use client";
import { motion } from "framer-motion";
import {
  Add,
  Call,
  CloseSquare,
  Designtools,
  HambergerMenu,
  Home,
  Home2,
  Home3,
  InfoCircle,
  User,
  UserSquare,
} from "iconsax-react";
import React, { useState } from "react";
import Image from "next/image";

import Logo from "../../../public/logo.png";

import { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import BaseButton from "../Button/BaseButton";

function LandingNavbar() {
  const scrollto = () => {
    scroll.scrollTo(800);
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // تمیزکاری در unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div className=" w-full h-14  z-40   flex justify-between items-center p-8  sticky lg:top-4  mx-auto">
        <div className=" hidden xl:block">LOGO</div>
        <div className=" hidden bg-white/30 backdrop-blur-lg rounded-3xl py-4 xl:flex  justify-center shadow-lg px-24 gap-10">
          <Link
            to="hero"
            // onClick={scrollto}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className=" flex gap-3 text-black   hover:bg-primary/20 hover:text-black cursor-pointer px-4 py-2  duration-200 rounded-3xl  h-full items-center"
          >
            <Home2 />
            <p className=" font-semibold text-lg">صفحه اصلی</p>
          </Link>

          <Link
            to="FirstSection"
            // onClick={scrollto}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className=" flex gap-3 text-black  hover:bg-primary/20 hover:text-black cursor-pointer px-4 py-2  duration-200 rounded-3xl  h-full items-center"
          >
            <Designtools />
            <p className=" font-semibold text-lg">منوی طعم نما</p>
          </Link>

          <Link
            to="secondSection"
            // onClick={scrollto}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className=" flex gap-3 text-black  hover:bg-primary/20 hover:text-black cursor-pointer px-4 py-2  duration-200 rounded-3xl  h-full items-center"
          >
            <User />
            <p className=" font-semibold text-lg">ارتباط با ما</p>
          </Link>

          <Link
            to="thirdSection"
            // onClick={scrollto}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className=" flex gap-3 text-black  hover:bg-primary/20 hover:text-black cursor-pointer px-4 py-2  duration-200 rounded-3xl  h-full items-center"
          >
            <InfoCircle />
            <p className=" font-semibold text-lg">درباره ما</p>
          </Link>
        </div>

        <div className=" hidden xl:block">
          <BaseButton>پنل کاربری</BaseButton>
        </div>

        <div className=" w-full xl:hidden flex items-center justify-between">
          <HambergerMenu
            onClick={() => setIsOpen(true)}
            size={24}
            className={` duration-200 cursor-pointer text-black`}
          />

          <div className=" text-2xl">LOGO</div>

          <div className=" xl:hidden">
            <div className=" rounded-full border-4 w-9 h-9 flex justify-center items-center border-primary">
              <User size={20} className=" text-black" />
            </div>
          </div>
        </div>

        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className=" w-full xl:hidden z-40 bg-white/30 backdrop-blur-lg py-10 absolute top-0 bottom-0 min-h-screen right-0"
          >
            <div className=" absolute   right-6 top-4">
              <Add
                onClick={() => setIsOpen(false)}
                className={` duration-200 text-black rotate-45 ${
                  isOpen ? "block" : "hidden"
                } `}
                size={32}
              />
            </div>
            <div className=" w-full p-4 gap-2 rounded-lg  flex items-center flex-col absolute justify-start right-0 ">
              <Link
                to="hero"
                onClick={() => setIsOpen(false)}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className=" flex gap-3 text-black p-2 hover:bg-primary/20  cursor-pointer duration-200 rounded-lg  h-full items-center"
              >
                <Home2 />
                <p className=" font-semibold">صفحه اصلی</p>
              </Link>

              <Link
                to="FirstSection"
                // onClick={scrollto}
                onClick={() => setIsOpen(false)}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className=" flex gap-3 p-2 text-black hover:bg-primary/20  cursor-pointer duration-200 rounded-lg  h-full items-center"
              >
                <Designtools />
                <p className=" font-semibold">منوی طعم نما</p>
              </Link>

              <Link
                to="secondSection"
                onClick={() => setIsOpen(false)}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className=" flex gap-3 p-2 text-black   hover:bg-primary/20 cursor-pointer duration-200 rounded-lg  h-full items-center"
              >
                <Call />
                <p className=" font-semibold">ارتباط با ما</p>
              </Link>

              <Link
                to="thirdSection"
                onClick={() => setIsOpen(false)}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className=" flex gap-3 p-2 text-black hover:bg-primary/20 cursor-pointer duration-200 rounded-lg h-full items-center"
              >
                <InfoCircle />
                <p className=" font-semibold">درباره ما</p>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </div>
    </>
  );
}

export default LandingNavbar;
