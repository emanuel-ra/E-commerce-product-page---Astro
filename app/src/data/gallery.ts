export interface Gallery {
  id: number;
  image: string;
  thumbnail: string;
  alt: string;
  prev: number;
  next: number;
}
export const gallery: Gallery[] = [
  {
    id: 1,
    image: "/images/image-product-1.jpg",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
    alt: "sneaker 1",
    prev: 3,
    next: 1,
  },
  {
    id: 2,
    image: "/images/image-product-2.jpg",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
    alt: "sneaker 2",
    prev: 0,
    next: 2,
  },
  {
    id: 3,
    image: "/images/image-product-3.jpg",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
    alt: "sneaker 3",
    prev: 1,
    next: 3,
  },
  {
    id: 4,
    image: "/images/image-product-4.jpg",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
    alt: "sneaker 4",
    prev: 2,
    next: 0,
  },
];
