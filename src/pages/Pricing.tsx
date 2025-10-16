import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';

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
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.945068 5.25296C0.946943 5.30358 0.967568 5.35233 1.00132 5.38983L5.86882 10.4092C5.89694 10.4373 5.93444 10.4542 5.97382 10.458H6.03007C6.06944 10.4523 6.10507 10.4355 6.13319 10.4092L11.0007 5.38983C11.0363 5.35233 11.0588 5.30546 11.0644 5.25296L6.05069 4.29858L0.945068 5.25296Z" fill="#1F5DD8" />
                    <path d="M7.77382 5.25293H4.32007L5.97007 10.4579C5.98882 10.4617 6.00757 10.4617 6.02632 10.4579L7.77194 5.25293H7.77382Z" fill="#A9C0EE" />
                    <path d="M2.9005 2.57544C2.848 2.60169 2.80113 2.64106 2.7655 2.68794L0.982376 5.09919C0.952376 5.14419 0.939251 5.19856 0.944876 5.25106H11.0605C11.0661 5.19669 11.0511 5.14044 11.0193 5.09544L9.31675 2.68981C9.283 2.64106 9.238 2.60356 9.1855 2.57544H2.9005Z" fill="#A9C0EE" />
                    <path d="M6.04303 2.53613L4.32178 5.25113H7.77365L6.04303 2.53613Z" fill="#1F5DD8" />
                    <path d="M6.04321 2.53613L7.77384 5.25113L9.18571 2.57738C9.13321 2.55113 9.07509 2.53613 9.01696 2.53613H6.04321Z" fill="#1F5DD8" />
                    <path d="M3.06938 2.53613C3.01126 2.53613 2.95313 2.54926 2.90063 2.57551L4.32188 5.25113L6.04313 2.53613H3.06938Z" fill="#1F5DD8" />
                    <path d="M9.4706 2.58301C9.36747 2.43676 9.19685 2.34863 9.01685 2.34863H3.06935C2.89122 2.34863 2.72247 2.43488 2.6156 2.57738L0.830599 4.98863C0.710599 5.15176 0.725599 5.37488 0.866224 5.51926L5.73185 10.5386C5.8706 10.6811 6.10122 10.698 6.26622 10.5386L11.1318 5.51926C11.2706 5.37488 11.2893 5.15176 11.1731 4.98863L9.4706 2.58301ZM7.5131 5.44051L6.00372 9.94051L4.57685 5.44051H7.5131ZM4.66122 5.06551L6.0431 2.88676L7.4306 5.06551H4.66122ZM6.38435 2.72363H8.89497L7.75685 4.87988L6.38435 2.72363ZM4.33497 4.87988L3.19122 2.72363H5.70185L4.33497 4.87988ZM5.57997 9.84301L1.3106 5.44051H4.1831L5.57997 9.84301ZM7.90872 5.44051H10.6875L6.43685 9.82801L7.90872 5.44051ZM8.08497 5.06551L9.2306 2.89426L10.7681 5.06551H8.08497ZM2.85372 2.88676L4.0106 5.06551H1.24122L2.85372 2.88676Z" fill="#01091B" />
                  </svg>
                  ONE-TIME PURCHASE
                </span>
                <div className="mt-4 flex flex-col gap-4">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_248_425)">
                      <path d="M19.4019 4.75556C19.2684 4.75185 19.1344 4.75 19 4.75C11.1299 4.75 4.75 11.1299 4.75 19C4.75 26.87 11.1299 33.25 19 33.25C26.87 33.25 33.25 26.87 33.25 19C33.25 18.8656 33.2481 18.7316 33.2445 18.5981L37.44 14.4025C37.8057 15.8747 38 17.4147 38 19C38 29.4935 29.4935 38 19 38C8.50659 38 0 29.4935 0 19C0 8.50659 8.50659 0 19 0C20.5853 0 22.1253 0.194162 23.5975 0.560004L19.4019 4.75556Z" fill="#D71313" />
                      <path d="M9.5 19C9.5 14.5734 12.5276 10.8539 16.625 9.79932V14.8855C15.2052 15.7068 14.25 17.2419 14.25 19C14.25 21.6234 16.3766 23.75 19 23.75C20.7582 23.75 22.2932 22.7948 23.1145 21.375H28.2007C27.146 25.4725 23.4266 28.5001 19 28.5001C13.7533 28.5001 9.5 24.2467 9.5 19Z" fill="#FF4D4D" />
                      <path d="M33.2499 4.75L30.8749 0L23.7499 7.125V10.8913L18.5081 16.1331L21.8668 19.4919L27.1087 14.25H30.8749L37.9999 7.125L33.2499 4.75Z" fill="#002D87" />
                    </g>
                    <defs>
                      <clipPath id="clip0_248_425">
                        <rect width="38" height="38" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.66221 4.17578C8.69932 3.21254 8.04025 1.53047 7.71318 0C7.38561 1.53078 6.72725 3.2132 5.764 4.17645C4.80111 5.13902 3.11854 5.79809 1.58838 6.12582C3.11916 6.45289 4.80143 7.11156 5.76432 8.07484C6.72721 9.03773 7.38627 10.7202 7.71385 12.2506C8.04092 10.7198 8.69979 9.03742 9.66252 8.07418C10.6254 7.11129 12.308 6.45254 13.8381 6.1248C12.3077 5.79773 10.6254 5.13871 9.66221 4.17578Z" fill="#FFE942" />
                      <path d="M15.9167 11.8882C15.3419 11.3132 14.9475 10.3078 14.7521 9.39355C14.5564 10.3078 14.1633 11.3132 13.5879 11.8886C13.0126 12.4633 12.0073 12.8573 11.0933 13.0531C12.0076 13.2488 13.0126 13.6422 13.5879 14.2176C14.1633 14.7927 14.5571 15.798 14.7528 16.7123C14.9481 15.7977 15.3419 14.7927 15.9169 14.2173C16.492 13.6422 17.4974 13.2484 18.4113 13.0524C17.4974 12.857 16.4921 12.4633 15.9167 11.8882Z" fill="#FFE942" />
                      <path d="M5.71683 13.8555C5.55249 14.623 5.22249 15.4673 4.73952 15.9502C4.25663 16.4328 3.41265 16.7635 2.64526 16.9279C3.41265 17.0925 4.25663 17.4222 4.73952 17.9055C5.22249 18.3884 5.55315 19.232 5.71749 19.9999C5.88167 19.232 6.21183 18.3884 6.69495 17.9052C7.17753 17.4223 8.02167 17.0919 8.7889 16.9272C8.02171 16.7632 7.17753 16.4329 6.69464 15.9499C6.21183 15.4673 5.88101 14.623 5.71683 13.8555Z" fill="#FFE942" />
                    </svg>
                    What's Included</h4>
                  <ul className="mt-4 space-y-3 text-gray-900">
                    <li className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_248_438)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7948 7.82254L11.5957 16.83C11.5575 16.9425 11.5013 17.0475 11.4098 17.13C11.1075 17.415 10.6327 17.4 10.35 17.1L6.921 13.935C6.6375 13.635 6.65324 13.155 6.95549 12.8775C7.25774 12.5925 7.73249 12.6075 8.01599 12.9075L10.6995 15.3825L15.4958 7.07254C15.7028 6.72004 16.161 6.59246 16.5203 6.80246C16.8788 7.00496 17.0018 7.47004 16.7948 7.82254ZM21 0H3C1.34325 0 0 1.3425 0 3V21C0 22.6575 1.34325 24 3 24H21C22.6567 24 24 22.6575 24 21V3C24 1.3425 22.6567 0 21 0Z" fill="#1F5DD8" />
                        </g>
                        <defs>
                          <clipPath id="clip0_248_438">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Bulk Email Verification
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_248_438)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7948 7.82254L11.5957 16.83C11.5575 16.9425 11.5013 17.0475 11.4098 17.13C11.1075 17.415 10.6327 17.4 10.35 17.1L6.921 13.935C6.6375 13.635 6.65324 13.155 6.95549 12.8775C7.25774 12.5925 7.73249 12.6075 8.01599 12.9075L10.6995 15.3825L15.4958 7.07254C15.7028 6.72004 16.161 6.59246 16.5203 6.80246C16.8788 7.00496 17.0018 7.47004 16.7948 7.82254ZM21 0H3C1.34325 0 0 1.3425 0 3V21C0 22.6575 1.34325 24 3 24H21C22.6567 24 24 22.6575 24 21V3C24 1.3425 22.6567 0 21 0Z" fill="#1F5DD8" />
                        </g>
                        <defs>
                          <clipPath id="clip0_248_438">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> Real-time API Access
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_248_438)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7948 7.82254L11.5957 16.83C11.5575 16.9425 11.5013 17.0475 11.4098 17.13C11.1075 17.415 10.6327 17.4 10.35 17.1L6.921 13.935C6.6375 13.635 6.65324 13.155 6.95549 12.8775C7.25774 12.5925 7.73249 12.6075 8.01599 12.9075L10.6995 15.3825L15.4958 7.07254C15.7028 6.72004 16.161 6.59246 16.5203 6.80246C16.8788 7.00496 17.0018 7.47004 16.7948 7.82254ZM21 0H3C1.34325 0 0 1.3425 0 3V21C0 22.6575 1.34325 24 3 24H21C22.6567 24 24 22.6575 24 21V3C24 1.3425 22.6567 0 21 0Z" fill="#1F5DD8" />
                        </g>
                        <defs>
                          <clipPath id="clip0_248_438">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> CSV List Cleaning
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_248_438)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7948 7.82254L11.5957 16.83C11.5575 16.9425 11.5013 17.0475 11.4098 17.13C11.1075 17.415 10.6327 17.4 10.35 17.1L6.921 13.935C6.6375 13.635 6.65324 13.155 6.95549 12.8775C7.25774 12.5925 7.73249 12.6075 8.01599 12.9075L10.6995 15.3825L15.4958 7.07254C15.7028 6.72004 16.161 6.59246 16.5203 6.80246C16.8788 7.00496 17.0018 7.47004 16.7948 7.82254ZM21 0H3C1.34325 0 0 1.3425 0 3V21C0 22.6575 1.34325 24 3 24H21C22.6567 24 24 22.6575 24 21V3C24 1.3425 22.6567 0 21 0Z" fill="#1F5DD8" />
                        </g>
                        <defs>
                          <clipPath id="clip0_248_438">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> Disposable Email Detection
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_248_438)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7948 7.82254L11.5957 16.83C11.5575 16.9425 11.5013 17.0475 11.4098 17.13C11.1075 17.415 10.6327 17.4 10.35 17.1L6.921 13.935C6.6375 13.635 6.65324 13.155 6.95549 12.8775C7.25774 12.5925 7.73249 12.6075 8.01599 12.9075L10.6995 15.3825L15.4958 7.07254C15.7028 6.72004 16.161 6.59246 16.5203 6.80246C16.8788 7.00496 17.0018 7.47004 16.7948 7.82254ZM21 0H3C1.34325 0 0 1.3425 0 3V21C0 22.6575 1.34325 24 3 24H21C22.6567 24 24 22.6575 24 21V3C24 1.3425 22.6567 0 21 0Z" fill="#1F5DD8" />
                        </g>
                        <defs>
                          <clipPath id="clip0_248_438">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> Rule-based Filtering
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_248_438)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7948 7.82254L11.5957 16.83C11.5575 16.9425 11.5013 17.0475 11.4098 17.13C11.1075 17.415 10.6327 17.4 10.35 17.1L6.921 13.935C6.6375 13.635 6.65324 13.155 6.95549 12.8775C7.25774 12.5925 7.73249 12.6075 8.01599 12.9075L10.6995 15.3825L15.4958 7.07254C15.7028 6.72004 16.161 6.59246 16.5203 6.80246C16.8788 7.00496 17.0018 7.47004 16.7948 7.82254ZM21 0H3C1.34325 0 0 1.3425 0 3V21C0 22.6575 1.34325 24 3 24H21C22.6567 24 24 22.6575 24 21V3C24 1.3425 22.6567 0 21 0Z" fill="#1F5DD8" />
                        </g>
                        <defs>
                          <clipPath id="clip0_248_438">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> No Expiration Date
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
                  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 1.25L2.25 7.25H5.625L4.5 11.75L9.75 5.75H6.375L7.5 1.25Z" fill="url(#paint0_linear_248_494)" />
                    <defs>
                      <linearGradient id="paint0_linear_248_494" x1="6" y1="1.25" x2="6" y2="11.75" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFE100" />
                        <stop offset="1" stopColor="#E0690E" />
                      </linearGradient>
                    </defs>
                  </svg>
                  MONTHLY SUBSCRIPTION
                </span>
                <div className="mt-4 flex flex-col gap-3">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.48549 2.48549C0.166748 4.80422 0.166748 8.53617 0.166748 16.0001C0.166748 23.4639 0.166748 27.196 2.48549 29.5146C4.80422 31.8334 8.53617 31.8334 16.0001 31.8334C23.4639 31.8334 27.196 31.8334 29.5146 29.5146C31.8334 27.196 31.8334 23.4639 31.8334 16.0001C31.8334 8.53617 31.8334 4.80422 29.5146 2.48549C27.196 0.166748 23.4639 0.166748 16.0001 0.166748C8.53617 0.166748 4.80422 0.166748 2.48549 2.48549ZM5.646 14.5486C6.23619 9.34989 10.6548 5.31258 16.0153 5.31258C19.1534 5.31258 21.9696 6.69754 23.8811 8.88542C24.3126 9.37931 24.2621 10.1295 23.7681 10.561C23.2742 10.9925 22.524 10.9419 22.0926 10.4481C20.6133 8.75489 18.44 7.68758 16.0153 7.68758C11.966 7.68758 8.61608 10.6677 8.04117 14.5486H8.61627C9.09672 14.5486 9.52984 14.8382 9.71353 15.2822C9.89725 15.726 9.79535 16.2369 9.45539 16.5764L7.60564 18.4237C7.14203 18.8867 6.39104 18.8867 5.92742 18.4237L4.07766 16.5764C3.7377 16.2369 3.63582 15.726 3.81951 15.2822C4.00323 14.8382 4.43633 14.5486 4.91678 14.5486H5.646ZM24.3946 13.5765C24.8584 13.1135 25.6093 13.1135 26.0729 13.5765L27.9226 15.4237C28.2627 15.7632 28.3645 16.2742 28.1808 16.718C27.9972 17.1619 27.564 17.4515 27.0836 17.4515H26.3543C25.7642 22.6502 21.3454 26.6876 15.985 26.6876C12.8469 26.6876 10.0308 25.3026 8.11925 23.1148C7.68774 22.6208 7.7383 21.8706 8.23218 21.4391C8.72607 21.0077 9.47624 21.0582 9.90776 21.552C11.3871 23.2453 13.5603 24.3126 15.985 24.3126C20.0344 24.3126 23.3843 21.3324 23.9592 17.4515H23.3841C22.9036 17.4515 22.4705 17.1619 22.2867 16.718C22.103 16.2742 22.205 15.7632 22.5449 15.4237L24.3946 13.5765Z" fill="white" />
                  </svg>
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 1.25L3.75 11.25H9.375L7.5 18.75L16.25 8.75H10.625L12.5 1.25Z" fill="url(#paint0_linear_248_509)" />
                      <defs>
                        <linearGradient id="paint0_linear_248_509" x1="10" y1="1.25" x2="10" y2="18.75" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFE100" />
                          <stop offset="1" stopColor="#E0690E" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Premium Features</h4>
                  <ul className="mt-4 space-y-3 text-black">
                    <li className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_248_438)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7948 7.82254L11.5957 16.83C11.5575 16.9425 11.5013 17.0475 11.4098 17.13C11.1075 17.415 10.6327 17.4 10.35 17.1L6.921 13.935C6.6375 13.635 6.65324 13.155 6.95549 12.8775C7.25774 12.5925 7.73249 12.6075 8.01599 12.9075L10.6995 15.3825L15.4958 7.07254C15.7028 6.72004 16.161 6.59246 16.5203 6.80246C16.8788 7.00496 17.0018 7.47004 16.7948 7.82254ZM21 0H3C1.34325 0 0 1.3425 0 3V21C0 22.6575 1.34325 24 3 24H21C22.6567 24 24 22.6575 24 21V3C24 1.3425 22.6567 0 21 0Z" fill="#1F5DD8" />
                        </g>
                        <defs>
                          <clipPath id="clip0_248_438">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> Daily Auto-Verification
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_248_438)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7948 7.82254L11.5957 16.83C11.5575 16.9425 11.5013 17.0475 11.4098 17.13C11.1075 17.415 10.6327 17.4 10.35 17.1L6.921 13.935C6.6375 13.635 6.65324 13.155 6.95549 12.8775C7.25774 12.5925 7.73249 12.6075 8.01599 12.9075L10.6995 15.3825L15.4958 7.07254C15.7028 6.72004 16.161 6.59246 16.5203 6.80246C16.8788 7.00496 17.0018 7.47004 16.7948 7.82254ZM21 0H3C1.34325 0 0 1.3425 0 3V21C0 22.6575 1.34325 24 3 24H21C22.6567 24 24 22.6575 24 21V3C24 1.3425 22.6567 0 21 0Z" fill="#1F5DD8" />
                        </g>
                        <defs>
                          <clipPath id="clip0_248_438">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> Priority API Speed
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_248_438)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7948 7.82254L11.5957 16.83C11.5575 16.9425 11.5013 17.0475 11.4098 17.13C11.1075 17.415 10.6327 17.4 10.35 17.1L6.921 13.935C6.6375 13.635 6.65324 13.155 6.95549 12.8775C7.25774 12.5925 7.73249 12.6075 8.01599 12.9075L10.6995 15.3825L15.4958 7.07254C15.7028 6.72004 16.161 6.59246 16.5203 6.80246C16.8788 7.00496 17.0018 7.47004 16.7948 7.82254ZM21 0H3C1.34325 0 0 1.3425 0 3V21C0 22.6575 1.34325 24 3 24H21C22.6567 24 24 22.6575 24 21V3C24 1.3425 22.6567 0 21 0Z" fill="#1F5DD8" />
                        </g>
                        <defs>
                          <clipPath id="clip0_248_438">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> Webhook Notifications
                    </li>
                    <li className="flex items-center gap-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_248_438)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.7948 7.82254L11.5957 16.83C11.5575 16.9425 11.5013 17.0475 11.4098 17.13C11.1075 17.415 10.6327 17.4 10.35 17.1L6.921 13.935C6.6375 13.635 6.65324 13.155 6.95549 12.8775C7.25774 12.5925 7.73249 12.6075 8.01599 12.9075L10.6995 15.3825L15.4958 7.07254C15.7028 6.72004 16.161 6.59246 16.5203 6.80246C16.8788 7.00496 17.0018 7.47004 16.7948 7.82254ZM21 0H3C1.34325 0 0 1.3425 0 3V21C0 22.6575 1.34325 24 3 24H21C22.6567 24 24 22.6575 24 21V3C24 1.3425 22.6567 0 21 0Z" fill="#1F5DD8" />
                        </g>
                        <defs>
                          <clipPath id="clip0_248_438">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> Team Collaboration
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