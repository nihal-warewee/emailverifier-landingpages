import { useEffect, useState, useMemo } from "react";




export default function OfferBanner() {
    // target date/time here, Example target (12 PM, Nov 05, 2025)
    const targetDate = useMemo(() => new Date("2025-11-05T12:55:00"), []);

    const [visible, setVisible] = useState(() => Date.now() < targetDate.getTime());
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });



    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(timer);
                setVisible(false);
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                return;
            }


            const totalSeconds = Math.floor(difference / 1000);
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            setTimeLeft({ hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!visible) return null;

    return (
        <div role="alert"
            className={`w-full bg-gradient-to-b from-[#7AA1EE] to-[#5105FF]
      text-white text-sm sm:text-md xl:text-xl
       flex flex-col lg:flex-row justify-center items-center py-4 pr-6 px-2 lg:px-6 gap-3 xl:gap-10
       relative transition-all duration-500 
       ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
            <span className="max-w-[95%]">
                Limited Time Launch Offer: <b>100,000</b> Validation Credits&nbsp;-&nbsp;
                <b>Just $49</b>
            </span>

            <a
                href="https://app.emailverifier.io/register"
                className="bg-gradient-to-b from-white to-white/70 text-[#5105FF] px-5 py-2 rounded-md text-sm font-medium transition inline-flex items-center gap-2"
            >
                Get Started
                <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.9038 4.1012L8.34615 1.53964C8.16667 1.35988 8.08066 1.15016 8.08814 0.91048C8.09562 0.670802 8.18162 0.461082 8.34615 0.281323C8.52564 0.101564 8.73878 0.00794029 8.98558 0.000450134C9.23237 -0.00704002 9.44551 0.0790949 9.625 0.258854L13.7308 4.37084C13.9103 4.5506 14 4.76032 14 5C14 5.23968 13.9103 5.4494 13.7308 5.62916L9.625 9.74115C9.44551 9.92091 9.23237 10.007 8.98558 9.99955C8.73878 9.99206 8.52564 9.89844 8.34615 9.71868C8.18162 9.53892 8.09562 9.3292 8.08814 9.08952C8.08066 8.84984 8.16667 8.64012 8.34615 8.46036L10.9038 5.8988L0.897435 5.8988C0.643162 5.8988 0.430021 5.81266 0.258013 5.64039C0.0860043 5.46812 0 5.25466 0 5C0 4.74534 0.0860043 4.53188 0.258013 4.35961C0.430021 4.18734 0.643162 4.1012 0.897435 4.1012L10.9038 4.1012Z"
                        fill="#1F5DD8"
                    />
                </svg>
            </a>

            {/* Countdown */}
            <div className="flex items-center gap-1 lg:gap-3 text-sm lg:text-lg ml-2">
                <span>Expiring in:</span>

                <div className="px-3 py-1 bg-gradient-to-b from-white/40 to-white/10 rounded-lg lg:rounded-xl backdrop-blur-xl shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                    {String(timeLeft.hours).padStart(2, "0")}H
                </div>
                :
                <div className="px-3 py-1 bg-gradient-to-b from-white/40 to-white/10 rounded-lg lg:rounded-xl backdrop-blur-xl shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                    {String(timeLeft.minutes).padStart(2, "0")}M
                </div>
                :
                <div className="px-3 py-1 bg-gradient-to-b from-white/40 to-white/10 rounded-lg lg:rounded-xl backdrop-blur-xl shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                    {String(timeLeft.seconds).padStart(2, "0")}S
                </div>
            </div>

            {/* Dismiss button */}
            <button
                onClick={() => setVisible(false)}
                className="absolute top-4 lg:top-1/2 lg:-translate-y-1/2 right-4 text-white/80 hover:text-white text-lg leading-none"
                aria-label="Close offer banner"
            >
                ✕
            </button>
        </div>
    );
}
