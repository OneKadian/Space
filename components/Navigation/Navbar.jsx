"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavElements from "./NavElements"; // Assuming you export NavElements from your NavElements component
import SideMenu from "./Sidebar"; // Assuming you export SideMenu from your SideMenu component

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin"
          />
        </Link>

        {/* Responsive NavElements */}
        <NavElements />

        <div className="flex flex-row gap-5">
          <SideMenu />
        </div>
      </div>

      {/* Mobile Side Menu */}
    </div>
  );
};
