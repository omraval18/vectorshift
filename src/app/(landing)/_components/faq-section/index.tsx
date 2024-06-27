import React from 'react'
import { FAQ } from '../faq';

export default function FAQSection() {
  return (
      <div className="md:w-5/6 w-full mb-24 mt-24 h-full flex flex-col gap-24 items-center">
          <div>
              <h3 className="text-5xl font-gambarino text-center leading-tight ">
                  Frequently Asked Questions
              </h3>
          </div>
          <FAQ />
      </div>
  );
}
