import React from 'react'
import WorkflowAutomationTabs from '../workflow-automation-tabs';

export default function WorkflowSection() {
  return (
      <div className="md:w-5/6 w-full">
          <div className=" w-full flex flex-col  items-center justify-between gap-4 py-8">
              <h3 className="text-3xl font-bricolage text-left md:text-center font-semibold">
                  Workflow Automation
              </h3>
              <p className="text-lg font-normal tracking-tight leading-relaxed max-w-xs md:px-0 text-left md:text-center  font-geist text-neutral-400 md:max-w-3xl">
                  Automate the creation of marketing copy, personalized outbound emails, call
                  summaries, and graphics at scale.
              </p>
          </div>
          <div className=" w-full mb-24 h-[28rem] overflow-hidden flex flex-col gap-8 md:p-1 p-0  rounded-3xl">
              <WorkflowAutomationTabs />
          </div>
      </div>
  );
}
