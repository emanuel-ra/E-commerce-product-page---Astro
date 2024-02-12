import React, { useState } from "react";
import { gallery, type Gallery } from "../../data/gallery";
import { NextIcon } from "../icons/NextIcon";
import { PreviousIcon } from "../icons/PreviousIcon";

export const ProductGallery = () => {
  const [display, setDisplay] = useState<Gallery>(gallery[0]);

  const { image, alt, prev, next } = display;

  const handleDisplay = (image: Gallery) => setDisplay(image);

  return (
    <section className="relative w-full flex flex-col lg:gap-y-5 justify-center lg:px-10 ">
      <picture>
        <img src={image} alt={alt} className="lg:w-2/3 lg:rounded-lg" />
      </picture>
      <Thumbnails behavior={handleDisplay} />
      <Arrows prev={prev} next={next} behavior={handleDisplay} />
    </section>
  );
};

const Thumbnails = ({ behavior }: { behavior: (image: Gallery) => void }) => {
  return (
    <div className="flex gap-3 w-2/3 justify-between max-lg:hidden">
      {gallery.map((item) => (
        <picture>
          <img
            src={item.thumbnail}
            alt={item.alt}
            key={item.id}
            className="w-20 rounded cursor-pointer"
            onClick={() => {
              behavior(item);
            }}
          />
        </picture>
      ))}
    </div>
  );
};
const Arrows = ({
  prev,
  next,
  behavior,
}: {
  prev: number;
  next: number;
  behavior: (image: Gallery) => void;
}) => {
  const handlePrev = () => {
    const image = gallery[prev];
    behavior(image);
  };
  const handleNext = () => {
    const image = gallery[next];
    behavior(image);
  };

  return (
    <div className="absolute w-full px-4 lg:hidden">
      <ul className="flex justify-between w-full">
        <Arrow behavior={handlePrev}>
          <PreviousIcon />
        </Arrow>
        <Arrow behavior={handleNext}>
          <NextIcon />
        </Arrow>
      </ul>
    </div>
  );
};

const Arrow = ({
  children,
  behavior,
}: {
  children: React.ReactNode;
  behavior: () => void;
}) => {
  return (
    <li className="bg-white px-2 py-1.5 rounded-full text-center">
      <a href="#" onClick={behavior}>
        {children}
      </a>
    </li>
  );
};
