"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nawigacja() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      text: "O mnie",
      href: "/o-mnie",
    },
    {
      text: "Moje realizacje",
      href: "/realizacje",
    },
    {
      text: "Kontakt",
      href: "/kontakt",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const menuElement = document.querySelector(".menu");
    if (menuElement) {
      if (isOpen) {
        menuElement.classList.add("menu-enter");
        setTimeout(() => {
          menuElement.classList.remove("menu-enter");
          menuElement.classList.add("menu-enter-active");
        }, 10);
      } else {
        menuElement.classList.add("menu-exit");
        setTimeout(() => {
          menuElement.classList.remove("menu-exit");
          menuElement.classList.add("menu-exit-active");
        }, 10);
      }
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-whity fixed z-[999]">
      <nav
        className={`bg-whity fixed flex w-full justify-between items-center px-10 border-b`}
      >
        <img src="mykeson_logo_black.svg" alt="mykeson_logo" width="190px" />
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <ul className="hidden md:flex gap-20 text-lg text-blacky items-center">
          {navLinks.map((link, i) => (
            <NavElement key={i} text={link.text} href={link.href} />
          ))}
        </ul>
      </nav>
      {isOpen && (
        <div
          className={`menu md:hidden fixed end-0 top-[97.44px] bg-whity p-8 h-full z-40 flex overlay${
            isOpen ? "active" : ""
          }`}
          onClick={closeMenu}
        >
          <ul
            className="h-[16rem] menu text-xl grid grid-cols-1 divide-y-[1px]"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link, i) => (
              <NavElement key={i} text={link.text} href={link.href} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function NavElement({ text, href }) {
  return (
    <li className="py-2 px-4">
      <Link href={href} className="text-black hover:text-gray-700">
        {text}
      </Link>
    </li>
  );
}
