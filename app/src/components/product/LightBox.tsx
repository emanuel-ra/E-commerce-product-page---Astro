import { useState } from "react";
import { gallery, type Gallery } from "../../data/gallery";
import { useLightBoxStore } from "../../stores/LigthBoxStore";
import { CloseIcon } from "../icons/CloseIcon";
import { NextIcon } from "../icons/NextIcon";
import { PreviousIcon } from "../icons/PreviousIcon";
export const LightBox = () => {
  const [display, setDisplay] = useState<Gallery>(gallery[0]);

  const open = useLightBoxStore((state) => state.open);
  const setOpen = useLightBoxStore((state) => state.setOpen);
  const { image, alt, prev, next, id } = display;

  const handleDisplay = (image: Gallery) => setDisplay(image);

  return (
    <div
      className={`${
        open
          ? 'absolute flex justify-center items-center w-screen h-dvh top-0 bottom-0 right-0 overflow-hidden bg-black/75 '
          : 'hidden'
      }`}
    >
      <div className='relative w-2/3 lg:w-2/6 flex flex-col gap-y-3'>
        <div className='flex justify-end'>
          <a
            href='#Close'
            aria-label='Close Light Box'
            onClick={setOpen}
            className='group'
          >
            <CloseIcon classes='group-hover:fill-orange-500 fill-white' />
          </a>
        </div>
        <div className='relative mb-10'>
          <Arrows prev={prev} next={next} behavior={handleDisplay} />
          <picture>
            <img src={image} alt={alt} className='rounded-lg' />
          </picture>
        </div>
        <div className='flex gap-x-2 lg:gap-x-6 lg:px-20'>
          {gallery.map((item) => (
            <picture key={item.id}>
              <img
                onClick={() => setDisplay(item)}
                src={item.thumbnail}
                alt={item.alt}
                className={`rounded cursor-pointer border-2 border-theme-orange              
                `}
              />
            </picture>
          ))}
        </div>
      </div>
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
    <div className='absolute w-[110%] -left-[4%] md:w-[107%] top-[50%]'>
      <ul className='flex justify-between w-full'>
        <Arrow
          behavior={handlePrev}
          title='Previous Image'
          arialLabel='Previous Image'
        >
          <PreviousIcon />
        </Arrow>
        <Arrow behavior={handleNext} title='Next Image' arialLabel='Next Image'>
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
