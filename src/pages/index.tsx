// pages/index.tsx
import ImageCarousel from '@/components/ImageCarousel';
import CarOverview from '@/components/CarOverview';
import PriceCalculator from '@/components/PriceCalculator';
import ThirtySixtyViewer from '@/components/ThirtySixtyViewer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <ImageCarousel />
            <ThirtySixtyViewer />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <CarOverview />
            <PriceCalculator />
          </div>
        </div>
      </div>
    </main>
  );
}