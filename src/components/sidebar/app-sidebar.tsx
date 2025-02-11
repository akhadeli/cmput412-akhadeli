"use client";

import * as React from "react";
import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { NavMain } from "./navigation";

const navItems = [
  {
    title: "Navigation",
    items: [
      { title: "Home", url: "/" },
      {
        title: "Repository",
        url: "https://github.com/akhadeli/cmput412-akhadeli-code",
      },
      { title: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Exercises",
    items: [
      { title: "Exercise 1", url: "/exercises/ex1" },
      { title: "Exercise 2", url: "/exercises/ex2" },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">CMPUT 412 - akhadeli</span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* <form>
          <SidebarGroup className="py-0">
            <SidebarGroupContent className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <Input
                id="search"
                placeholder="Search the docs..."
                className="pl-8"
              />
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </SidebarGroupContent>
          </SidebarGroup>
        </form> */}
      </SidebarHeader>
      <SidebarContent>
        {navItems.map((item) => (
          <NavMain key={item.title} label={item.title} items={item.items} />
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
