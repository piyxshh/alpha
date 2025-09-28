// src/components/ImageCarousel.tsx
"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface ImageCarouselProps {
  images: string[];
  selectedIndex: number;
}

export default function ImageCarousel({ images, selectedIndex }: ImageCarouselProps) {
  return (
    <Card>
      <CardContent className="relative aspect-video p-0">
        <AnimatePresence>
          <motion.div
            key={selectedIndex} // This key tells AnimatePresence when the component changes
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={images[selectedIndex]}
              alt={`Car image ${selectedIndex + 1}`}
              fill
              className="rounded-lg object-cover"
              priority // Add priority for faster loading of the main image
            />
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}