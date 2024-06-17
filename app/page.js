"use client";

import { useState } from "react";
import Image from "next/image";
import Nawigacja from "@/components/navigation/Nawigacja";
import Arrows from "@/components/Arrows";
import Filmmaking from "@/components/FIlmmaking";

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState("Filmmaking");

  const renderContent = () => {
    switch (selectedCategory) {
      case "Dancing":
        return (
          <div>
            <h1 className="mt-32 flex gap-3 flex-wrap justify-center font-light sm:text-5xl lg:text-6xl text-gray-800">
              Poczuj to
            </h1>
          </div>
        );
      case "Filmmaking":
        return <Filmmaking />;
      case "Computer Science":
        return (
          <div>
            <h1 className="mt-32 flex gap-3 flex-wrap justify-center font-light sm:text-5xl lg:text-6xl text-gray-800">
              Doceń to
            </h1>
          </div>
        );
      default:
        return <div>Select a category to see the content</div>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-48">
      <div className="grid grid-cols-[1fr_1fr] gap-6">
        {/* Left col */}
        <div className="self-start justify-self-end flex flex-col">
          <img
            src="inspiracja.jpg"
            className="block w-full max-w-[28rem]"
            alt="Inspiracja"
          />
          {/* Arrows */}
          <div className="flex mt-4 justify-start items-center gap-2">
            <img
              src="/img/insta_logo.svg"
              alt="insta_logo"
              className="h-[18px] opacity-70"
            />
            <p className=" leading-none">@myk_eson</p>
          </div>
          <div className="flex mt-2 justify-start items-center gap-2">
            <img
              src="/img/mail_icon.svg"
              alt="mail_icon"
              className="h-[20px] self-start opacity-70"
            />
            <p className="leading-none">mikesoncz@gmail.com</p>
          </div>
          <div className="self-start flex flex-col-2 mt-[4.5rem]">
            <h2 className="font-normal">
              Poznaj moje
              <span className="text-logored tracking-widest"> Pasje</span>
            </h2>
            <Arrows />
          </div>
        </div>
        {/* Right col */}
        <div className="self-end justify-self-start flex flex-col items-end">
          <h1 className="flex gap-3 flex-wrap justify-end font-light sm:text-5xl lg:text-6xl text-gray-800">
            <span>Michał</span>
            <span>Czaniecki</span>
          </h1>
          <h2 className="font-normal text-lg lg:text-2xl text-gray-700 mb-10">
            Personal{" "}
            <span className="text-logored tracking-widest">Portfolio</span>
          </h2>
          <img
            src="portrait.jpeg"
            className="block w-full max-w-[27rem]"
            alt="Portrait"
          />
        </div>
      </div>
      <div className="w-[70rem] mt-28">
        <ul className="grid grid-cols-3 text-center">
          <li
            className={`cursor-pointer ${
              selectedCategory === "Dancing" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("Dancing")}
          >
            Dancing
          </li>
          <li
            className={`cursor-pointer ${
              selectedCategory === "Filmmaking" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("Filmmaking")}
          >
            Filmmaking
          </li>
          <li
            className={`cursor-pointer ${
              selectedCategory === "Computer Science" ? "selected" : ""
            }`}
            onClick={() => setSelectedCategory("Computer Science")}
          >
            Computer Science
          </li>
        </ul>
      </div>
      <div className="mt-10">{renderContent()}</div>
    </div>
  );
}
