import Image from "next/image";
import Nawigacja from "@/components/navigation/Nawigacja";
import Arrows from "@/components/Arrows";

export default function Main() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-rows-1 grid-cols-[1fr_1fr] gap-8 mt-28">
        {/* Left col */}
        <div className="self-start justify-self-end flex flex-col ">
          <img
            src="inspiracja.jpg"
            className="block w-full max-w-[25rem]"
            alt="Inspiracja"
          />
          {/* Arrows */}
          <div className="self-center flex ">
            <Arrows />
          </div>
        </div>
        {/* Right col */}
        <div className="self-end justify-self-start flex flex-col items-end">
          <h1 className="flex gap-3 flex-wrap justify-end font-light text-6xl text-gray-800">
            <span>Michał</span>
            <span>Czaniecki</span>
          </h1>
          <h2 className="font-normal text-2xl text-gray-700 mb-10">
            <span className="text-logored">Filmmaker</span> & Editor
          </h2>
          <img
            src="portrait.jpeg"
            className="block w-full max-w-[25rem]"
            alt="Portrait"
          />
        </div>
      </div>
    </div>
  );
}
{
  /* 
          <div className="absolute left-0 -bottom-52 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="currentColor"
              class="w-16 h-16"
            >
              <paths
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="currentColor"
              class="w-16 h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="currentColor"
              class="w-16 h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div> */
}
