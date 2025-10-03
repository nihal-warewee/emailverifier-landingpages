import React, { useMemo, useState } from 'react';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const numberFormatter = new Intl.NumberFormat('en-US');

const PRESETS = [10000, 25000, 50000, 100000, 500000, 1000000, 5000000];

export default function Pricing() {
  const [quantity, setQuantity] = useState<number>(50000);

  // $1 per 100 verifications
  const estimatedPrice = useMemo(() => {
    const q = Math.max(0, Math.floor(quantity || 0));
    return +(q / 100).toFixed(2);
  }, [quantity]);

  const handlePreset = (val: number) => setQuantity(val);

  const handleCalculate = () => {
    // Hook up to your pricing API or navigate if desired
    // For now, this just no-ops; the computed estimate is displayed below.
  };

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-8">
          Email Verification Prices
        </h2>

        <p className="text-2xl text-gray-700 mb-6">How many emails do you want to verify:</p>

        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>
            <Input
              type="number"
              min={0}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="pl-12 h-14 text-xl"
              placeholder="50000"
            />
          </div>

          <Button onClick={handleCalculate} className="h-14 px-8 text-white font-semibold text-lg bg-gradient-to-r from-teal-500 to-blue-600">
            Calculate price
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          {PRESETS.map((preset) => {
            const active = quantity === preset;
            return (
              <button
                key={preset}
                onClick={() => handlePreset(preset)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-colors ${
                  active
                    ? 'border-teal-600 text-teal-700 bg-teal-50'
                    : 'border-teal-400 text-teal-600 hover:bg-teal-50'
                }`}
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{numberFormatter.format(preset)}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 text-gray-600">
          <span className="text-lg">Estimated price: </span>
          <span className="text-2xl font-bold text-gray-900">${numberFormatter.format(estimatedPrice)}</span>
        </div>
      </div>
    </section>
  );
}