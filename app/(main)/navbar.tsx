import Link from "next/link";
import React from "react";
import { SlashIcon } from "@radix-ui/react-icons";
import { Command, CommandInput } from "@/components/ui/command";
import { UserMenu } from "./userMenu";

export const Navbar = () => {
  return (
    <div className="container flex h-16 items-center">
      <div className="mr-4 hidden md:flex">
        <Link href="" className="mr-6 flex items-center space-x-2">
          <SlashIcon />
          <div className="text-center text-xs">
            <h1 className="font-bold">HEALTHCARE</h1>
            <span className="text-muted-foreground">Management System</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <Command className="rounded-md border shadow-xs">
            <CommandInput placeholder="Search" />
          </Command>
        </div>
        <UserMenu />
      </div>
    </div>
  );
};
