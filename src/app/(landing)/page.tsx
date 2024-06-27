import BlurIn from "@/components/blur-in-text";
import Code from "@/components/codeblock";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {  ArrowUpRight, Bot, BrainCircuit, ChevronsUpDown, Dot,  MessageCircle, MoveUpRight, Play, PlayCircle, Workflow } from "lucide-react";

import { WobbleCard } from "@/components/wobble-card";

import { FAQ } from "./_components/faq";
import { FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";

import HeroTitle from "./_components/hero-title";
import HeroVideo from "./_components/hero-video";
import { code } from "@/lib/constants";
import PipelineSection from "./_components/pipeline-section";
import IntegrationsSection from "./_components/integrations-section";
import AssistantsCard from "./_components/assistants-card";
import ChatbotCard from "./_components/chatbot-card";
import WorkflowSection from "./_components/workflow-section";
import AvailableFormatSection from "./_components/available-format-section";
import HowItWorksSection from "./_components/how-it-works-section";
import EnterpriseGrid from "./_components/enterprise-grid";
import DocsSection from "./_components/docs-section";
import FAQSection from "./_components/faq-section";
import FooterCTASection from "./_components/footer-cta-section";
import Footer from "./_components/footer";




export default function Home() {
  return (
      <main className="p-0 px-4 max-w-[1440px] mx-auto md:px-0 md:p-0 w-full flex flex-col items-center justify-center  ">
          <HeroTitle />
          <HeroVideo />
          

          <PipelineSection />

          <IntegrationsSection />

          <AssistantsCard />
          <ChatbotCard />

          <WorkflowSection />

          <AvailableFormatSection/>

          <HowItWorksSection/>

          <EnterpriseGrid/>
          <DocsSection />
          
          <FAQSection />
          
          <FooterCTASection/>
          <Footer/>
      </main>
  );
}
