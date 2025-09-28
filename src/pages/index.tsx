
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from '@/components/ImageCarousel';
import CarOverview from '@/components/CarOverview';
import PriceCalculator from '@/components/PriceCalculator';
import ThirtySixtyViewer from '@/components/ThirtySixtyViewer';
import ThumbnailGallery from '@/components/ThumbnailGallery'; 

const images = ['/images/car1.jpg', '/images/car2.jpg', '/images/car3.jpg'];

export default function Home() {
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        <motion.div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          <motion.div className="flex flex-col gap-4" >
            
            <ImageCarousel selectedIndex={selectedIndex} images={images} />
            <ThumbnailGallery
              images={images}
              currentIndex={selectedIndex}
              onSelect={setSelectedIndex}
            />
            <ThirtySixtyViewer />
          </motion.div>

          
          <motion.div className="flex flex-col gap-8" >
            <CarOverview />
            <PriceCalculator />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}