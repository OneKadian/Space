import { VisualDisplay } from "@/components/main/Display";
import { Hero } from "@/components/main/Hero";
import { Projects } from "@/components/main/projects";
import { Introduction } from "@/components/main/Introduction";
import PricingTable from '../components/main/PricingTable'
import Frequently from '../components/main/FAQ'
import Features from '../components/main/Features'
import Testimanual from '../components/main/Testimonial'


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Introduction />
        <VisualDisplay/>
        <PricingTable />
        <Features/>
        <Testimanual/>
        <Projects />
        <Frequently/>
      </div>
    </main>
  );
}
