import { BentoCard } from '@/components/bento-grid';
import React from 'react'
import { IntegrationsBeam } from '../integrations-beam';
import { BrainCircuit, Workflow } from 'lucide-react';
import IconsFloat from '../icons-float';

export default function IntegrationsSection() {
  return (
      <div className="w-5/6 md:mt-48 mt-24 ">
          <div className="flex justify-center flex-col items-center gap-4">
              <h3 className="text-3xl md:text-5xl font-gambarino text-center leading-tight">
                  Everything you need.
                  <br /> Nothing you don’t
              </h3>
              <p className="font-inter tracking-tight text-neutral-400 text-base md:text-lg font-light max-w-4xl text-center">
                  Live-sync, set up action based triggers (e.g., receive an email), and automate
                  actions (e.g., send a slack message) across your tool stack
              </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center mt-8 max-w-5xl mx-auto items-center gap-4 mb-24">
              <BentoCard
                  name="Integrations and automations"
                  description="Live-sync, set up action based triggers (e.g., receive an email), and automate actions (e.g., send a slack message) across your tool stack"
                  background={
                      <IntegrationsBeam className="absolute opacity-75 right-2 top-4 h-[300px] w-[600px]  border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
                  }
                  href="/"
                  cta="Learn more"
                  Icon={Workflow}
                  className="md:flex-[0.5] min-h-[28rem] min-w-[20rem] "
              />
              <BentoCard
                  name="Large language models"
                  description="Access the latest models through the VectorShift platform"
                  background={<IconsFloat />}
                  href="/work/iot"
                  cta="Learn more"
                  Icon={BrainCircuit}
                  className="md:flex-[0.5] min-h-[28rem] min-w-[20rem]"
              />
          </div>
      </div>
  );
}
