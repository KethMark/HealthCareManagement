"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  CheckboxIcon,
  Cross2Icon,
  DashboardIcon,
  Pencil1Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Sidebar = () => {
  const { getPermissions } = useKindeBrowserClient();
  const item = [
    {
      titles: "Dashboard",
      hrefs: "/user",
      icon: DashboardIcon,
    },
    {
      titles: "Appointment",
      hrefs: "/user/healthcare",
      icon: Pencil1Icon,
      requiredPermission: ["create:appointment"],
    },
    {
      titles: "Status",
      hrefs: "/user/data",
      icon: CheckboxIcon,
      requiredPermission: ["create:appointment"],
    },
    {
      titles: "Approval",
      hrefs: "/user/admin",
      icon: PersonIcon,
      requiredPermission: ["create:medicalrecords"],
    },
    {
      titles: "Approved",
      hrefs: "/user/patient",
      icon: CheckIcon,
      requiredPermission: ["create:medicalrecords"],
    },
    {
      titles: "Cancel",
      hrefs: "/user/cancel",
      icon: Cross2Icon,
      requiredPermission: ["create:medicalrecords"],
    },
  ];

  const pathname = usePathname();

  return (
    <div className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1")}>
      {item.map((item) => {
        const permission = getPermissions();
        // Check if the user has the required permissions for this item
        if (
          !item.requiredPermission ||
          item.requiredPermission.every((p) =>
            permission.permissions?.includes(p)
          )
        ) {
          return (
            <Link
              key={item.hrefs}
              href={item.hrefs}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === item.hrefs
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline",
                "justify-start"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon />
                {item.titles}
              </div>
            </Link>
          );
        }
      })}
      {/* {item.map((item) => (
        <Link
          key={item.hrefs}
          href={item.hrefs}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.hrefs
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          <div className="flex items-center gap-3">
            <item.icon />
            {item.titles}
          </div>
        </Link>
      ))} */}
    </div>
  );
};

export default Sidebar;


