// src/components/PriceCalculator.tsx
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

export default function PriceCalculator() {
  const [invites, setInvites] = useState(50);
  const [duration, setDuration] = useState(4);
  const [calculatedValue, setCalculatedValue] = useState(0);

  useEffect(() => {
    const total = invites * 15 + duration * 100;
    setCalculatedValue(total);
  }, [invites, duration]);

  return (
    <Card className="shadow-lg border transition-all duration-300 hover:shadow-xl">
      <CardHeader className="bg-slate-50 rounded-t-lg">
        <CardTitle>Event Price Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 pt-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Number of Invites: {invites}
          </label>
          <Slider
            defaultValue={[50]}
            max={500}
            min={10}
            step={1}
            onValueChange={(value) => setInvites(value[0])}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Duration of Event (hours): {duration}
          </label>
          <Slider
            defaultValue={[4]}
            max={12}
            min={1}
            step={1}
            onValueChange={(value) => setDuration(value[0])}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex-col items-center rounded-b-lg bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white">
        <p className="text-sm opacity-80">Calculated Value</p>
        <p className="text-4xl font-extrabold tracking-tight">
          ${calculatedValue.toLocaleString()}
        </p>
      </CardFooter>
    </Card>
  );
}