import Image from "next/image";
import Nawigacja from "@/components/navigation/Nawigacja";

export default function Main() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-[1fr_1fr] w-fit gap-8">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col self-end justify-end">
            <img
              src="inspiracja.jpg"
              className="object-contain w-full flex-shrink max-w-[60%] h-auto"
              alt="Inspiracja"
            />
            <div className="flex items-strech inline-block">
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
          </div>
        </div>
        <div className="justify-self-start mt-32">
          <div className="max-w-[75%]">
            <div className="flex flex-col mb-10 place-items-end ml-auto mr-0">
              <h1 className="font-light text-6xl text-gray-800">
                Michał Czaniecki
              </h1>
              <h2 className="font-normal text-2xl text-gray-700">
                <span className="text-logored">Filmmaker</span> & Editor
              </h2>
            </div>
            <img
              src="portrait.jpeg"
              className="object-contain w-full h-auto"
              alt="Portrait"
            />
          </div>
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
