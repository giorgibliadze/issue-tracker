import React from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { label: "Deshboard", href: "/" },
    { label: "Issues", href: "/" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
