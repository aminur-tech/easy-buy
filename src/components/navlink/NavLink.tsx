"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, label, className = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-medium transition relative px-2 py-1
        ${isActive
          ? "text-primary after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-primary"
          : "text-base-content hover:text-primary"
        }
        ${className}`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
