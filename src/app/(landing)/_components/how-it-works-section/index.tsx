import React from 'react'
import { StepCarousel } from '../step-carousel';

export default function HowItWorksSection() {
  return (
      <div className="w-5/6 mb-24 h-full flex flex-col gap-8 items-center">
          <div>
              <h3 className="text-5xl font-gambarino text-center leading-tight ">How it works</h3>
          </div>
          <StepCarousel />
      </div>
  );
}
