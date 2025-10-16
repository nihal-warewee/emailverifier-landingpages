import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';
import DiamondSvg from '@/assets/DiamondSvg';
import TargetWithArrowSvg from '@/assets/TargetWithArrowSvg';
import BlissSvg from '@/assets/BlissSvg';
import CheckSvg from '@/assets/CheckSvg';
import LightningSmallSvg from '@/assets/LightningSmallSvg';
import LoopArrowSvg from '@/assets/LoopArrowSvg';
import LightningBigSvg from '@/assets/LightningBigSvg';

// Helper to format numbers with commas
const numberFormatter = new Intl.NumberFormat('en-US');

const PRESETS = [10000, 25000, 50000, 100000, 500000, 1000000, 5000000, 10000000];

// Helper to format large numbers into K, M
const formatLabel = (value: number) => {
  if (value >= 1000000) return `${value / 1000000}M`;
  if (value >= 1000) return `${value / 1000}K`;
  return value;
};

export default function Pricing() {
  const [volume, setVolume] = useState<number>(10000);
  const min = 1000;
  const max = 10000000;

  const handleVolumeChange = (value: number) => {
    const newVolume = Math.max(min, Math.min(max, value));
    setVolume(newVolume);
  };

  const increaseVolume = () => {
    // Increase by a reasonable step
    const step = volume < 100000 ? 1000 : 10000;
    handleVolumeChange(volume + step);
  };

  const decreaseVolume = () => {
    const step = volume <= 100000 ? 1000 : 10000;
    handleVolumeChange(volume - step);
  };

  // Calculate the slider progress percentage
  const sliderProgress = useMemo(() => {
    return ((volume - min) / (max - min)) * 100;
  }, [volume, min, max]);


  return (
    <section id="pricing" className="w-full bg-blue-50 py-16 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 lg:text-4xl">
            Smart Email Verification Pricing
          </h2>
          <p className="mt-3 lg:text-2xl text-gray-900">
            Choose your volume, see instant pricing. No surprises.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="mt-12 max-w-7xl mx-auto bg-white rounded-xl p-4 lg:py-10 lg:px-16">
          <label htmlFor="email-volume" className=" text-gray-800 text-xl">
            Email Volume
          </label>
          <div className="mt-5 flex flex-wrap lg:flex-nowrap lg:items-center gap-2 sm:gap-4">
            <button
              className="h-12 w-11 lg:w-20 border border-gray-600 bg-blue-50
               text-2xl grid place-items-center rounded-md"
              onClick={decreaseVolume}><MinusIcon /></button>
            <input
              id="email-volume"
              type="text"
              readOnly
              value={numberFormatter.format(volume)}
              className="h-12 w-auto lg:w-full flex-1 text-center text-xl font-semibold border-gray-600 
              focus-visible:ring-0 border rounded-md"
            />
            <button
              className="h-12 w-11 lg:w-20 border border-gray-600 bg-blue-50
              text-2xl grid place-items-center rounded-md"
              onClick={increaseVolume}><PlusIcon /></button>
            <Button className="h-12 flex-1 md:flex-none px-6 md:px-16 text-base sm:text-lg 
            bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-700 text-white
            lg:ml-8">Calculate</Button>
          </div>

          {/* Custom Range Slider with progress fill */}
          <div className="mt-12 pt-2">
            <div className="relative h-2 w-full">
              {/* Gray background track */}
              <div className="absolute h-4 w-full rounded-full bg-gray-200 top-1/2 -translate-y-1/2"></div>
              {/* Blue progress track */}
              <div
                className="absolute h-4 rounded-full bg-blue-600 top-1/2 -translate-y-1/2"
                style={{ width: `${sliderProgress}%` }}
              ></div>
              <input
                type="range"
                min={min}
                max={max}
                step="1000"
                value={volume}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                className="absolute w-full h-4 appearance-none bg-transparent custom-slider top-1/2 -translate-y-1/2"
              />
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-900 mt-2 px-1">
              <span>1K</span>
              <span>100K</span>
              <span>1M</span>
              <span>10M</span>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 lg:gap-8">
            {PRESETS.map((preset) => (
              <button
                key={preset}
                onClick={() => handleVolumeChange(preset)}
                className={`px-6 py-[0.4em] rounded-md text-sm font-semibold transition-colors ${volume === preset
                  ? 'bg-blue-200 text-gray-900 border border-gray-900 shadow-md'
                  : 'bg-blue-50 text-gray-900 border border-gray-900 hover:bg-gray-50'
                  }`}
              >
                {formatLabel(preset)}
              </button>
            ))}
          </div>
        </div>

        {/* ---- Pricing Cards Section ---- */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Card 1: One-Time Purchase */}
          <div className="bg-white shadow-sm h-full flex flex-col">
            <div className="flex-grow">
              <div className='px-8 pt-8 pb-4 border-b border-gray-300 shadow-sm'>
                <span className="inline-flex gap-2 items-center px-3 py-1 text-xs font-semibold text-blue-900 bg-blue-100 rounded-full">
                  <DiamondSvg />
                  ONE-TIME PURCHASE
                </span>
                <div className="mt-4 flex flex-col gap-4">
                  <TargetWithArrowSvg />
                  <h3 className="text-2xl font-semibold text-gray-900">Verification Credits</h3>
                </div>
                <p className=" text-gray-800">500K never-expiring verification credits</p>
              </div>

              <div className='px-8 pb-8'>
                <div className="mt-6 bg-gradient-to-r from-[#8AB1FE]/30 to-[#BB9EFF]/30 rounded-lg p-3 text-center">
                  <p className="text-sm font-semibold text-gray-500">Pay once, Use Forever</p>
                  <p className="mt-2 text-5xl font-extrabold text-gray-900">$900</p>
                  <p className="mt-2 text-base text-gray-500">$1.80 per 1,000 emails</p>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-800 inline-flex gap-2 items-center">
                    <BlissSvg />
                    What's Included</h4>
                  <ul className="mt-4 space-y-3 text-gray-900">
                    <li className="flex items-center gap-3">
                      <CheckSvg /> Bulk Email Verification
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckSvg /> Real-time API Access
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckSvg /> CSV List Cleaning
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckSvg /> Disposable Email Detection
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckSvg /> Rule-based Filtering
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckSvg /> No Expiration Date
                    </li>
                  </ul>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 *:rounded-md *:text-lg *:font-medium hover:shadow-sm *:p-[0.4em]">
                  <button className="border text-blue-800 border-blue-900 w-full hover:shadow-xl">Learn More</button>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-900 text-white hover:shadow-xl">Buy Credits →</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Monthly Subscription (Highlighted) */}
          <div className="bg-white shadow-sm h-full flex flex-col">
            <div className="flex-grow">
              <div className='px-8 pt-8 pb-4 bg-gradient-to-r from-black to-blue-700'>
                <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-white bg-white/30 rounded-full">
                  <LightningSmallSvg />
                  MONTHLY SUBSCRIPTION
                </span>
                <div className="mt-4 flex flex-col gap-3">
                  <LoopArrowSvg />
                  <h3 className="text-2xl text-white font-bold">
                    Automated Verification</h3>
                </div>
                <p className="text-slate-50">Verify up to 500K emails daily on autopilot</p>
              </div>

              <div className='px-8 pb-8'>
                <div className="mt-6 bg-gradient-to-r from-[#8AB1FE]/30 to-[#BB9EFF]/30 rounded-lg p-3 text-center text-gray-900">
                  <p className="text-sm font-semibold text-gray-500">Monthly Renewal</p>
                  <p className="mt-1 text-5xl font-extrabold inline-flex flex-col">$899 <span className="text-xl font-medium text-gray-500">/month</span></p>
                  <p className="mt-1 text-sm text-gray-500">Cancel anytime, no commitment</p>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold inline-flex gap-2 items-center">
                    <LightningBigSvg />
                    Premium Features</h4>
                  <ul className="mt-4 space-y-3 text-black">
                    <li className="flex items-center gap-3">
                      <CheckSvg /> Daily Auto-Verification
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckSvg /> Priority API Speed
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckSvg /> Webhook Notifications
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckSvg /> Team Collaboration
                    </li>
                  </ul>
                </div>
                <div className="mt-24 flex flex-col sm:flex-row gap-4 *:rounded-md *:text-lg *:font-medium hover:shadow-sm *:p-[0.4em]">
                  <button className="border text-blue-800 border-blue-900 w-full hover:shadow-xl">View Details</button>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-900 text-white hover:shadow-xl">Start Now →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}