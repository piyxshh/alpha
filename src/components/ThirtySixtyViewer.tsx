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

export default function ThirtySixtyViewer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          View 360°
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>360° Interactive View</DialogTitle>
          <DialogDescription>
            A full interactive view would be enabled here.
          </DialogDescription>
        </DialogHeader>
        <div className="relative mt-4 flex justify-center">
          {/* Using a standard img tag for the GIF */}
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