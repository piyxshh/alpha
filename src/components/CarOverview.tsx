// src/components/CarOverview.tsx
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function CarOverview() {
  const car = {
    name: 'Modern Silver SUV',
    modelYear: '2023',
    mileage: '15,000 km',
    transmission: 'Automatic',
    price: '28,500',
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{car.name}</CardTitle>
        <CardDescription>
          {car.modelYear} &bull; {car.mileage} &bull; {car.transmission}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="text-3xl font-bold">${car.price}</p>
        <Badge variant="secondary">Fixed Price</Badge>
      </CardFooter>
    </Card>
  );
}