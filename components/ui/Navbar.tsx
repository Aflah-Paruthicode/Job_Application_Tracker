import { Briefcase } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href={"/"} className="flex items-center gap-3 text-xl font-semibold text-primary">
          <Briefcase />
          Job Tracker
        </Link>

        <div>
          <Link href={"/signIn"}>
            <Button variant={'ghost'} className="text-gray-700 hover:text-black">Log in</Button>
          </Link>

          <Link href={"/signUp"}>
            <Button className="bg-primary hover:bg-primary/90">Start for free</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
