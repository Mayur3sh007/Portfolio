"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#header",
      icon: <IconHome className="h-4 w-4 text-[#8A2BE2] dark:text-[#8A2BE2]" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconMessage className="h-4 w-4 text-[#8A2BE2] dark:text-[#8A2BE2]" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconUser className="h-4 w-4 text-[#8A2BE2] dark:text-[#8A2BE2]" />,
    },
    {
      name: "Approach",
      link: "#approach",
      icon: <IconMessage className="h-4 w-4 text-[#8A2BE2] dark:text-[#8A2BE2]" />,
    },
  ];

  return (
    <div className="relative w-full z-40">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
