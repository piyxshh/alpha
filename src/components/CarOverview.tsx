
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, Gauge, Wrench } from 'lucide-react';

export default function CarOverview() {
  const car = {
    name: 'Modern Silver SUV',
    modelYear: '2023',
    mileage: '15,000 km',
    transmission: 'Automatic',
    price: '28,500',
  };

  return (
    <Card className="shadow-lg border transition-all duration-300 hover:shadow-xl">
      <CardHeader className="bg-slate-50 rounded-t-lg">
        <CardTitle className="text-2xl font-bold tracking-tight">{car.name}</CardTitle>
        <CardDescription className="flex items-center gap-4 pt-2 text-sm">
          <span className="flex items-center gap-1.5"><Calendar size={14} /> {car.modelYear}</span>
          <span className="flex items-center gap-1.5"><Gauge size={14} /> {car.mileage}</span>
          <span className="flex items-center gap-1.5"><Wrench size={14} /> {car.transmission}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator />
      </CardContent>
      <CardFooter className="bg-slate-50 flex items-center justify-between rounded-b-lg py-4">
        <p className="text-3xl font-extrabold text-slate-800">${car.price}</p>
        <Badge variant="default">Fixed Price</Badge>
      </CardFooter>
    </Card>
  );
}