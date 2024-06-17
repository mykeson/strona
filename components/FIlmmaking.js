import React from "react";

export default function Filmmaking() {
  return (
    <div className="w-screen">
      <div className="w-[1200px] m-0">
        <h1 className="mt-32 mb-16 flex gap-3 flex-wrap justify-center font-light sm:text-5xl lg:text-6xl text-gray-800">
          Doświadcz to
        </h1>
        {/* Video 1*/}
        <div className="flex">
          <video autoPlay muted playsInline loop className="w-[50rem]">
            <source src="/video/cool_video.mp4" type="video/mp4" />
          </video>
          <h2 className="flex self-center m-auto">Fabuła</h2>
        </div>
        {/* Opis Fabuła */}
        <p className="mt-16">
          <span className="text-logored">Lorem</span> ipsum dolor sit amet,
          consectetur adipiscing elit. Duis vulputate sem at ex ultrices, nec
          egestas massa convallis. Aenean vel metus sit amet nibh vestibulum
          aliquet. Aliquam id facilisis elit. Proin non varius dolor. Vestibulum
          hendrerit in ligula id accumsan. Morbi nec tortor risus. Nunc
          sollicitudin scelerisque posuere. Quisque libero ex, pharetra vel nisi
          id, ultricies viverra lorem. Nunc dignissim turpis diam, vel gravida
          massa placerat eget.
        </p>
        {/* Zdjęcia 1 */}
        <div className="relative flex justify-center mt-28">
          <div className="absolute left-0 top-[80px] w-[200px] bg-gray-300">
            <img
              src="img/fv1.JPG"
              alt="fv1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute left-[250px] top-0 w-[350px] bg-gray-300">
            <img
              src="img/fh1.JPG"
              alt="fh1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-[280px] top-[280px] w-[350px] bg-gray-300">
            <img
              src="img/fh2.JPG"
              alt="fh2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-0 w-[200px] bg-gray-300">
            <img
              src="img/fv2.JPG"
              alt="fv2"
              className="w-full h-full object-cover"
            />
          </div>
          {/* div separating relative elements from the rest of the page */}
          <div className="h-[700px]"></div>
        </div>
      </div>
      <div className="bg-blacky w-full h-[1650px] -skew-y-[5deg] absolute" />
      <img
        src="img/filmtape.svg"
        alt="filmtape"
        className="absolute -rotate-[75deg] opacity-40 h-fit w-96"
      />
      <div className="w-[1200px] relative mt-56 m-auto">
        {/* Video 2 */}
        <div className="flex items-center justify-between">
          <h2 className="text-whity m-auto self-center">Eventy</h2>
          <video autoPlay muted playsInline loop className="w-[50rem]">
            <source src="/video/cool_video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Opis Eventy */}
        <p className="mt-24 text-whity">
          <span className="text-logored">Lorem</span> ipsum dolor sit amet,
          consectetur adipiscing elit. Duis vulputate sem at ex ultrices, nec
          egestas massa convallis. Aenean vel metus sit amet nibh vestibulum
          aliquet. Aliquam id facilisis elit. Proin non varius dolor. Vestibulum
          hendrerit in ligula id accumsan. Morbi nec tortor risus. Nunc
          sollicitudin scelerisque posuere. Quisque libero ex, pharetra vel nisi
          id, ultricies viverra lorem. Nunc dignissim turpis diam, vel gravida
          massa placerat eget.
        </p>
        {/* Zdjęcia 2 */}
        <div className="relative flex mt-48">
          <img
            src="img/fv1.JPG"
            alt="fv1"
            className="w-[420px] h-fit absolute"
          />
          <img
            src="img/fh1.JPG"
            alt="fh1"
            className="w-[420px] h-fit -mt-16 right-[250px] absolute"
          />
          <img
            src="img/fh2.JPG"
            alt="fh2"
            className="w-[420px] h-fit top-[300px] right-[50px] absolute"
          />
        </div>
      </div>
    </div>
  );
}
