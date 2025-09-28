// src/components/ThirtySixtyViewer.tsx
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Camera } from 'lucide-react';

export default function ThirtySixtyViewer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Camera className="mr-2 h-4 w-4" /> View 360°
        </Button>
      </DialogTrigger>
      {/* CORRECTED: Changed max-w-4xl to max-w-7xl */}
      <DialogContent className="max-w-7xl">
        <DialogHeader>
          <DialogTitle>360° Interactive View</DialogTitle>
          <DialogDescription>
            A full interactive view would be enabled here.
          </DialogDescription>
        </DialogHeader>
        <div className="relative mt-4 flex justify-center">
          <img
            src="/images/car-360.gif"
            alt="360 degree rotating view of the car"
            className="rounded-md"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}