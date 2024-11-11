'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ user }) => {
  const pathname = usePathname();

  return (
    <div className="max-md:hidden flex gap-3 bg-black text-white rounded-full">
      <Link href={user ? "/learn" : "/login"} 
        className={`py-2 px-6 font-medium rounded-full ${pathname === '/learn' || pathname.startsWith('/courses') ? 'bg-dark-1 text-white' : 'hover:bg-green-700'}`}>
        Learn
      </Link>
      <Link href={user ? "/problems" : "/login"} 
        className={`py-2 px-6 font-medium rounded-full ${pathname === '/problems' ? 'bg-dark-1 text-white' : 'hover:bg-green-700'}`}>
        Problems
      </Link>
      <Link href={user ? "/contests" : "/login"} 
        className={`py-2 px-6 font-medium rounded-full ${pathname === '/contests' ? 'bg-dark-1 text-white' : 'hover:bg-green-700'}`}>
        Challenges
      </Link>
      <Link href={user ? "/interview" : "/login"} 
        className={`py-2 px-6 font-medium rounded-full ${pathname === '/interview' ? 'bg-dark-1 text-white' : 'hover:bg-green-700'}`}>
        Interview Prep
      </Link>
      {/* <Link href={user ? "/submissions" : "/login"} 
        className={`py-2 px-6 font-medium rounded-full ${pathname === '/news' ? 'bg-dark-1 text-white' : 'hover:bg-green-700'}`}>
        Submissions
      </Link>
      <Link href={user ? "/users" : "/login"} 
        className={`py-2 px-6 font-medium rounded-full ${pathname === '/news' ? 'bg-dark-1 text-white' : 'hover:bg-green-700'}`}>
        Registered Users
      </Link> */}
    </div>
  );
};

export default NavLinks;

