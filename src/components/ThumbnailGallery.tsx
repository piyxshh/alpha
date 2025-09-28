
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ThumbnailGalleryProps {
  images: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export default function ThumbnailGallery({ images, currentIndex, onSelect }: ThumbnailGalleryProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="relative aspect-video cursor-pointer overflow-hidden rounded-md"
          onClick={() => onSelect(index)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={src}
            alt={`Thumbnail ${index + 1}`}
            fill
            className={`object-cover transition-all duration-300 ${
              currentIndex === index ? 'scale-110' : 'scale-100'
            }`}
          />
          
          <div
            className={`absolute inset-0 rounded-md border-2 transition-all duration-300 ${
              currentIndex === index
                ? 'border-blue-500'
                : 'border-transparent hover:border-gray-400'
            }`}
          />
        </motion.div>
      ))}
    </div>
  );
}