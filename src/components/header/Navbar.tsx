"use client";
import React from "react";
import NavLink from "../navlink/NavLink";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "lucide-react";

const Navbar = () => {
    const { data: session, status } = useSession();

    const links = (
        <>
            <li>
                <NavLink href="/" label="Home" />
            </li>
            <li>
                <NavLink href="/products" label="Products" />
            </li>
            <li>
                <NavLink href="/dashboard" label="Dashboard" />
            </li>
            <li>
                <NavLink href="/about" label="About" />
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl">
                        EasyBuy
                    </Link>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-2 flex items-center">
                    {status === "loading" ? null : !session ? (
                        <>
                            <Link
                                href="/login"
                                className="btn bg-gradient-to-r from-blue-500 to-violet-600 text-white border-none hover:from-blue-600 hover:to-violet-700"
                            >
                                Go to Login
                            </Link>

                            <Link
                                href="/signup"
                                className="btn btn-outline hover:bg-gradient-to-r from-blue-500 to-violet-600 text-base-content "
                            >
                                Go to Signup
                            </Link>
                        </>
                    ) : (
                        <>

                            {/* Logout Button */}
                            <button
                                onClick={() => signOut({ callbackUrl: "/" })}
                                className="btn bg-gradient-to-r from-blue-500 to-violet-600 text-white border-none hover:from-blue-600 hover:to-violet-700"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
