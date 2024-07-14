import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const duration = 5000; // total duration in milliseconds
    const increment = 100; // target count
    const intervalTime = duration / increment;

    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);

      if (currentCount >= increment) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden w-full px-6 lg:px-48">
      <div className="relative z-10 w-full h-full flex flex-col pt-12 items-center justify-center">
        <div className="h-[600px] w-[400px] bg-blue-midlight border-[1px] border-black overflow-y-scroll overflow-x-hidden relative">
          <div className="absolute inset-0 z-0">
            <Image
              unoptimized
              fetchPriority="high"
              loading="lazy"
              src="/bkg_extension.svg"
              alt=""
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="z-10 w-full flex flex-col items-center justify-center">
            <div className="relative h-[100px] w-full bg-black/15 backdrop-blur-md border-greentheme border-b-[2px] flex flex-col items-center justify-center">
              <Image
                unoptimized
                fetchPriority="high"
                loading="lazy"
                src="/logo.svg"
                alt=""
                width={100}
                height={100}
                className="absolute top-[15px] left-[15px] h-5 w-auto"
              />
              <h1 className="absolute w-full flex flex-col items-center bottom-[15px] text-white text-3xl font-bold">
                <p>My Data Points</p>
              </h1>
            </div>
            <div className="relative w-full h-[350px] flex flex-col items-center justify-center">
              <div
                className={`absolute h-[300px] w-[300px] ${
                  isSpinning ? "animate-spin" : ""
                } hover:scale-110 transition-transform duration-500 z-20`}
              >
                <img
                  src="/circle_points.svg"
                  alt="Spinning SVG"
                  width={100}
                  height={100}
                  className="h-full w-full"
                />
              </div>
              <h1 className="absolute h-[300px] w-[300px] flex flex-col items-center justify-center text-5xl font-bold text-center text-white hover:scale-110 transition-transform duration-500">
                {count}
              </h1>
            </div>
            <div className="w-full flex flex-col items-center justify-center bg-red-500">
              <p>
                You are doing great! Keep allowing access to open tabs and earn
                more points.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
