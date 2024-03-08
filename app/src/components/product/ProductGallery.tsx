import React, { useState } from "react";
import { gallery, type Gallery } from "../../data/gallery";
import { useLightBoxStore } from "../../stores/LigthBoxStore";
import { NextIcon } from "../icons/NextIcon";
import { PreviousIcon } from "../icons/PreviousIcon";

export const ProductGallery = () => {
  const [display, setDisplay] = useState<Gallery>(gallery[0]);

  const { image, alt, prev, next, id } = display;
  const setOpen = useLightBoxStore((state) => state.setOpen);

  const handleDisplay = (image: Gallery) => setDisplay(image);
  const handleLightBox = () => {
    if (window.screen.width > 800) {
      setOpen();
    }
  };
  return (
    <section className='relative w-full flex flex-col lg:gap-y-5 justify-center lg:px-10 '>
      <picture>
        <img
          src={image}
          alt={alt}
          className='lg:w-2/3 lg:rounded-lg'
          onClick={handleLightBox}
        />
      </picture>
      <Thumbnails behavior={handleDisplay} DisplayedId={id} />
      <Arrows prev={prev} next={next} behavior={handleDisplay} />
    </section>
  );
};

const Thumbnails = ({
  behavior,
  DisplayedId,
}: {
  behavior: (image: Gallery) => void;
  DisplayedId:number
}) => {
  return (
    <div className='flex gap-3 w-2/3 justify-between max-lg:hidden'>
      {gallery.map((item) => (
        <picture key={item.id} className='relative group'>
          <img
            src={item.thumbnail}
            alt={item.alt}
            className='w-20 rounded-xl'
          />
          <div
            className={`w-full h-full transition ease-linear duration-75 bg-transparent group-hover:bg-white/80 group-hover:border-2 group-hover:border-primary absolute top-0 rounded-xl cursor-pointer
            ${DisplayedId == item.id && 'bg-white/80 border-2 border-primary'}
            `}
            onClick={() => {
              behavior(item);
            }}
          ></div>
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
        <Arrow
          behavior={handlePrev}
          title="Previous Image"
          arialLabel="Previous Image"
        >
          <PreviousIcon />
        </Arrow>
        <Arrow behavior={handleNext} title="Next Image" arialLabel="Next Image">
          <NextIcon />
        </Arrow>
      </ul>
    </div>
  );
};

const Arrow = ({
  children,
  behavior,
  title,
  arialLabel,
}: {
  children: React.ReactNode;
  behavior: () => void;
  title: string;
  arialLabel: string;
}) => {
  return (
    <li className="bg-white px-2 py-1.5 rounded-full text-center">
      <a href="#arrow" onClick={behavior} title={title} aria-label={arialLabel}>
        {children}
      </a>
    </li>
  );
};
