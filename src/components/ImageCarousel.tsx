// src/components/ImageCarousel.tsx
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const images = [
  '/images/car1.png',
  '/images/car2.png',
  '/images/car3.png',
];

export default function ImageCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="relative aspect-video p-0">
                <Image
                  src={src}
                  alt={`Car image ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4" />
      <CarouselNext className="absolute right-4" />
    </Carousel>
  );
}