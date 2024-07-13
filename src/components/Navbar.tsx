"use client"

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <main>
      <Navbar onMenuOpenChange={setIsMenuOpen} classNames={{base: "!justify-between", wrapper: "!max-w-full !pl-[59px] !pr-[108px] !h-[96px] !bg-backgroundColor"}}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={"/assets/Logo.svg"} alt="logo" width={73} height={80} className="flex-shrink-0"/>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="!gap-[51px]">
        <NavbarContent className="hidden sm:flex gap-2.5 text-base" justify="end">
          <NavbarItem className="p-2.5 border-b border-primary">
            <Link color="foreground" href="#">
              How It Works
            </Link>
          </NavbarItem>
          <NavbarItem className="p-2.5" isActive>
            <Link href="#" aria-current="page">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem className="p-2.5">
            <Link color="foreground" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="!max-w-[194px]">
          <NavbarItem className="hidden lg:flex bg-gradient-to-r from-[#2D338F66] to-[#17B2A21A] rounded-[16px] p-px">
            <Button as={Link} className="text-black w-[85px] p-2.5 text-base bg-backgroundColor rounded-[15px]" href="#">
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className="bg-primary text-textColorLight w-[95px] p-2.5 text-base rounded-[15px]" href="/auth/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </main>
  );
}
